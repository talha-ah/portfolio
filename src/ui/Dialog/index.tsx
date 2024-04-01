import * as React from "react"
import { useState } from "react"

import { Close } from "@mui/icons-material"
import { SxProps, Theme } from "@mui/material/styles"
import {
  IconButton,
  DialogTitle,
  DialogContent,
  Dialog as MuiDialog,
} from "@mui/material"

import { Width } from "@utils/types"
import { useWindowResize } from "@hooks/useWindowResize"

interface DialogProps {
  width?: Width
  title?: string
  sx?: SxProps<Theme>
  fullScreen?: boolean
  trigger: (args: any) => void
  content: (args: any) => React.ReactNode
}

const getMaxWidth = (theme: Theme, width: Width, windowWidth: number) => {
  if (theme.breakpoints.values[width] < windowWidth) {
    return theme.breakpoints.values[width]
  } else {
    // Shouldn't overflow when screen is smaller than the dialog
    return windowWidth - +theme.spacing(8).replace("px", "")
  }
}

export const Dialog = ({
  sx,
  title,
  trigger,
  content,
  fullScreen,
  width = "sm",
}: DialogProps) => {
  const [windowWidth] = useWindowResize()
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  return (
    <>
      {trigger({ open, toggleOpen })}

      <MuiDialog
        sx={sx}
        open={open}
        maxWidth={width}
        onClose={toggleOpen}
        fullScreen={fullScreen}
      >
        {!fullScreen && (
          <DialogTitle id={`dialog-${title}`}>
            {title}{" "}
            <IconButton
              aria-label="close"
              onClick={toggleOpen}
              sx={(theme: Theme) => ({
                position: "absolute",
                top: theme.spacing(1.2),
                right: theme.spacing(2),
              })}
            >
              <Close />
            </IconButton>
          </DialogTitle>
        )}

        <DialogContent
          sx={(theme: Theme) => ({
            padding: fullScreen ? 0 : theme.spacing(2),
            width: fullScreen ? "100%" : getMaxWidth(theme, width, windowWidth),
          })}
        >
          {typeof content === "function"
            ? content({ onClose: toggleOpen })
            : content}
        </DialogContent>
      </MuiDialog>
    </>
  )
}
