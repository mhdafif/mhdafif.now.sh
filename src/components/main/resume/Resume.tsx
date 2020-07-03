import React from 'react'
import { WithStyles, withStyles, Grid } from '@material-ui/core';
import { styles } from 'styles';
import { ReactComponent as HtmlLogo } from 'icon/icon-html.svg';
import { ReactComponent as TypescriptLogo } from 'icon/icon-typescript.svg';
import { ReactComponent as JavascriptLogo } from 'icon/icon-javascript.svg';
import { FaNodeJs, FaReact, FaCss3, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface Props {}

interface ISkill {
  name: string;
  logo: any;
  detail: string[];
}


type AllProps 
  = WithStyles<typeof styles>
  & Props;

const ResumeComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  const [skillSet1] = React.useState<ISkill[]>([
    {
      name: 'HTML',
      logo: <HtmlLogo className="svg-icon html-icon" />,
      detail: ['Elements', 'Text Formating', 'Table', 'Etc...']
    },
    {
      name: 'CSS',
      logo: <FaCss3 className="svg-icon css-icon" />,
      detail: ['Position', 'Pseudo', 'Effect', 'Etc...']
    },
  ]);
  const [skillSet2] = React.useState<ISkill[]>([
    {
      name: 'Javascript',
      logo: <JavascriptLogo className="svg-icon js-icon" />,
      detail: ['Arrow Function', 'Async Await', 'Array', 'Etc...']
    },
    {
      name: 'Typescript',
      logo: <TypescriptLogo className="svg-icon ts-icon" />,
      detail: ['Type of data', 'Event Handler', 'Etc...']
    },
  ]);
  const [skillSet3] = React.useState<ISkill[]>([
    {
      name: 'Node',
      logo: <FaNodeJs className="svg-icon node-icon" />,
      detail: ['RESTful API', 'Express', 'MongoDB', 'Etc...']
    },
    {
      name: 'React',
      logo: <FaReact className="svg-icon react-icon" />,
      detail: ['Hooks', 'Lifecycle', 'Redux', 'Etc...']
    },
  ]);

  return (
    <React.Fragment>
      {/* Skill Area */}
      <div className={classes.skillArea}>
        <Grid container className={classes.container2}>
          <Grid item xs={12} lg={8}>
            <div className={classes.title}>
              <h2>My Skills</h2>
              <span>My Skills</span>
            </div>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={4}>
                <Grid container spacing={3}>
                  {
                    skillSet1.map((item, index) => 
                      <Grid item xs={12} md={6} lg={12} key={index}>
                        <div className={classes.skillCard}>
                          <div className="skill-content">
                            <div className="skill-icon">
                              {item.logo}
                            </div>
                            <h5>
                              {item.name}
                            </h5>
                          </div>
                          <div className="skill-detail">
                            <ul>
                              {
                                item.detail.map((dtl, dtlIdx) =>
                                  <li key={dtlIdx}>{dtl}</li>
                                )
                              }
                            </ul>
                          </div>
                        </div>
                      </Grid>
                    )
                  }
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} lg={4}>
                <Grid container spacing={3}>
                  {
                    skillSet2.map((item, index) => 
                      <Grid item xs={12} md={6} lg={12} key={index}>
                        <div className={classes.skillCard}>
                          <div className="skill-content">
                            <div className="skill-icon">
                              {item.logo}
                            </div>
                            <h5>
                              {item.name}
                            </h5>
                          </div>
                          <div className="skill-detail">
                            <ul>
                              {
                                item.detail.map((dtl, dtlIdx) =>
                                  <li key={dtlIdx}>{dtl}</li>
                                )
                              }
                            </ul>
                          </div>
                        </div>
                      </Grid>
                    )
                  }
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} lg={4}>
                <Grid container spacing={3}>
                  {
                    skillSet3.map((item, index) => 
                      <Grid item xs={12} md={6} lg={12} key={index}>
                        <div className={classes.skillCard}>
                          <div className="skill-content">
                            <div className="skill-icon">
                              {item.logo}
                            </div>
                            <h5>
                              {item.name}
                            </h5>
                          </div>
                          <div className="skill-detail">
                            <ul>
                              {
                                item.detail.map((dtl, dtlIdx) =>
                                  <li key={dtlIdx}>{dtl}</li>
                                )
                              }
                            </ul>
                          </div>
                        </div>
                      </Grid>
                    )
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      {/* Resume Area */}
      <div className={classes.resumeArea}>
        <Grid container className={classes.container2}>
          <Grid item xs={12} lg={8}>
            <div className={classes.title}>
              <h2>Resume</h2>
              <span>Resume</span>
            </div>
          </Grid>
          <Grid item xs={12} lg={8}>
            <div className={classes.subTitle}>
              <span className='subTitle-icon'>
                <FaBriefcase />
              </span>
              <h4>Working Experience</h4>
            </div>
            <div className={classes.resumeWrapper}>
              <div className="resume-item">
                <div className="resume-date">
                  <h6 className="resume-date-year">
                    2018 - Present
                  </h6>
                </div>
                <div className="resume-detail">
                  <h5>Frontend Web Developer</h5>
                  <h6 className="resume-detail-company">Xsis Mitra Utama</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus, iusto at quo ut dolorum illo quas natus. Qui numquam mollitia placeat impedit consequuntur sapiente possimus non nobis pariatur animi!</p>
                </div>
              </div>
           </div>
          </Grid>          
          <Grid item xs={12} lg={8} style={{paddingTop: '50px'}}>
            <div className={classes.subTitle}>
              <span className='subTitle-icon'>
                <FaGraduationCap />
              </span>
              <h4>Educational Qualifications</h4>
            </div>
            <div className={classes.resumeWrapper}>
              <div className="resume-item">
                <div className="resume-date">
                  <h6 className="resume-date-year">
                    2012 - 2018
                  </h6>
                </div>
                <div className="resume-detail">
                  <h5>Bachelor of Computer Science</h5>
                  <h6 className="resume-detail-company">Telkom University</h6>
                </div>
              </div>
              <div className="resume-item">
                <div className="resume-date">
                  <h6 className="resume-date-year">
                    2009 -2012
                  </h6>
                </div>
                <div className="resume-detail">
                  <h5>Senior High School</h5>
                  <h6 className="resume-detail-company">SMA Angkasa Bandung</h6>
                </div>
              </div>
           </div>
          </Grid>          
        </Grid>
      </div>
    </React.Fragment>
  )
}

export const Resume = withStyles(styles)(ResumeComp);