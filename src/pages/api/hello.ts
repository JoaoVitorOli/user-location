// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import requestIp from "request-ip";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const clientIp = requestIp.getClientIp(req);

    console.log(clientIp);

    if (clientIp !== null) {
      return res.status(200).json({ name: clientIp })
    }
  }

  res.status(200).json({ name: 'John Doe' })
}
