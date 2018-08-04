import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'

const styles = {
  root: {
      flexGrow: 1
  },
};


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar

    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >

  <Toolbar >title</Toolbar>
  </AppBar>
);

export default withStyles (styles)(AppBarExampleIcon);