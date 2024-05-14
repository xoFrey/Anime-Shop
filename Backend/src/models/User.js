import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true, trim: true },
    passwordSalt: { type: String, required: true, trim: true },
    isVerified: { type: Boolean, default: false },
    sixDigitCode: { type: String, required: true },
    isAdmin: {
      type: String,
      enum: ["Superadmin", "Admin", "Customer"],
    }, //?????????????enum hauptadmin, admin. customer => nach login von hauptadmin kann man admin registrieren
    // hacken zu "is admin" kann nur gesetzt werden wenn hauptadmin eingeloggt ist
    // auf backend seite auch prüfen!!! nicht nur front end
  },
  { collection: "users", timestamps: true },
);

export const User = mongoose.model("User", userSchema);
