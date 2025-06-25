import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const tasks = await prisma.task.findMany();
    return res.json(tasks);
  } else if (req.method === "POST") {
    const { title } = req.body;
    const task = await prisma.task.create({ data: { title } });
    return res.status(201).json(task);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
