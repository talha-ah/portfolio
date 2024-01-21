import * as React from "react"
import NextLink, { LinkProps } from "next/link"

import { Typography } from "@mui/material"

interface NextLinkProps
  extends Omit<LinkProps, "href" | "as" | "onClick" | "onMouseEnter"> {
  to: LinkProps["href"]
  linkAs?: LinkProps["as"]
}

export const LinkBehaviour = React.forwardRef<HTMLAnchorElement, NextLinkProps>(
  function LinkBehaviour(props, ref) {
    const { to, linkAs, replace, scroll, shallow, prefetch, locale, ...other } =
      props

    return (
      <NextLink
        passHref
        ref={ref}
        href={to}
        as={linkAs}
        scroll={scroll}
        locale={locale}
        replace={replace}
        shallow={shallow}
        prefetch={prefetch}
        {...other}
      />
    )
  }
)

export const Link = ({
  to,
  sx,
  children,
  underline,
  ...other
}: {
  to: string
  underline?: boolean
  sx?: React.CSSProperties
  children: React.ReactNode
  [key: string]: any
}) => {
  return to ? (
    <Typography
      passHref
      href={to}
      color="inherit"
      variant="body2"
      component={NextLink}
      style={{ textDecoration: underline ? "underline" : "none" }}
      sx={sx}
      {...other}
    >
      {children}
    </Typography>
  ) : (
    <>{children}</>
  )
}
