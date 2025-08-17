import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const user = await prisma.user.findMany({
      where: {
        nationality: { in: ["Pakistan", "Brazil", "India"] },
      },
    });
    res.status(200).json({
      status: "success",
      result: user.length,
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
});

app.put("/users", async (req, res) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { email: "jacob@gmail.com" },
      data: { age: 35, isMarried: true, name: "Jacob" },
    });
    return res.status(200).json({
      status: "success",
      data: {
        updatedUser,
      },
    });
  } catch (error) {
    return res.status(404).json({
      status: "fail",
      error,
    });
  }
});

app.delete("/users", async (req, res) => {
  try {
    const deletedUsers = await prisma.user.deleteMany({
      where: { age: { gt: 40 } },
    });
    return res.status(200).json({
      status: "success",
      deletedUsers,
    });
  } catch (error) {
    return res.status(404).json({
      status: "fail",
      error,
    });
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
