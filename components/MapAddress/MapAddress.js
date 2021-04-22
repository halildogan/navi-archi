import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ReactWOW from 'react-wow';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/LocalPhone';
import LocationIcon from '@material-ui/icons/LocationOn';
import Snackbar from '@material-ui/core/Snackbar';
import Hidden from '@material-ui/core/Hidden';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import brand from '../../public/text/brand';
import logo from '../../public/images/architect-logo.svg';
import routeLink from '../../public/text/link';
import { withTranslation } from '../../i18n';
import useStyles from './map-address-style';
import TitleDeco from '../Title/WithDecoration';
import CrossParallax from '../Parallax/Cross';

function MapContainer(props) {
  const { google } = props;
  return (
    <Map
      google={google}
      style={{ width: '100%', height: '700px', position: 'relative' }}
      initialCenter={{
        lat: 43.8938393,
        lng: -79.2691786
      }}
      zoom={14}
    >
      <Marker
        position={{ lat: 43.8938393, lng: -79.2691786 }}
      />
    </Map>
  );
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

const MapWithAMarker = GoogleApiWrapper({ apiKey: brand.architect.mapKey })(MapContainer);


function MapAdress(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Translation Function
  const { t } = props;
  const classes = useStyles();

  const [notify, setNotif] = useState({
    show: false,
    message: ''
  });

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
        <Grid container spacing={6}>
          {isDesktop && (
            <Grid item md={1} />
          )}
          <Grid item md={5} xs={12}>
            <TitleDeco text={t('common:architect-landing.office_title')} />
            <div className={classes.block}>
              <ReactWOW animation="fadeInLeftShort" offset={-100} delay="0.2s" duration="0.3s">
                <Paper className={classes.paper}>
                  <Typography variant="h6" display="block">
                    {t('common:architect-landing.office_head')}
                  </Typography>
                  <Grid container>
                    {/* <Grid item sm={6} xs={12}>
                      <PhoneIcon className={classes.icon} />
                      +1
                    </Grid> */}
                    <Grid item sm={6} xs={12}>
                      <EmailIcon className={classes.icon} />
                      toronto@navi.archi
                    </Grid>
                    <Grid item xs={12}>
                      <LocationIcon className={classes.icon} />
                      Toronto, Canada
                    </Grid>
                  </Grid>
                </Paper>
              </ReactWOW>
              {/* <ReactWOW animation="fadeInLeftShort" offset={-100} delay="0.5s" duration="0.3s">
                <Paper className={classes.paper}>
                  <Typography variant="h6" display="block">
                    {t('common:architect-landing.office_branch')}
                  </Typography>
                  <Grid container>
                    <Grid item sm={6} xs={12}>
                      <PhoneIcon className={classes.icon} />
                      
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <EmailIcon className={classes.icon} />
                      ankara@navi.archi
                    </Grid>
                    <Grid item xs={12}>
                      <LocationIcon className={classes.icon} />
                      Ankara, Turkey
                    </Grid>
                  </Grid>
                </Paper>
              </ReactWOW> */}
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className={classes.map} elevation={10}>
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '700px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

MapAdress.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['architect-landing'])(MapAdress);
