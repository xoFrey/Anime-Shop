import { UserService } from "../services/index.js";

const registerUserCtrl = async (req, res) => {
  try {
    const userInfo = req.body;
    const registeredUser = await UserService.registerUser(userInfo);
    res.status(201).json({ registeredUser });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not register new User! " });
  }
};

const loginUserCtrl = async (req, res) => {
  try {
    const userInfo = req.body;
    const loggedUser = await UserService.loginUser(userInfo);
    res.status(200).json({ loggedUser });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not log in User!" });
  }
};

const verifyUserCtrl = async (req, res) => {
  try {
    const userInfo = {
      userId: req.body.userId,
      sixDigitCode: req.body.sixDigitCode,
    };

    const verified = await UserService.verifyUser(userInfo);
    res.json({ verified });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Verification failed" });
  }
};

export const UserController = {
  registerUserCtrl,
  loginUserCtrl,
  verifyUserCtrl,
};
