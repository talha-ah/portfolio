import React from "react"
import DOMPurify from "dompurify"

import { Box } from "@mui/material"

export const ParseHTML = ({ children, ...rest }: any) => {
  return (
    <Box
      {...rest}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }}
    />
  )
}
