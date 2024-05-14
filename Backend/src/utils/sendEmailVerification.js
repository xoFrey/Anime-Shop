import { sendEmail } from "./sendEmail.js";

export const sendEmailVerification = (user) => {
  return sendEmail({
    to: user.email,
    subject: "Please verify your E-mail",
    text: `Hi ${user.firstname} ${user.lastname}.
        Welcome to Anime-For-Life-Shop! 
        Please enter your Verificationcode to be able to login.
        ${user.sixDigitCode}
        Thank you!`,
  });
};
