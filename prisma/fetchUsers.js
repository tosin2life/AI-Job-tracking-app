import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fetchUsers() {
  const users = await prisma.user.findMany();
  console.log("Users in the database:", users);
}

fetchUsers()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
