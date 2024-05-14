import { User } from "../../models/User.js";
import { generateAuthCode } from "../../utils/authCode.js";
import { generateRandomSalt, hash } from "../../utils/hash.js";
import { sendEmailVerification } from "../../utils/sendEmailVerification.js";

export const registerUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  const foundUser = await User.findOne({ email });
  if (foundUser) throw new Error("User already exists with this Email");

  const passwordSalt = generateRandomSalt();
  const passwordHash = hash(`${password}${passwordSalt}`);
  const sixDigitCode = generateAuthCode();

  const user = await User.create({
    firstname,
    lastname,
    email,
    passwordHash,
    passwordSalt,
    isVerified: false,
    sixDigitCode,
  });

  await sendEmailVerification(user);

  return {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  };
};
