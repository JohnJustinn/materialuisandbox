import React, { useContext } from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { LayoutContext } from "./Root";

const styles = ({ transitions }) => ({
  root: {
    transition: transitions.create(["margin", "width"], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen
    })
  },
  menuButton: {
    marginLeft: -8,
    marginRight: 8
  }
});

const createGet = (
  { clipped, navVariant, collapsible, collapsed, open, squeezed, navAnchor },
  normal,
  shrink,
  pushed,
  unsqueeze
) => () => {
  if (clipped || navAnchor !== "left") return normal;
  if (navVariant === "persistent" && open) {
    // open is effect only when
    // navVariant === 'persistent' ||
    // navVariant === 'temporary'
    if (squeezed) {
      return pushed;
    }
    return unsqueeze;
  }
  if (navVariant === "permanent") {
    if (collapsible) {
      if (collapsed) return shrink;
      return pushed;
    }
    return pushed;
  }
  return normal;
};

