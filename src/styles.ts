import { Theme, createStyles } from "@material-ui/core";

const borderGray = "#2e344e";
const gray = "#a4acc4";
const blue = "#037fff";
const red = "#f44336";

export const styles = (theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    fontColor: {
      color: gray,
    },
    errorColor: {
      color: red,
    },
    layoutBody: {
      color: gray,
      // background: theme.palette.type === 'dark' ? '#10121b' : '#fff',
      background: "#10121b",
      transition: "all .4s ease-out",
      "-webkit-transition": "all .4s ease-out",
    },
    wrapper: {
      [theme.breakpoints.down("md")]: {
        paddingLeft: 0,
      },
      paddingLeft: "300px",
      position: "relative",
      minHeight: "100vh",
      zIndex: 1,
      overflowX: "hidden",
    },
    bgLinesRaw: {
      height: "100%",
      minHeight: "100vh",
      top: 0,
      position: "absolute",
    },
    bgLines: {
      [theme.breakpoints.down("md")]: {
        left: 0,
        width: "100%",
      },
      left: "300px",
      width: "calc(100% - 300px)",
      zIndex: -1,
      "& span": {
        display: "inline-block",
        width: "2px",
        background: "rgba(46,52,78,.3)",
        left: 0,
        height: "100%",
        minHeight: "100vh",
        top: 0,
        position: "absolute",
        "&:nth-child(2)": {
          left: "20%",
        },
        "&:nth-child(3)": {
          left: "40%",
        },
        "&:nth-child(4)": {
          left: "60%",
        },
        "&:nth-child(5)": {
          left: "80%",
        },
      },
    },
    bgLinesSpan: {
      display: "inline-block",
      width: "2px",
      background: "rgba(46,52,78,.3)",
      left: 0,
    },
    nav: {
      [theme.breakpoints.down("md")]: {
        transform: "translateX(-100%)",
        width: "260px",
      },
      [theme.breakpoints.down(768)]: {
        display: "none",
      },
      transform: "translateX(0)",
      "-webkit-transform": "translateX(0)",
      width: "300px",
      position: "fixed",
      left: 0,
      top: 0,
      height: "100vh",
      background: "#191d2b",
      borderRight: `1px solid ${borderGray}`,
      zIndex: 10,
      "-webkit-transition": "all .4s ease-out",
      transition: "all .4s ease-out",
      "& .toggler": {
        [theme.breakpoints.between(768, "md")]: {
          display: "flex",
        },
        position: "absolute",
        left: "100%",
        top: "20px",
        padding: 0,
        height: "50px",
        width: "50px",
        textAlign: "center",
        fontSize: "1.6rem",
        background: "#191d2b",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #2e344e",
        borderRadius: 0,
        display: "none",
      },
    },
    navMobile: {
      [theme.breakpoints.up(768)]: {
        display: "none",
      },
      display: "flex",
      justifyContent: "space-evenly",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "60px",
      zIndex: 10,
      position: "fixed",
      background: "#191d2b",
      borderTop: `1px solid ${borderGray}`,
      "& .active": {
        color: blue,
      },
    },
    navIsVisible: {
      transform: "translateX(0)",
    },
    navInner: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      overflow: "hidden",
      overflowY: "auto",
    },
    navImage: {
      padding: "20px 0",
      display: "block",
      width: "100%",
      textAlign: "center",
      borderBottom: `1px solid ${borderGray}`,
      position: "relative",
      "& .nav-image-avatar": {
        height: "200px",
        width: "200px",
        borderRadius: "1000px",
        border: `7px solid ${borderGray}`,
        overflow: "hidden",
        margin: "0 auto",
        cursor: "pointer",
        "& img": {
          transform: "translate(-27px, 77px) scale(3)",
        },
      },
      "& .nav-image-theme": {
        position: "absolute",
        right: "0",
        bottom: "0",
        padding: "10px 5px",
        overflow: "hidden",
        "& .light-icon": {
          color: "#fbc02d",
          "-webkit-transition": "all .4s ease-out",
          "-webkit-transition-delay":
            theme.palette.type === "light" ? ".2s" : "0",
          transition: "all .4s ease-out",
          transitionDelay: theme.palette.type === "light" ? ".2s" : "0",
          transform:
            theme.palette.type === "light"
              ? "translate(0)"
              : "translate(36px, 36px)",
          visibility: theme.palette.type === "light" ? "visible" : "hidden",
          opacity: theme.palette.type === "light" ? "1" : "0",
          "&:hover": {
            color: "#fbdc2d",
            backgroundColor: "unset",
          },
        },
        "& .dark-icon": {
          position: "absolute",
          color: "#547ae8",
          "-webkit-transition": "all .4s ease-out",
          "-webkit-transition-delay":
            theme.palette.type === "dark" ? ".2s" : "0",
          transition: "all .4s ease-out",
          transitionDelay: theme.palette.type === "dark" ? ".2s" : "0",
          transform:
            theme.palette.type === "dark"
              ? "translate(0)"
              : "translate(36px, 36px)",
          visibility: theme.palette.type === "dark" ? "visible" : "hidden",
          opacity: theme.palette.type === "dark" ? "1" : "0",
          "&:hover": {
            color: "#548de8",
            backgroundColor: "unset",
          },
        },
        "& span": {
          padding: "0",
          "& svg": {
            fontSize: "30px",
          },
        },
      },
    },
    navMenu: {
      width: "100%",
      padding: "15px 5px",
      "& li": {
        listStyle: "none",
        textAlign: "center",
        display: "block",
        "& a": {
          "-webkit-transition": "all .4s ease-out",
          transition: "all .4s ease-out",
          textTransform: "uppercase",
          fontSize: ".94rem",
          letterSpacing: "1px",
          display: "block",
          padding: "5px 0",
          color: gray,
          fontWeight: "600",
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
          "&:hover": {
            color: blue,
            "&:before": {
              // visibility: 'visible',
              // transform: 'scaleX(1)',
              // transformOrigin: 'center',
            },
            "&:after": {
              "-webkit-transform": "scaleX(1)",
              transform: "scaleX(1)",
              "-webkit-transform-origin": "left",
              transformOrigin: "left",
            },
          },
          "&.active": {
            color: "#fff",
            "&:before": {
              //   background: blue,
              //   width: '100%',
              //   visibility: 'visible'
            },
            "&:after": {
              background: blue,
              "-webkit-transform": "scaleX(1)",
              transform: "scaleX(1)",
              "-webkit-transform-origin": "left",
              transformOrigin: "left",
            },
          },
          "&:before": {
            // content: `''`,
            // position: 'absolute',
            // top: 0,
            // left: 0,
            // height: '100%',
            // width: '100%',
            // background: 'rgba(3,127,255,.2)',
            // visibility: 'hidden',
            // zIndex: -1,
            // '-webkit-transition': 'all .4s ease-out',
            // transition: 'all .4s ease-out',
            // transform: 'scaleX(0)',
            // transformOrigin: 'center',
          },
          "&:after": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(3,127,255,.2)",
            "-webkit-transition": "transform .4s ease-out",
            transition: "transform .4s ease-out",
            top: 0,
            left: 0,
            zIndex: -1,
            "-webkit-transform": "scaleX(0)",
            transform: "scaleX(0)",
            "-webkit-transform-origin": "right",
            transformOrigin: "right",
          },
        },
      },
      "& li:not(:last-child)": {
        marginBottom: "1px",
      },
    },
    navFooter: {
      display: "block",
      width: "100%",
      textAlign: "center",
      marginBotton: 0,
      fontSize: "1rem",
      paddingTop: "15px",
      borderTop: `1px solid ${borderGray}`,
      "& a": {
        color: gray,
        "-webkit-transition": "all .4s ease-out",
        transition: "all .4s ease-out",
        "&:hover": {
          color: blue,
        },
      },
    },
    homeArea: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      position: "relative",
      zIndex: 1,
    },
    particle: {
      position: "absolute",
      left: "300px",
      top: 0,
      height: "100%",
      zIndex: -1,
      background: "#10121b",
    },
    container: {
      width: "100%",
      padding: "0 15px",
      margin: "0 auto",
      "@media (min-width: 576px)": {
        maxWidth: "540px",
      },
      "@media (min-width: 768px)": {
        maxWidth: "720px",
      },
      "@media (min-width: 992px)": {
        maxWidth: "960px",
      },
      "@media (min-width: 1200px)": {
        maxWidth: "1140px",
      },
    },
    container2: {
      justifyContent: "center",
      "& .xxs": {
        [theme.breakpoints.down(768)]: {
          maxWidth: "100%",
          flexBasis: "100%",
        },
      },
    },
    colorTheme: {
      color: blue,
    },
    homeContent: {
      textAlign: "center",
      padding: "50px 80px",
      "& h1": {
        fontWeight: 700,
      },
      "& p": {
        marginTop: "15px",
        fontSize: "1.25rem",
        lineHeight: "2rem",
      },
    },
    homeSocial: {
      paddingLeft: 0,
      marginBottom: 0,
      marginTop: "20px",
      "& li": {
        listStyle: "none",
        display: "inline-block",
        margin: "0 8px",
        "-webkit-transition": "all .4s ease-out",
        transition: "all .4s ease-out",
        "& a": {
          "-webkit-transition": "all .4s ease-out",
          transition: "all .4s ease-out",
          color: gray,
          "&:hover": {
            color: blue,
          },
        },
        "&:hover": {
          transform: "scale(1.1)",
        },
      },
    },
    section: {},
    contactArea: {
      [theme.breakpoints.down(768)]: {
        paddingTop: "60px",
        paddingBottom: "120px",
      },
      position: "relative",
      paddingTop: "120px",
      minHeight: "100vh",
    },
    title: {
      marginBottom: "60px",
      position: "relative",
      zIndex: 1,
      "& h2": {
        fontWeight: 700,
        position: "relative",
        paddingBottom: "15px",
        textTransform: "uppercase",
        "&:before, &:after": {
          content: `''`,
          position: "absolute",
          left: 0,
          top: "auto",
          bottom: 0,
          height: "5px",
          borderRadius: "100px",
        },
        "&:before": {
          width: "100px",
          background: "rgba(3,127,255,.3)",
        },
        "&:after": {
          width: "35px",
          background: blue,
        },
      },
      "& span": {
        [theme.breakpoints.down(768)]: {
          fontSize: "4rem",
        },
        position: "absolute",
        left: 0,
        top: "100%",
        fontSize: "6rem",
        lineHeight: 1,
        fontWeight: 700,
        color: "rgba(25, 29, 43, .44)",
        display: "inline-block",
        textTransform: "uppercase",
        zIndex: -1,
        "-webkit-transform": "translateY(-40%)",
        transform: "translateY(-40%)",
        "-webkit-user-select": "none",
        userSelect: "none",
        whiteSpace: "nowrap",
      },
    },
    formField: {
      marginTop: "30px",
      position: "relative",
      "& label": {
        position: "absolute",
        left: "15px",
        top: "-13px",
        background: "#10121b",
        "-webkit-transition": "all .4s ease-out",
        transition: "all .4s ease-out",
        pointerEvents: "none",
        padding: "0 10px",
        fontSize: ".94rem",
      },
      "& input, & textarea": {
        border: `1px solid ${borderGray}`,
        fontSize: "1rem",
      },
      "& button": {
        "& span.feature-maintenance": {
          visibility: "hidden",
          opacity: 0,
          marginLeft: "20px",
          background: blue,
          color: "#fff",
          borderRadius: "0",
          padding: "0 10px",
          position: "absolute",
          whiteSpace: "nowrap",
          top: 0,
          left: "110%",
          transition: "all .4s ease-out",
          "-webkit-transition": "all .4s ease-out",
          "&:before": {
            content: `''`,
            position: "absolute",
            top: "0",
            right: "100%",
            borderWidth: "12.5px",
            borderStyle: "solid",
            borderColor: `transparent ${blue} ${blue} transparent`,
          },
          "&:after": {
            content: `''`,
            position: "absolute",
            bottom: "0",
            right: "100%",
            borderWidth: "12.5px",
            borderStyle: "solid",
            borderColor: `${blue} ${blue} transparent transparent`,
          },
        },
        "&:hover": {
          "& span.feature-maintenance": {
            visibility: "visible",
            opacity: 1,
          },
        },
      },
    },
    button: {
      position: "relative",
      padding: "0 30px",
      background: blue,
      color: "#fff",
      border: 0,
      display: "inline-block",
      zIndex: 1,
      textTransform: "uppercase",
      fontSize: ".9rem",
      letterSpacing: "2px",
      height: "50px",
      lineHeight: "50px",
      transition: "all .4s ease-out",
      "-webkit-transition": "all .4s ease-out",
      // cursor: 'pointer',
      "&:hover": {
        color: "#fff",
        "&:after": {
          transform: "scaleX(1)",
          "-webkit-transform": "scaleX(1)",
        },
      },
      "&:active": {
        background: "#003d7b",
      },
      "&:after": {
        transition: "all .4s ease-out",
        "-webkit-transition": "all .4s ease-out",
        content: `''`,
        position: "absolute",
        left: 0,
        top: "auto",
        bottom: 0,
        height: "2px",
        width: "100%",
        background: "#fff",
        zIndex: -1,
        "-webkit-transform": "scaleX(0)",
        transform: "scaleX(0)",
        "-webkit-transform-origin": "0 0",
        transformOrigin: "0 0",
      },
    },
    buttonActive: {
      background: "#003d7b",
      "&:after": {
        transform: "scaleX(1)",
        "-webkit-transform": "scaleX(1)",
      },
    },
    contactInfo: {
      [theme.breakpoints.up("lg")]: {
        marginTop: "68px",
      },
    },
    contactCard: {
      marginTop: "30px",
      background: "#191d2b",
      padding: "30px",
      display: "flex",
      "&:hover span svg": {
        transition: "all .4s ease-out",
        "-webkit-transition": "all .4s ease-out",
        transform: "scale(1.3)",
        color: blue,
      },
    },
    contactIcon: {
      display: "inline-block",
      height: "60px",
      width: "60px",
      flex: "0 0 60px",
      maxWidth: "60px",
      border: `1px solid ${borderGray}`,
      textAlign: "center",
      lineHeight: "76px",
      marginRight: "20px",
      cursor: "pointer",
      "& svg": {
        transition: "all .4s ease-out",
        "-webkit-transition": "all .4s ease-out",
        transform: "scale(1)",
        height: "30px",
        width: "30px",
      },
    },
    contactContent: {
      "& h6": {
        marginTop: "-5px",
      },
      "& p": {
        marginBottom: 0,
        position: "relative",
        "& a": {
          color: gray,
          transition: "all .4s ease-out",
          "-webkit-transition": "all .4s ease-out",
          "&:hover": {
            color: blue,
          },
        },
        "& span.copyText": {
          cursor: "pointer",
          color: gray,
          transition: "all .4s ease-out",
          "-webkit-transition": "all .4s ease-out",
          "&:hover": {
            color: blue,
          },
        },
      },
    },
    copiedToolTip: {
      visibility: "hidden",
      opacity: 0,
      marginLeft: "5px",
      background: blue,
      color: "#fff",
      width: "68px",
      borderRadius: "2px",
      position: "absolute",
      textAlign: "center",
      // paddingLeft: '5px',
      // left: '110%',
      transition: "all .4s ease-out",
      "-webkit-transition": "all .4s ease-out",
      "&:before": {
        // content: `''`,
        // position: 'absolute',
        // top: '0',
        // right: '100%',
        // borderWidth: '7px',
        // borderStyle: 'solid',
        // borderColor: `transparent ${blue} ${blue} transparent`
      },
      "&:after": {
        // content: `''`,
        // position: 'absolute',
        // bottom: '0',
        // right: '100%',
        // borderWidth: '7px',
        // borderStyle: 'solid',
        // borderColor: `${blue} ${blue} transparent transparent`
      },
    },
    copiedTooltipVisible: {
      visibility: "visible",
      opacity: 1,
    },
    skillArea: {
      [theme.breakpoints.down(768)]: {
        paddingTop: "60px",
      },
      position: "relative",
      paddingTop: "120px",
    },
    skillItem: {
      "& h6": {
        fontWeight: 600,
        marginBottom: 0,
      },
      "& .skill-progress": {
        display: "flex",
        alignItems: "center",
        "& .skill-percentage": {
          flex: "0  60px",
        },
        "& .skill-bar": {
          background: borderGray,
          display: "block",
          height: "6px",
          width: "100%",
          position: "relative",
          "& .skill-bar-active": {
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            background: blue,
            width: 0,
            transition: "all 1s cubic-bezier(.01,.57,.68,1.05) 0s",
            "-webkit-transition": "all 1s cubic-bezier(.01,.57,.68,1.05) 0s",
          },
        },
      },
    },
    skillCard: {
      position: "relative",
      border: `1px solid ${borderGray}`,
      padding: "30px",
      background: "#191d2b",
      borderTop: `5px solid ${borderGray}`,
      transition: "all .4s ease-out",
      "-webkit-transition": "all .4s ease-out",
      display: "flex",
      textAlign: "center",
      "& .skill-content": {
        transition: "all .4s ease-out",
        "-webkit-transition": "all .4s ease-out",
        width: "100%",
        "& h5": {
          opacity: 1,
          transition: "all .4s ease-out",
          "-webkit-transition": "all .4s ease-out",
        },
        "& .skill-icon": {
          "& .ts-icon": {
            borderRadius: "17px",
          },
        },
      },
      "& .skill-detail": {
        width: "calc(50% - 50px)",
        visibility: "hidden",
        textAlign: "left",
        position: "absolute",
        left: "auto",
        right: "30px",
        opacity: 0,
        transition: "all .4s ease-out",
        "-webkit-transition": "all .4s ease-out",
        "& ul": {
          margin: 0,
          lineHeight: "1.5rem",
          listStyle: "none",
          "& li": {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            "&:before": {
              content: `''`,
              position: "absolute",
              margin: "7px 7px 0 0",
              right: "100%",
              height: "10px",
              width: "10px",
              borderColor: `transparent transparent transparent ${blue}`,
              borderStyle: "solid",
              borderWidth: "5px",
            },
          },
        },
      },
      "&:hover": {
        borderTopColor: blue,
        "& .skill-content": {
          width: "50%",
          "& h5": {
            // opacity: 0
          },
          "& .skill-icon": {
            "& .html-icon": {
              color: "#e65027",
            },
            "& .css-icon": {
              color: "#3596d0",
            },
            "& .js-icon": {
              color: "#f0db4f",
            },
            "& .ts-icon": {
              color: "#1074bb",
            },
            "& .node-icon": {
              color: "#88c043",
            },
            "& .react-icon": {
              color: "#00d8ff",
            },
            "& .vue-icon": {
              color: "#42b883",
            },
            "& .nuxt-icon": {
              color: "#41b883",
            },
          },
        },
        "& .skill-detail": {
          visibility: "visible",
          opacity: 1,
        },
      },
      "& .skill-icon": {
        color: blue,
        display: "inline-block",
        fontSize: "2.5rem",
        "& svg": {
          fontSize: "50px",
        },
      },
      "& h5": {
        position: "relative",
        fontWeight: "600",
      },
    },
    resumeArea: {
      [theme.breakpoints.down(768)]: {
        paddingTop: "60px",
      },
      position: "relative",
      padding: "120px 0",
    },
    subTitle: {
      display: "flex",
      alignItems: "center",
      "& .subTitle-icon": {
        verticalAlign: "middle",
        marginRight: "10px",
        fontSize: "1.71rem",
        lineHeight: "2.43rem",
        color: gray,
      },
      "& h4": {
        fontWeight: 700,
      },
    },
    resumeWrapper: {
      borderLeft: `3px solid ${borderGray}`,
      "& .resume-item": {
        display: "flex",
        marginTop: "30px",
        flexWrap: "wrap",
        [theme.breakpoints.down(768)]: {
          flexDirection: "column",
        },
        "& .resume-date": {
          [theme.breakpoints.down(768)]: {
            flex: "0 0 0",
          },
          alignSelf: "flex-start",
          flex: "0 0 180px",
          maxWidth: "180px",
          paddingLeft: "20px",
          position: "relative",
          "&:before": {
            content: `''`,
            position: "absolute",
            left: "-9px",
            top: "6px",
            height: "15px",
            width: "15px",
            borderRadius: "100px",
            background: "#10121b",
            border: `3px solid ${borderGray}`,
          },
          "& .resume-date-year": {
            color: gray,
            marginBottom: 0,
          },
        },
        "& .resume-detail": {
          position: "relative",
          paddingLeft: "50px",
          [theme.breakpoints.down(768)]: {
            paddingLeft: "30px",
          },
          "&:before": {
            [theme.breakpoints.down(768)]: {
              width: "20px",
            },
            content: `''`,
            position: "absolute",
            left: 0,
            top: "15px",
            height: "1px",
            width: "30px",
            background: borderGray,
          },
          "& h5": {
            color: blue,
            marginBottom: 0,
            fontWeight: 700,
          },
          "& .resume-detail-company": {
            color: "#fff",
          },
          "& p": {
            marginBottom: 0,
          },
          "& ul": {
            marginBottom: 0,
            marginLeft: "18px",
            listStyle: "none",
            position: "relative",
            "& li": {
              "&:before": {
                content: `''`,
                position: "absolute",
                margin: "7px 7px 0 0",
                right: "100%",
                height: "10px",
                width: "10px",
                borderColor: `transparent transparent transparent ${blue}`,
                borderStyle: "solid",
                borderWidth: "5px",
              },
            },
          },
        },
      },
    },
    aboutArea: {
      [theme.breakpoints.down(768)]: {
        paddingTop: "60px",
      },
      position: "relative",
      paddingTop: "120px",
    },
    aboutImage: {
      position: "relative",
      padding: "15px",
      "& img": {
        width: "100%",
        transform: "scale(1.5)",
      },
      "&:before, &:after": {
        content: `''`,
        position: "absolute",
        height: "35%",
        width: "15px",
        background: "rgba(3,127,255, .6)",
      },
      "&:before": {
        left: 0,
        top: 0,
      },
      "&:after": {
        left: "auto",
        right: 0,
        top: "auto",
        bottom: 0,
      },
      "&:hover": {
        "& .about-image-zoom": {
          visibility: "visible",
          opacity: 0.3,
          "-webkit-transform": "scale(1)",
          transform: "scale(1)",
        },
      },
      "& .blue-border-1": {
        position: "absolute",
        top: 0,
        left: "15px",
        height: "15px",
        width: "calc(35% - 15px)",
        background: "rgba(3,127,255, .6)",
      },
      "& .blue-border-2": {
        position: "absolute",
        top: "auto",
        left: "auto",
        bottom: 0,
        right: "15px",
        height: "15px",
        width: "calc(35% - 15px)",
        background: "rgba(3,127,255, .6)",
      },
      "& .about-image-zoom": {
        position: "absolute",
        top: "50%",
        left: "50%",
        height: "100px",
        width: "100px",
        marginLeft: "-50px",
        marginTop: "-50px",
        color: "#fff",
        display: "inline-block",
        visiblity: "hidden",
        opacity: 0,
        "-webkit-transform": "scale(0)",
        transform: "scale(0)",
        "-webkit-transition": "all .4s ease-out 0s",
        transition: "all .4s ease-out 0s",
        pointerEvents: "none",
        "& svg": {
          height: "100%",
          width: "100%",
        },
      },
    },
    aboutContent: {
      position: "relative",
      "& h3": {
        fontWeight: 600,
        marginTop: "-8px",
      },
      "& ul li": {
        listStyle: "none",
        display: "flex",
        "&:not(:last-child)": {
          marginBottom: "3px",
        },
        "& b": {
          minWidth: "120px",
          display: "inline-block",
          position: "relative",
          marginRight: "7px",
          "&:after": {
            content: `':'`,
            position: "absolute",
            top: 0,
            left: "auto",
            right: 0,
          },
        },
        "& p": {
          position: "relative",
          "& svg": {
            marginLeft: "5px",
            verticalAlign: "middle",
            "-webkit-transition": "all .4s ease-out 0s",
            transition: "all .4s ease-out 0s",
            "&:hover, &.active": {
              color: blue,
            },
          },
          "& span": {
            padding: "10px",
            position: "absolute",
            borderRight: `5px solid ${blue}`,
            background: "#191d2b",
            marginLeft: "-10px",
            marginTop: "30px",
            width: "180px",
            opacity: 0,
            visibility: "hidden",
            "-webkit-transition": "all .4s ease-out 0s",
            transition: "all .4s ease-out 0s",
            [theme.breakpoints.down(420)]: {
              marginLeft: "-26px",
            },
            "&:before": {
              // content: `''`,
              // position: 'absolute',
              // left: 0,
              // bottom: '100%',
              // borderWidth: '9px',
              // borderStyle: 'solid',
              // borderColor: `transparent transparent #191d2b #191d2b`,
            },
            "&.active": {
              opacity: 1,
              visibility: "visible",
            },
          },
        },
      },
      "& a": {
        marginTop: "15px",
      },
      // button seperti http://mrcthms.com/
      // '& a': {
      //   position: 'relative',
      //   padding: '0 30px',
      //   color: '#fff',
      //   border: 0,
      //   display: 'inline-block',
      //   zIndex: 1,
      //   textTransform: 'uppercase',
      //   fontSize: '.9rem',
      //   letterSpacing: '2px',
      //   height: '50px',
      //   lineHeight: '50px',
      //   marginTop: '15px',
      //   '-webkit-transition': 'all .4s ease-out 0s',
      //   transition: 'all .4s ease-out 0s',
      //   '&:hover': {
      //     '&:before, &:after': {
      //       background: blue,
      //       transform: 'translateY(0)'
      //     }
      //   },
      //   '&:before, &:after': {
      //     bottom: '5%',
      //     content: '""',
      //     position: 'absolute',
      //     top: '5%',
      //     transition: 'all .4s ease-out',
      //     width: '47%',
      //     zIndex: -1
      //   },
      //   '&:before': {
      //     background: 'rgba(3,127,255,.2)',
      //     left: '5%',
      //     transform: 'translateY(4px)'
      //   },
      //   '&:after': {
      //     background: 'rgba(3,127,255,.2)',
      //     left: '49%',
      //     transform: 'translateY(-4px)'
      //   },
      // }
    },
    servicesArea: {
      [theme.breakpoints.down(768)]: {
        paddingTop: "60px",
      },
      position: "relative",
      padding: "120px 0",
    },
    serviceItem: {
      border: `1px solid ${borderGray}`,
      borderTop: `5px solid ${borderGray}`,
      padding: "30px",
      background: "#191d2b",
      "-webkit-transition": "all .4s ease-out",
      transition: "all .4s ease-out",
      "&:hover": {
        borderTopColor: blue,
      },
      "& .service-icon": {
        marginBottom: "18px",
        display: "inline-block",
        color: blue,
        fontSize: "2.5rem",
        "& svg": {
          fontSize: "50px",
        },
      },
      "& h5": {
        fontWeight: 600,
        position: "relative",
        paddingBottom: "15px",
        marginBottom: "15px",
        "&:before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: "auto",
          bottom: 0,
          height: "2px",
          width: "50px",
          background: borderGray,
        },
      },
      "& p": {
        marginBottom: 0,
      },
    },
    reviewArea: {
      position: "relative",
      paddingBottom: "120px",
    },
    reviewItem: {
      "& .review-item-content": {
        minHeight: "150px",
        display: "flex",
        alignItems: "center",
        padding: "30px",
        marginBottom: "35px",
        position: "relative",
        borderLeft: `5px solid ${borderGray}`,
        background: "#191d2b",
        "&:after": {
          content: '""',
          position: "absolute",
          left: "30px",
          top: "100%",
          borderColor: "#191d2b transparent transparent #191d2b",
          borderStyle: "solid",
          borderWidth: "12px",
        },
        "& p": {
          marginBottom: 0,
          fontSize: "1.2rem",
        },
      },
      "& .review-item-author": {
        "& h5": {
          marginBottom: 0,
        },
        "& h6": {
          marginBottom: 0,
          color: gray,
        },
      },
    },
    portofolioArea: {
      [theme.breakpoints.down(768)]: {
        paddingTop: "60px",
      },
      position: "relative",
      padding: "120px 0",
      minHeight: "100vh",
    },
    portofolioItem: {
      "&:hover": {
        "& .portofolio-image": {
          "&:before": {
            "-webkit-transform": "scaleX(1)",
            transform: "scaleX(1)",
          },
          "& ul": {
            visibility: "visible",
            opacity: 1,
            marginTop: 0,
          },
        },
      },
      "& .portofolio-image": {
        display: "block",
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          left: "15px",
          top: "15px",
          height: "calc(100% - 30px)",
          width: "calc(100% - 30px)",
          background: "hsla(0, 0%, 100%, .9)",
          "-webkit-transition": "all .4s ease-out",
          transition: "all .4s ease-out",
          "-webkit-transform": "scaleX(0)",
          transform: "scaleX(0)",
          "-webkit-transform-origin": 0,
          transformOrigin: 0,
        },
        "& ul": {
          marginBottom: 0,
          marginLeft: 0,
          position: "absolute",
          left: 0,
          top: "50%",
          textAlign: "center",
          width: "100%",
          "-webkit-transform": "translateY(-50%)",
          transform: "translateY(-50%)",
          visibility: "hidden",
          opacity: 0,
          marginTop: "30px",
          "-webkit-transition": "all .4s ease-out",
          transition: "all .4s ease-out",
          "& li": {
            listStyle: "none",
            display: "inline-block",
            margin: "0 7px",
            "& button, & a": {
              display: "inline-block",
              height: "45px",
              width: "45px",
              padding: "5px 0",
              verticalAlign: "middle",
              textAlign: "center",
              lineHeight: 1,
              background: gray,
              color: "#fff",
              border: `1px solid ${gray}`,
              borderRadius: "100px",
              outline: "none",
              fontSize: "1.25rem",
              "-webkit-transition": "all .4s ease-out",
              transition: "all .4s ease-out",
              "&:hover": {
                background: blue,
                borderColor: blue,
              },
              "& svg": {
                height: "100%",
                fontSize: "2.1875rem",
              },
            },
          },
        },
      },
      "& h5": {
        color: "#fff",
        marginTop: "15px",
        marginBottom: 0,
        fontWeight: 700,
        "& a": {
          color: "#fff",
          "-webkit-transition": "all .4s ease-out",
          transition: "all .4s ease-out",
          "&:hover": {
            color: blue,
          },
        },
      },
      "& h6": {
        color: gray,
        marginBottom: 0,
      },
    },
    blogsArea: {
      [theme.breakpoints.down(768)]: {
        paddingTop: "60px",
      },
      position: "relative",
      padding: "120px 0",
      minHeight: "100vh",
    },
    blogItem: {
      background: "#191d2b",
      padding: "15px",
      "&:hover": {
        "& .blog-item-image img": {
          "-webkit-transform": "scale(1.15)",
          transform: "scale(1.15)",
        },
      },
      "& .blog-item-image": {
        position: "relative",
        overflow: "hidden",
        "& img": {
          "-webkit-transition": "all .4s ease-out",
          transition: "all .4s ease-out",
        },
        "& .blog-item-date": {
          position: "absolute",
          left: "20px",
          top: "20px",
          background: "rgba(3,127,255,.8)",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
          minWidth: "80px",
          minHeight: "80px",
          "& span": {
            display: "block",
          },
          "& .date": {
            fontSize: "2.5rem",
            lineHeight: 1,
            fontWeight: 700,
          },
          "& .month": {
            fontSize: "1.3rem",
            lineHeight: 1,
            fontWeight: 700,
          },
        },
      },
      "& .blog-item-content": {
        paddingTop: "15px",
        "& h5": {
          fontWeight: 600,
          marginBottom: 0,
          "& a": {
            "-webkit-transition": "all .4s ease-out",
            transition: "all .4s ease-out",
            color: "#fff",
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
        },
      },
    },
    blogsDetailArea: {
      position: "relative",
      paddingTop: "120px",
      paddingBottom: "120px",
      minHeight: "100vh",
      "& img": {
        marginBottom: "15px",
      },
      "& h3": {
        fontWeight: 700,
      },
      "& blockquote": {
        marginTop: "25px",
        marginBottom: "25px",
      },
    },
    developmentArea: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      position: "relative",
      zIndex: 1,
      "& .development-content": {
        textAlign: "center",
        "& svg": {
          color: blue,
          fontSize: "150px",
        },
        "& h1": {
          fontWeight: 700,
        },
      },
    },
    inputLabel: {
      "-webkit-transition": "all .4s ease-out",
      transition: "all .4s ease-out",
    },
    alertBox: {
      "-webkit-transition": "all .4s ease-out",
      transition: "all .4s ease-out",
      marginLeft: "10px",
      borderRadius: "2px",
      visibility: "hidden",
      opacity: 0,
    },
    isVisible: {
      visibility: "visible",
      opacity: 1,
    },
  });
