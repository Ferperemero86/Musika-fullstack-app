import passport from "passport";
import LocalStrategy from "passport-local";
//import { findUserByUsername, validatePassword } from './db'
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

passport.serializeUser(function (user, done) {
  // serialize the username into session
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  // deserialize the username back into user object
  done(null, user);
});

passport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    async (req, email, password, done) => {
      // Here you lookup the user in your DB and compare the password/hashed passwor
      const user = await prisma.user
        .findUnique({
          where: {
            email,
          },
        })
        .then((res) => {
          return res;
        })
        .catch((err) => err);
      // Security-wise, if you hashed the password earlier, you must verify it
      const validPass = await bcrypt
        .compare(password, user.password)
        .then(function (result) {
          return result;
        });

      if (!user || !validPass) {
        return done(null, null);
      } else {
        return done(null, user);
      }
    }
  )
);

export default passport;
