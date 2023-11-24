import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import People from "@/models/people";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const people = await People.find({});
        res.status(200).json({ success: true, data: people });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const people = await People.create(req.body);
        res.status(201).json({ success: true, data: people });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
