// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { callAxios } from "@utils/common"

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const response = await callAxios({
    url: `https://api.github.com/repos/vercel/next.js/commits`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  })

  res.status(200).json(response)
}
