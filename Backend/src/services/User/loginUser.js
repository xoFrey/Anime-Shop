import { User } from "../../models/User.js";
import { createToken } from "../../utils/createToken.js";
import { hash } from "../../utils/hash.js";

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User doesnt exist!");
  if (!user.isVerified) throw new Error("User is not verified!");

  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPassword = passwordHash === user.passwordHash;
  if (!correctPassword) throw new Error("Incorrect Password!");

  const accessToken = createToken(user, "accesss");

  return {
    user: {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
    },
    tokens: { accessToken },
  };
};
