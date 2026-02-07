import "dotenv/config"; // <--- VERY IMPORTANT: Loads your .env file
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

if (!process.env.DIRECT_URL) {
  throw new Error("DIRECT_URL is missing from .env file");
}

const connectionString = process.env.DIRECT_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const tickets = [
  {
    title: "Ticket 1",
    content: "First ticket...",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 2",
    content: "Second ticket...",
    status: "IN_PROGRESS" as const,
  },
  {
    title: "Ticket 3",
    content: "Third ticket...",
    status: "DONE" as const,
  },
];

const seed = async () => {
  try {
    console.log("Seeding database...");
    await prisma.ticket.deleteMany();
    await prisma.ticket.createMany({
      data: tickets,
    });
    console.log("Seed successful! 🌱");
  } catch (error) {
    console.error("Error seeding:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end(); // Closes the connection so the script can exit
  }
};

seed();
