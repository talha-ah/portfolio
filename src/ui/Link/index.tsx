import * as React from "react"
import NextLink, { LinkProps } from "next/link"

import { ArrowForward } from "@mui/icons-material"
import { SxProps, Typography } from "@mui/material"

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
  return to ? (
    <Typography
      passHref
      href={to}
      color="inherit"
      variant="body2"
      component={NextLink}
      style={{
        fontFamily: "inherit",
        transition: "color 0.2s",
        textDecoration: underline ? "underline" : "none",
      }}
      sx={sx}
      {...other}
    >
      {children}
    </Typography>
  ) : (
    <>{children}</>
  )
}

export const LinkArrow = ({
  to,
  sx,
  children,
  arrowColor = "inherit",
  ...other
}: {
  to: string
  sx?: SxProps
  children: React.ReactNode
  arrowColor?:
    | "inherit"
    | "disabled"
    | "action"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
  [key: string]: any
}) => {
  return to ? (
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
          backgroundImage:
            "linear-gradient(to right, #8895aa 50%, #ffffff 50%)",
        },

        "&:hover": {
          "& > svg": {
            transform: "translateX(4px)",
            transition: "transform .3s ease-out",
          },

          "&::after": {
            backgroundPosition: "-100% 0",
          },
        },

        ...sx,
      }}
      {...other}
    >
      {children} <ArrowForward color={arrowColor} />
    </Typography>
  ) : (
    <>{children}</>
  )
}
