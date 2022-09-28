import nextConnect from "next-connect";
import auth from "../../middleware/auth";

const handler = nextConnect();

handler
  .use(auth)
  .get((req, res) => {
    if (!req.user) {
      return res.json({ user: false });
    }
    return res.json({ user: req.user });
  })
  .use((req, res, next) => {
    if (!req.user) {
      res.status(401).send("unauthenticated");
    } else {
      next();
    }
  });
export default handler;
