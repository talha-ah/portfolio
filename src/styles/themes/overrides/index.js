import { merge } from "lodash"

import Menu from "./Menu"
import Chip from "./Chip"
import Grid from "./Grid"
import Button from "./Button"
import MenuItem from "./MenuItem"
import InputBase from "./InputBase"
import IconButton from "./IconButton"
import InputLabel from "./InputLabel"
import OutlinedInput from "./OutlinedInput"
import DialogActions from "./DialogActions"
import MuiListItemButton from "./MuiListItemButton"

export default function ComponentsOverrides(theme) {
  return merge(
    Chip(theme),
    Grid(theme),
    Menu(theme),
    Button(theme),
    MenuItem(theme),
    InputBase(theme),
    IconButton(theme),
    InputLabel(theme),
    OutlinedInput(theme),
    DialogActions(theme),
    MuiListItemButton(theme)
  )
}
