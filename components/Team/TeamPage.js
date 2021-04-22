import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {gql, useMutation} from "@apollo/react-hooks";
import {MUTATION_CREATE_MAIL} from "../../controller/mail/Mail";

import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/LocalPhone';
import LocationIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Map,
  Marker,
  GoogleApiWrapper,
  InfoWindow
} from 'google-maps-react';
import ReactWOW from 'react-wow';
import { useText } from '../../theme/common';
import brand from '../../public/text/brand';
import logo from '../../public/images/architect-logo.svg';
import routeLink from '../../public/text/link';
import { withTranslation } from '../../i18n';
import useStyles from './form-style';
import CrossParallax from '../Parallax/Cross';
import ProfileCard from '../Cards/Profile';
import Title from '../Title';
import imgAPI from '../../public/images/imgAPI';


const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
}

function Contact(props) {
  const classes = useStyles();
  const text = useText();
  const { t, app } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [values, setValues] = useState(initialState);

  const [notify, setNotif] = useState({
    show: false,
    message: ''
  });

  const team = [
    {
      photo: imgAPI.architect[9],
      name: 'John Doe',
      title: 'chairman'
    },
    {
      photo: imgAPI.architect[10],
      name: 'jane Doe',
      title: 'Chief Executive Officer'
    },
    {
      photo: imgAPI.architect[11],
      name: 'James Doe',
      title: 'Chief Marketing Officer'
    },
    {
      photo: imgAPI.architect[12],
      name: 'Jihan Doe',
      title: 'Chief Operation Officer'
    },
    {
      photo: imgAPI.architect[13],
      name: 'Johan Doe',
      title: 'Senior Architect'
    },
    {
      photo: imgAPI.architect[14],
      name: 'Jena Doe',
      title: 'Senior Architect'
    },
  ];

  const [check, setCheck] = useState(false);

  const [createMail, {loading, error}] = useMutation(MUTATION_CREATE_MAIL)

  const handleSubmit = async () => {
    await createMail({
      variables: {
        input:{
          from: {
            name: values.name,
            surname: null,
            email: values.email,
            phone: values.phone,
          },
          subject: `Message from ${values.name} via website`,
          text: values.message,
          app: {
            id: app.id
          }
        }
      }
    }).then(({data, errors}) => {
      if (errors) handleError(errors[0])
      if (data?.createMail) handleSuccess(data)
    }).catch(err => handleError(err))
  }

  const handleSuccess = (data) => {
    setNotif({
      show: true,
      message: "Message Sent"
    });
    setValues(initialState)
  }

  const handleError = (err) => {
    setNotif({
      show: true,
      message: err.message
    })
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleClose = () => {
    setNotif(false);
  };
  return (
    <div className={classes.pageWrap}>
      <Hidden mdDown>
        <div className={classes.bgDeco} />
      </Hidden>
      <div className={classes.parallax}>
        <CrossParallax />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={notify.show}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{notify.message}</span>}
      />
      <Hidden mdUp>
        <div className={clsx(classes.logo, classes.logoHeader)}>
          <a href={routeLink.architect.home}>
            <img src={logo} alt="logo" />
            <Typography component="span">
              {brand.architect.projectName}
            </Typography>
          </a>
        </div>
      </Hidden>
      <Container maxWidth="lg" className={classes.innerWrap}>
        <IconButton href={routeLink.architect.home} className={classes.backtohome}>
          <i className="ion-ios-home-outline" />
          <i className="ion-ios-arrow-thin-left" />
        </IconButton>
        <Grid container>
          <Grid item lg={1} xs={12} />
          <Grid item lg={5} xs={12} className={classes.wrapDeco}>
            {team.map((item, index) => (
              <Grid item md={4} xs={6} key={index.toString()}>
                <ReactWOW animation="fadeInUpShort" offset={-50} delay={`${0.2 + (0.1 * index)}s`} duration="0.3s">
                  <div>
                    <ProfileCard
                      photo={item.photo}
                      name={item.name}
                      title={item.title}
                    />
                  </div>
                </ReactWOW>
              </Grid>
            ))}
          </Grid>
          <Grid item lg={6} xs={12}></Grid>
        </Grid>
      </Container>
    </div>
  );
}


Contact.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(Contact);
