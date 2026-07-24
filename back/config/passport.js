import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import dotenv from "dotenv";

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

dotenv.config();

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_CALLBACK_URL,
      scope: ['identify', 'email'], // Ajoute d'autres scopes si nécessaire
    },
    (accessToken, refreshToken, profile, done) => {
      // Ici, tu peux vérifier si l'utilisateur existe en base de données
      // ou le créer s'il n'existe pas.
      // Exemple : profile.id, profile.username, profile.email
      return done(null, profile);
    }
  )
);