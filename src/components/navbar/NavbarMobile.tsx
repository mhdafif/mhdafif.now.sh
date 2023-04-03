import React from "react";
import { WithStyles, withStyles, IconButton } from "@material-ui/core";
import { styles } from "styles";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/Person";
import { FaInfo, FaBloggerB } from "react-icons/fa";
import { AiFillExperiment } from "react-icons/ai";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Path } from "./NavMenu";
import classNames from "classnames";

interface Props {}

type AllProps = WithStyles<typeof styles> & RouteComponentProps & Props;

const NavbarMobileComp: React.FC<AllProps> = (props) => {
  const { classes, location, history } = props;
  const [path, setPath] = React.useState("");

  React.useEffect(() => {
    setPath(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handlePushHistory = (to: Path) => {
    history.push(to);
  };

  return (
    <nav className={classes.navMobile}>
      <IconButton component="span" onClick={() => handlePushHistory(Path.Home)}>
        <HomeIcon className={classNames(path === Path.Home && "active")} />
      </IconButton>
      <IconButton
        component="span"
        onClick={() => handlePushHistory(Path.About)}
      >
        <PersonIcon className={classNames(path === Path.About && "active")} />
      </IconButton>
      <IconButton
        component="span"
        onClick={() => handlePushHistory(Path.Resume)}
      >
        <FaInfo
          className={classNames("svg-icon", path === Path.Resume && "active")}
        />
      </IconButton>
      {process.env.REACT_APP_TYPE !== "develop" && (
        <React.Fragment>
          <IconButton
            component="span"
            onClick={() => handlePushHistory(Path.Portofolio)}
          >
            <AiFillExperiment
              className={classNames(
                "svg-icon",
                path === Path.Portofolio && "active"
              )}
            />
          </IconButton>
          <IconButton
            component="span"
            onClick={() => handlePushHistory(Path.Blogs)}
          >
            <FaBloggerB
              className={classNames(
                "svg-icon",
                path === (Path.Blogs || Path.BlogsDetail) && "active"
              )}
            />
          </IconButton>
        </React.Fragment>
      )}
      <IconButton
        component="span"
        onClick={() => handlePushHistory(Path.Contact)}
      >
        <PhoneIcon className={classNames(path === Path.Contact && "active")} />
      </IconButton>
    </nav>
  );
};

export const NavbarMobile = withRouter(withStyles(styles)(NavbarMobileComp));
