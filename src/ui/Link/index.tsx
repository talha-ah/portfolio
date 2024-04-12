import * as React from "react"
import NextLink, { LinkProps } from "next/link"

import { ArrowForward } from "@mui/icons-material"
import { Theme, SxProps, Typography } from "@mui/material"

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
  sx?: SxProps
  underline?: boolean
  children: React.ReactNode
  [key: string]: any
}) => {
  return (
    <Typography
      passHref
      href={to}
      component={NextLink}
      sx={{
        color: "inherit",
        fontSize: "inherit",
        fontWeight: "inherit",
        lineHeight: "inherit",
        fontFamily: "inherit",
        transition: "color 0.2s",
        textDecoration: underline ? "underline" : "none",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Typography>
  )
}

export const LinkArrow = ({
  to,
  sx,
  children,
  ...other
}: {
  to: string
  sx?: SxProps
  children: React.ReactNode
  [key: string]: any
}) => {
  return (
    <Typography
      passHref
      href={to}
      color="inherit"
      variant="body2"
      component={NextLink}
      sx={{
        gap: 0.5,
        display: "flex",
        fontWeight: 700,
        fontSize: "18px",
        width: "fit-content",
        alignItems: "center",
        textDecoration: "none",
        position: "relative" as const,

        "& > svg": {
          fontSize: "inherit",
          transitionDuration: ".3s",
          transitionProperty: "transform",
          transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
        },

        "&::after": {
          left: 0,
          bottom: -6,
          content: '""',
          position: "absolute",

          width: "100%",
          height: "3px",
          transition: "all .3s",

          backgroundSize: "200% 100%",
          backgroundImage: (theme: Theme) =>
            `linear-gradient(to right, #8895aa 50%, ${theme.palette.primary.main} 50%)`,
        },

        "&:hover": {
          "& > svg": {
            transform: "translateX(5px)",
          },

          "&::after": {
            backgroundPosition: "-100% 0",
          },
        },

        ...sx,
      }}
      {...other}
    >
      {children} <ArrowForward color="primary" />
    </Typography>
  )
}
