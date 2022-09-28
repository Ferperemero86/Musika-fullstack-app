import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import passport from "../../authentication/passport";
import { PrismaClient } from "@prisma/client";

const handler = nextConnect();
const prisma = new PrismaClient();

handler.use(auth).get(async (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).json({});

  const { email } = req.user;

  await prisma.user
    .findUnique({
      where: {
        email,
      },
    })
    .then((user) => {
      return res.json({ user });
    })
    .catch((err) => err);
});

export default handler;
