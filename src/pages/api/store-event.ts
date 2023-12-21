import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client/edge";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  res.status(200).json("success");
}
