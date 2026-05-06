import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Quote Submissions
  app.post("/api/quote", async (req, res) => {
    const { name, email, phone, date, venue, eventType, services, message } = req.body;

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set.");
      // We still return 200 for the demo purpose if someone didn't set it up yet, 
      // but in production we'd want to handle this better.
      // However, the instructions say "Build real integrations".
      return res.status(500).json({ error: "Email service not configured. Please set RESEND_API_KEY in environment variables." });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { data, error } = await resend.emails.send({
        from: 'RadiantAV Quotes <onboarding@resend.dev>',
        to: ['robert@ingrambargroup.com'],
        subject: `New Quote Request: ${eventType} from ${name}`,
        html: `
          <h1>New Quote Request</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Venue:</strong> ${venue}</p>
          <p><strong>Event Type:</strong> ${eventType}</p>
          <p><strong>Services:</strong> ${services.join(', ')}</p>
          <p><strong>Message:</strong> ${message || 'N/A'}</p>
        `,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(400).json({ error });
      }

      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Unexpected Error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
