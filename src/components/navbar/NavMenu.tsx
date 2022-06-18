import React from "react";
import { WithStyles, withStyles } from "@material-ui/core";
import { styles } from "styles";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";

interface Props {}

export enum Path {
  Home = "/",
  About = "/about",
  Resume = "/resume",
  Portofolio = "/portofolio",
  Blogs = "/blogs",
  BlogsDetail = "/blogs/detail",
  Contact = "/contact",
}

type AllProps = WithStyles<typeof styles> & RouteComponentProps & Props;

const NavMenuComp: React.FC<AllProps> = (props) => {
  const { classes, location } = props;
  const [path, setPath] = React.useState("");

  React.useEffect(() => {
    setPath(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <ul className={classes.navMenu}>
      <li>
        <NavLink activeClassName={path === Path.Home ? "active" : ""} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={path === Path.About ? "active" : Path.About}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={path === Path.Resume ? "active" : ""}
          to="/resume"
        >
          Resume
        </NavLink>
      </li>
      <li>
        {process.env.REACT_APP_TYPE === "develop" && (
          <NavLink
            activeClassName={path === Path.Portofolio ? "active" : ""}
            to="/portofolio"
          >
            Portofolio
          </NavLink>
        )}
      </li>
      <li>
        {process.env.REACT_APP_TYPE === "develop" && (
          <NavLink
            activeClassName={
              path === Path.Blogs || Path.BlogsDetail ? "active" : ""
            }
            to="/blogs"
          >
            Blogs
          </NavLink>
        )}
      </li>
      <li>
        <NavLink
          activeClassName={path === Path.Contact ? "active" : ""}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export const NavMenu = withRouter(withStyles(styles)(NavMenuComp));
