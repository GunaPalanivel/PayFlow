import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the payFlow!");
});

app.listen(3000, () => {
  console.log(`PayFlow is running on http://localhost:3000`);
});

export default app;
