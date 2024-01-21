import React, { useMemo } from "react"
import { useRouter } from "next/navigation"

import { Avatar } from "@mui/material"
import { Logout, Person, HomeOutlined } from "@mui/icons-material"

import { Menu } from "@ui/Menu"
import { Link } from "@utils/types"
import { IconButton } from "@ui/IconButton"
import { getInitials } from "@utils/common"
import { useAppContext, AuthTypes } from "@contexts/index"

export const UserMenu = ({
  position = "bottom",
}: {
  position?: "bottom" | "top"
}) => {
  const router = useRouter()
  const { state, dispatch } = useAppContext()

  const links: Link[] = useMemo(
    () => [
      {
        to: "/",
        label: "Home",
        icon: HomeOutlined,
      },
      {
        icon: Person,
        to: "/profile",
        label: "Profile",
      },
      {
        icon: Logout,
        color: "error",
        label: "Logout",
        onClick: () => {
          router.push("/")
          dispatch({ type: AuthTypes.LOGOUT })
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router, dispatch]
  )

  return (
    <Menu
      position={position}
      onClick={(option) => {
        if (option.onClick) option.onClick()
        if (option.to) router.push(option.to)
      }}
      options={links.map((item) => ({
        ...item,
        key: item.label,
        value: item.label,
      }))}
      trigger={({ toggleOpen, ref }) => (
        <IconButton
          ref={ref}
          size="small"
          tooltip="User menu"
          onClick={toggleOpen}
          aria-label="User menu"
        >
          <Avatar
            sx={(theme) => ({
              width: 32,
              height: 32,
              fontSize: 16,
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            })}
          >
            {getInitials(state.auth.user)}
          </Avatar>
        </IconButton>
      )}
    />
  )
}
