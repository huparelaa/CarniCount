import { pool } from "../db.js";

export async function signup(req, res) {
  try {
    const { fullName, email, password } = req.body;

    const [rows] = await pool.query("SELECT * FROM `User` WHERE email = ?", [
      email,
    ]);

    if (rows.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const [result] = await pool.query(
      "INSERT INTO `User`(fullName, email, password) VALUES (?,?,?)",
      [fullName, email, password]
    );

    res.json({
      message: "Success",
      id: result.insertId,
      fullName,
      email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const [result] = await pool.query(
      "SELECT * FROM `User` WHERE email = ? AND password = ?",
      [email, password]
    );

    const userExists = result.length > 0;
    if (userExists) {
      const { password, ...user } = result[0]; //Removing the password in the response
      return res.json({ message: "User exists", ...user }); //Return a success msg and object user without password
    } else {
      return res.json({ message: "User does not exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
