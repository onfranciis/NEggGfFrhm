import { compare } from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import MockData from "./Data";
dotenv.config();

interface IFormType {
  email: string;
  password: string;
}

const app = express();
const port = 1234;

app.use(cors({ origin: "*" }));
app.use(json());

app.get("/", (_, res) => {
  res.json({ connected: true });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body as IFormType;

  if (!email || !password) {
    res.status(400).send({
      msg: "No password or email was sent!",
    });
  }

  const selectedData = MockData[email];

  if (!selectedData) {
    return res.status(401).send({ msg: "Incorrect email or password!" });
  }

  const hashedPassword = await compare(password, selectedData.password);

  if (!hashedPassword) {
    return res.status(401).send({ msg: "Incorrect email or password!" });
  }

  return res.json({ email, ...selectedData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
