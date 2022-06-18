import React from "react";
import { WithStyles, withStyles, Grid } from "@material-ui/core";
import { styles } from "styles";
import Particles from "react-particles-js";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

interface Props {}

type AllProps = WithStyles<typeof styles> & Props;

const HomeComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  return (
    <div className={classes.homeArea}>
      <Particles
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          zIndex: -1,
        }}
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: false,
              },
            },
            opacity: {
              value: 0.3,
              random: false,
            },
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            // "opacity" : {

            // },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
            },
          },
        }}
      />
      <Grid container className={classes.container2}>
        <Grid item xs={10} lg={8} className="xxs">
          <div className={classes.homeContent}>
            <h1>
              Hi, I am <span className={classes.colorTheme}>Muhammad Afif</span>
            </h1>
            <p>
              I'm an engineer who specializes in front end web applications. I
              can provide clean code and responsive for desktop and mobile. I
              also make website more interactive with animations. I'm interested
              in React and Vue but possible to adapt with a new technology
            </p>
            <ul className={classes.homeSocial}>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/nonieck_/"
                  target="_blank"
                >
                  <InstagramIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/mhdafif/"
                  target="_blank"
                >
                  <LinkedInIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/mhdafif"
                  target="_blank"
                >
                  <GitHubIcon fontSize="large" />
                </a>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export const Home = withStyles(styles)(HomeComp);
