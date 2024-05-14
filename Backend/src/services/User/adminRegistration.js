import { User } from "../../models/User.js";
import { generateAuthCode } from "../../utils/authCode.js";
import { generateRandomSalt, hash } from "../../utils/hash.js";
import { sendEmailVerification } from "../../utils/sendEmailVerification.js";

export const adminRegistration = async (
  { firstname, lastname, email, password, isAdmin },
  authenticatedUserId,
) => {
  const foundUser = await User.findOne({ email });
  if (foundUser) throw new Error("User already exists with this Email");

  const loggedAdmin = await User.findById(authenticatedUserId);
  if (loggedAdmin.isAdmin !== "Superadmin")
    throw new Error("Superadmin has to be logged in");

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
    isAdmin,
  });

  await sendEmailVerification(user);

  return {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    isAdmin: user.isAdmin,
  };
};
