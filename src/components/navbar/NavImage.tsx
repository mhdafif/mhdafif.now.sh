import React from 'react'
import { WithStyles, withStyles, Avatar, IconButton } from '@material-ui/core';
import { styles } from 'styles';
import avatar from 'image/foto2.jpg';
import { ThemeContext } from 'context/theme/themeContext';
import MoonIcon from '@material-ui/icons/NightsStay';
import SunIcon from '@material-ui/icons/WbSunny';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const NavImageComp: React.FC<AllProps> = (props) => {
  const { classes } = props;
  const themeContext = React.useContext(ThemeContext);
  const { setTheme } = themeContext;
  
  return (
    <div className={classes.navImage}>
      <Avatar className="nav-image-avatar" src={avatar} onClick={() => console.log('foto')} />
      {
        process.env.REACT_APP_TYPE === 'develop' &&
        <div className="nav-image-theme">
          <IconButton className='dark-icon' component="span" onClick={setTheme}>
            <MoonIcon /> 
          </IconButton>
          <IconButton className='light-icon' component="span" onClick={setTheme}>
            <SunIcon /> 
          </IconButton>
        </div>
      }
    </div>
  )
}

export const NavImage = withStyles(styles)(NavImageComp);