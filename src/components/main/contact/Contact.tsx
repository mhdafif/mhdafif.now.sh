import React from "react";
import { WithStyles, withStyles, Grid } from "@material-ui/core";
import { styles } from "styles";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import MapIcon from "@material-ui/icons/Room";
import CopyToClipboard from "react-copy-to-clipboard";
import classNames from "classnames";
import { LoadingContext } from "context/loading/loadingContext";
import { AlertContext } from "context/alert/alertContext";
import { AlertType } from "context/alert/AlertType";
import { useApi } from "hooks/useApi";
import { API_ROUTES } from "utils/Constant";

interface Props {}

interface IContact {
  type: string;
  value: string;
  visible: boolean;
  icon: any;
}

interface IMailFormat {
  name: string;
  from: string;
  subject: string;
  message: string;
}

type AllProps = WithStyles<typeof styles> & Props;

const ContactComp: React.FC<AllProps> = (props) => {
  const { classes } = props;
  const { postOnApi } = useApi();
  const initialValues: IMailFormat = {
    name: "",
    from: "",
    subject: "",
    message: "",
  };

  const [contacts, setContacs] = React.useState<IContact[]>([
    {
      type: "Phone",
      value: "081321972065",
      visible: false,
      icon: <PhoneIcon />,
    },
    {
      type: "Email",
      value: "hammadaf9408@gmail.com",
      visible: false,
      icon: <EmailIcon />,
    },
    {
      type: "Address",
      value: "Super Puma Raya no 9, Cimahi Selatan",
      visible: false,
      icon: <MapIcon />,
    },
  ]);
  const [mail, setMail] = React.useState<IMailFormat>(initialValues);
  const [error, setError] = React.useState<Boolean>(false);
  const loadingContext = React.useContext(LoadingContext);
  const alertContext = React.useContext(AlertContext);

  const { loading } = loadingContext;
  const { setAlert, AlertJSX } = alertContext;

  const handleTooltip = (index: number) => {
    let newContacts = [...contacts];
    newContacts[index].visible = true;
    setContacs(newContacts);
    setTimeout(() => {
      let resetContacts = [...contacts];
      resetContacts[index].visible = false;
      setContacs(resetContacts);
    }, 1500);
  };

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setMail({
      ...mail,
      [name]: value,
    });
  };

  const handleSendMail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { name, from, subject, message } = mail;
    if (!loading) {
      if (name && from && subject && message) {
        const next = (res: any) => {
          setAlert({
            type: AlertType.Success,
            message: "Your message has been sent!",
          });
          setMail(initialValues);
        };

        postOnApi(API_ROUTES.SEND_MAIL, mail, false, next);
      } else {
        setAlert({
          type: AlertType.Error,
          message: "Data is not complete!",
        });
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    }
  };

  return (
    <div className={classes.contactArea}>
      <Grid container className={classes.container2}>
        <Grid item xs={10} lg={8}>
          <div className={classes.title}>
            <h2>Contact Me</h2>
            <span>Contact Me</span>
          </div>
        </Grid>
        <Grid item xs={10} lg={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} style={{ display: "none" }}>
              <div>
                <h4>Get In Touch</h4>
                <form>
                  <div className={classes.formField}>
                    <label
                      className={classNames(
                        classes.inputLabel,
                        error && mail.name === ""
                          ? classes.errorColor
                          : classes.fontColor
                      )}
                    >
                      Enter your name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      disabled={loading}
                      value={mail.name}
                      onChange={handleInput}
                    />
                  </div>
                  <div className={classes.formField}>
                    <label
                      className={classNames(
                        classes.inputLabel,
                        error && mail.from === ""
                          ? classes.errorColor
                          : classes.fontColor
                      )}
                    >
                      Enter your email*
                    </label>
                    {/* pattern only work if the submit is input not button */}
                    <input
                      type="email"
                      name="from"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      disabled={loading}
                      value={mail.from}
                      onChange={handleInput}
                    />
                  </div>
                  <div className={classes.formField}>
                    <label
                      className={classNames(
                        classes.inputLabel,
                        error && mail.subject === ""
                          ? classes.errorColor
                          : classes.fontColor
                      )}
                    >
                      Enter your subject*
                    </label>
                    <input
                      type="text"
                      name="subject"
                      disabled={loading}
                      value={mail.subject}
                      onChange={handleInput}
                    />
                  </div>
                  <div className={classes.formField}>
                    <label
                      className={classNames(
                        classes.inputLabel,
                        error && mail.message === ""
                          ? classes.errorColor
                          : classes.fontColor
                      )}
                    >
                      Enter your message*
                    </label>
                    <textarea
                      name="message"
                      cols={30}
                      rows={6}
                      disabled={loading}
                      value={mail.message}
                      onChange={handleInput}
                    />
                  </div>
                  <div className={classes.formField}>
                    {/* <button className={classes.button}>Send Mail <span className="feature-maintenance">This feature is under construction</span> </button> */}
                    {/* <input type="submit" value="Send Mail" className={classes.button}/> */}
                    <div style={{ display: "flex" }}>
                      <div style={{ position: "relative" }}>
                        <button
                          type="submit"
                          className={classNames(
                            classes.button,
                            loading && classes.buttonActive
                          )}
                          onClick={handleSendMail}
                          disabled={loading}
                        >
                          Send Mail
                        </button>
                      </div>
                      {AlertJSX}
                    </div>
                  </div>
                </form>
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className={classes.contactInfo}>
                {contacts.map((contact, index) => (
                  <React.Fragment key={index}>
                    <div className={classes.contactCard}>
                      <CopyToClipboard
                        onCopy={() => handleTooltip(index)}
                        text={contact.value}
                      >
                        <span className={classes.contactIcon}>
                          {contact.icon}
                        </span>
                      </CopyToClipboard>
                      <div className={classes.contactContent}>
                        <h6>
                          {contact.type}{" "}
                          <span
                            className={classNames(
                              classes.copiedToolTip,
                              contact.visible
                                ? classes.copiedTooltipVisible
                                : ""
                            )}
                          >
                            Copied
                          </span>
                        </h6>
                        <p>
                          <CopyToClipboard
                            onCopy={() => handleTooltip(index)}
                            text={contact.value}
                          >
                            <span className="copyText">{contact.value}</span>
                          </CopyToClipboard>
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export const Contact = withStyles(styles)(ContactComp);
