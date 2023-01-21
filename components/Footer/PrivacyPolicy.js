import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

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
import { useText } from '../../theme/common';
import brand from '../../public/text/brand';
import logo from '../../public/images/navi-archi-logo.svg';
import routeLink from '../../public/text/link';
import { withTranslation } from '../../i18n';
import useStyles from './form-style';
import CrossParallax from '../Parallax/Cross';
import Title from '../Title';
import {privacyPolicyText} from "./data";


function BubleMark() {
  const classes = useStyles();
  return (
    <div className={classes.bubelWrap}>
      <div className={classes.buble}>
        <Typography variant="h6" gutterBottom>
          Head Quarter
        </Typography>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Typography>
              <PhoneIcon className={classes.icon} />
              +1 416 818 4292
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography>
              <EmailIcon className={classes.icon} />
              hello@navi.archi
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <LocationIcon className={classes.icon} />
              Toronto, ON
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function MapContainer(props) {
  const [activeMarker, setActive] = useState({});
  const [showingInfoWindow, setShow] = useState(false);
  const { google } = props;

  const onMarkerClick = marker => {
    setActive(marker);
    setShow(true);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setShow(false);
      setActive(null);
    }
  };

  return (
    <Map
      google={google}
      onClick={onMapClicked}
      style={{ width: '100%', height: '700px', position: 'relative' }}
      initialCenter={{
        lat: 43.8938393,
        lng: -79.2691786
      }}
      zoom={14}
    >
      <Marker
        onClick={onMarkerClick}
        position={{ lat: 43.8938393, lng: -79.2691786 }}
      />
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
      >
        <div>
          <BubleMark />
        </div>
      </InfoWindow>
    </Map>
  );
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

const MapWithAMarker = GoogleApiWrapper({ apiKey: brand.architect.mapKey })(MapContainer);

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
}

function PrivacyPolicy(props) {
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

  const [check, setCheck] = useState(false);

  const handleSubmit = async () => {
    // await createMail({
    //   variables: {
    //     input:{
    //       from: {
    //         name: values.name,
    //         surname: null,
    //         email: values.email,
    //         phone: values.phone,
    //       },
    //       subject: `Message from ${values.name} via website`,
    //       text: values.message,
    //       app: {
    //         id: app.id
    //       }
    //     }
    //   }
    // }).then(({data, errors}) => {
    //   if (errors) handleError(errors[0])
    //   if (data?.createMail) handleSuccess(data)
    // }).catch(err => handleError(err))
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
          <Grid item lg={11} xs={12} className={classes.wrapDeco}>
            <Hidden mdDown>
              <div className={classes.frmDeco} />
            </Hidden>
            <Paper className={clsx(classes.formBox, 'fragment-fadeUp')}>
              <div className={classes.fullFromWrap}>
                <div className={classes.form}>
                  <Title
                    head="Privacy Policy"
                    // desc={t('common:contact_subtitle')}
                  />
                  {privacyPolicyText}
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


PrivacyPolicy.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(PrivacyPolicy);
