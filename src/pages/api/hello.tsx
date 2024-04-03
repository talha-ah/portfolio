// Create a new API route at src/pages/api/hello.tsx

import { NextApiRequest, NextApiResponse } from "next"

const main = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" })
}

export default main
