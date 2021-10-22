import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import addUser from "utils/cms/mutations/addUser";

const afterCallback = async (req, res, session, state) => {
  try {
    await addUser(session.user);
  } catch (err) {
    console.log(err);
  }
  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
