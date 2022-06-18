import React from "react";
import { WithStyles, withStyles, Grid } from "@material-ui/core";
import { styles } from "styles";
import { ReactComponent as TypescriptLogo } from "icon/icon-typescript.svg";
import { ReactComponent as JavascriptLogo } from "icon/icon-javascript.svg";
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import { SiNextdotjs, SiVuedotjs } from "react-icons/si";
import resumeData from "./data";

interface Props {}
type AllProps = WithStyles<typeof styles> & Props;

const ResumeComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  const handleLogo = (name: String) => {
    switch (name) {
      case "HTML":
        return <FaHtml5 className="svg-icon html-icon" />;

      case "CSS":
        return <FaCss3 className="svg-icon css-icon" />;

      case "Javascript":
        return <JavascriptLogo className="svg-icon js-icon" />;

      case "Typescript":
        return <TypescriptLogo className="svg-icon ts-icon" />;

      case "Node":
        return <FaNodeJs className="svg-icon node-icon" />;

      case "React":
        return <FaReact className="svg-icon react-icon" />;

      case "Vue":
        return <SiVuedotjs className="svg-icon vue-icon" />;

      case "Next JS":
        return <SiNextdotjs className="svg-icon next-icon" />;

      default:
        return;
    }
  };

  return (
    <React.Fragment>
      {/* Skill Area */}
      <div className={classes.skillArea}>
        <Grid container className={classes.container2}>
          <Grid item xs={10} lg={8}>
            <div className={classes.title}>
              <h2>My Skills</h2>
              <span>My Skills</span>
            </div>
          </Grid>
          <Grid item xs={10} lg={8}>
            <Grid container spacing={3} style={{ justifyContent: "center" }}>
              {resumeData.skill.map((item, index) => (
                <Grid key={index} item xs={12} md={6} lg={4}>
                  <div className={classes.skillCard}>
                    <div className="skill-content">
                      <div className="skill-icon">{handleLogo(item.name)}</div>
                      <h5>{item.name}</h5>
                    </div>
                    <div className="skill-detail">
                      <ul>
                        {item.detail.map((dtl, dtlIdx) => (
                          <li key={dtlIdx}>{dtl}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>

      {/* Resume Area */}
      <div className={classes.resumeArea}>
        <Grid container className={classes.container2}>
          <Grid item xs={10} lg={8}>
            <div className={classes.title}>
              <h2>Resume</h2>
              <span>Resume</span>
            </div>
          </Grid>
          <Grid item xs={10} lg={8}>
            <div className={classes.subTitle}>
              <span className="subTitle-icon">
                <FaBriefcase />
              </span>
              <h4>Working Experience</h4>
            </div>
            <div className={classes.resumeWrapper}>
              {resumeData.experience.map((item, index) => (
                <div key={index} className="resume-item">
                  <div className="resume-date">
                    <h6 className="resume-date-year">{item.date}</h6>
                  </div>
                  <div className="resume-detail">
                    <h5>{item.position}</h5>
                    <h6 className="resume-detail-company">{item.company}</h6>
                    <ul>
                      {item.jobdesk.map((job) => (
                        <li>{job}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={10} lg={8} style={{ paddingTop: "50px" }}>
            <div className={classes.subTitle}>
              <span className="subTitle-icon">
                <FaGraduationCap />
              </span>
              <h4>Educational Qualifications</h4>
            </div>
            <div className={classes.resumeWrapper}>
              {resumeData.education.map((item, index) => (
                <div key={index} className="resume-item">
                  <div className="resume-date">
                    <h6 className="resume-date-year">{item.date}</h6>
                  </div>
                  <div className="resume-detail">
                    <h5>{item.grade}</h5>
                    <h6 className="resume-detail-company">{item.school}</h6>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export const Resume = withStyles(styles)(ResumeComp);
