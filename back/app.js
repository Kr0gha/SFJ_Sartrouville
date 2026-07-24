import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import express from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import { Strategy as DiscordStrategy } from "passport-discord";
import "./config/passport.js";

const app = express();
dotenv.config();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/discord",
  passport.authenticate("discord", { scope: ["identify", "email"] })
);

app.get(
  "/auth/discord/callback",
  passport.authenticate("discord", { failureRedirect: "/" }),
  (req, res) => {
    const user = req.user;

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
res.cookie("JWT", token, {
  httpOnly: true,
  secure: false, // true en HTTPS en prod
  sameSite: "lax",
});
    // REDIRECTION APRES LA CONNECTION
    res.redirect(`${process.env.FRONTEND_URL}/profil`);
  }
);

app.get("/api/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ error: "Non autorisé" });
  }
});

app.post("/auth/logout", (req, res) => {
  // 1. Supprime le cookie JWT
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // mets true en prod (HTTPS)
  });

  // 2. Déconnecte la session Passport (Discord OAuth)
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }

    req.session.destroy(() => {
      res.json({ success: true });
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});