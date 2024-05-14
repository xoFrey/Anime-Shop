import { User } from "../../models/User.js";

export const verifyUser = async ({ userId, sixDigitCode }) => {
  const user = await User.findById(userId);
  console.log(userId);
  if (!user) throw new Error("User does not exist");

  const codeMatched = user.sixDigitCode === sixDigitCode;
  if (!codeMatched)
    throw new Error("Verification Code wrong! Please try again!");
  user.isVerified = true;
  await user.save();

  return { message: "You can now login!" };
};
