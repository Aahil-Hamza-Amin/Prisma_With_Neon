import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Ahmad",
        email: "ahmad@gmail.com",
        age: 22,
        isMarried: false,
        nationality: "Pakistan",
      },
      {
        name: "Rehman",
        email: "rehman@gmail.com",
        age: 20,
        isMarried: true,
        nationality: "Pakistani",
      },
      {
        name: "Bob",
        email: "bob@gmail.com",
        age: 23,
        isMarried: false,
        nationality: "Brazil",
      },
      {
        name: "Aisa",
        email: "aisa@gmail.com",
        age: 18,
        isMarried: false,
        nationality: "Spain",
      },
      {
        name: "Lisam",
        email: "lisam@gmail.com",
        age: 30,
        isMarried: true,
        nationality: "USA",
      },
      {
        name: "Nisam",
        email: "nisam@gmail.com",
        age: 39,
        isMarried: true,
        nationality: "Australia",
      },
      {
        name: "Jaccob",
        email: "jacob@gmail.com",
        age: 28,
        isMarried: false,
        nationality: "Astria",
      },
      {
        name: "Dom",
        email: "dom@gmail.com",
        age: 32,
        isMarried: true,
        nationality: "Germany",
      },
      {
        name: "Rey",
        email: "rey@gmail.com",
        age: 26,
        isMarried: false,
        nationality: "Bangladesh",
      },
      {
        name: "Aish",
        email: "aish@gmail.com",
        age: 19,
        isMarried: true,
        nationality: "India",
      },
    ],
  });
}

seed().then(() => prisma.$disconnect());
