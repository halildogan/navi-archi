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
import { useText } from '../../theme/common';
import brand from '../../public/text/brand';
import logo from '../../public/images/architect-logo.svg';
import routeLink from '../../public/text/link';
import { withTranslation } from '../../i18n';
import useStyles from './form-style';
import CrossParallax from '../Parallax/Cross';
import Title from '../Title';
import {termsAndUse} from "./data";

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
}

function TermsAndUse(props) {
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
                    head="Terms and Conditions"
                    // desc={t('common:contact_subtitle')}
                  />
                  {termsAndUse}
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


TermsAndUse.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(TermsAndUse);
