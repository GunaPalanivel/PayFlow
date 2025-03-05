import { Router } from "express";

const userRouter = Router();

// GET /users - get all users
// GET /users/:id - get user by id // 123 - id
// POST /users - create a new user
// PATCH /users/:id - update user by id
// PUT /users/:id - update user by id
// DELETE /users/:id - delete user by id

userRouter.get("/", (req, res) => {
  res.send({ title: "GET all Users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "GET User details" });
});

userRouter.post("/", (req, res) => {
  res.send({ title: "Create new User" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE User" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE all Users" });
});

export default userRouter;
