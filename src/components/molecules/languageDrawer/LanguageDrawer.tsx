import MenuIcon from "@mui/icons-material/Menu"
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import React, { useState } from "react"

const LanguageDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Sign In</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  )
}

export default LanguageDrawer
