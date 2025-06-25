import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const { completed } = req.body;
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { completed },
    });
    return res.json(task);
  } else if (req.method === "DELETE") {
    await prisma.task.delete({ where: { id: Number(id) } });
    return res.status(204).end();
  } else {
    res.setHeader("Allow", ["PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
