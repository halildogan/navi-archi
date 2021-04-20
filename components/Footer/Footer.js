import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {useMutation, gql} from "@apollo/react-hooks"

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import LangIcon from '@material-ui/icons/Language';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import { i18n } from '../../i18n';
import logo from '../../public/images/navi-archi-logo.svg';
import brand from '../../public/text/brand';
import useStyles from './footer-style';

const MUTATION_CREATE_VISIT = gql`
  mutation createVisitMutation($input: createVisitInput!) {
    createVisit(input: $input)
  }
`

function Copyright() {
  return (
    <Typography variant="body2" display="block" color="textSecondary">
      &copy;&nbsp;
      {brand.architect.footerText}
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
    link: ['#team', '#history', '#contact-us', '#locations'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    link: ['#resource', '#resource-name', '#another-resource', '#final-resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
    link: ['#privacy-policy', '#terms-of-use'],
  },
];

function Footer(props) {
  const {app} = props
  const [ctn, setCtn] = useState(null);
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [values, setValues] = useState({
    lang: 'en'
  });

  const [createVisit, {loading, error}] = useMutation(MUTATION_CREATE_VISIT, {
    variables: {
      input: {
        label: "new-visit",
        ip: "127.0.0.1",
        app: {
          id: app.id
        }
      }
    }
  })

  useEffect(() => {
    createVisit()
    setValues({ lang: i18n.language });
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    if (event.target.value === 'ar') {
      i18n.changeLanguage('ar');
      props.toggleDir('rtl');
    } else {
      i18n.changeLanguage(event.target.value);
      props.toggleDir('ltr');
    }
  }

  const handleRoute = (e) => {
    console.log("e:", e)
  }

  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
            <Typography variant="h6" color="textPrimary">
              {brand.architect.projectName}
            </Typography>
          </div>
          <Typography color="textPrimary" className={classes.footerDesc} gutterBottom>
            Navi Archi is a fully licensed Architect firm, providing full services for residential, commercial, institutional, and industrial projects. Our firm offers design, research, development, technical support, and construction administration for buildings.
          </Typography>
          <Copyright />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={4} justify="space-evenly">
            {footers.map(footer => (
              <Grid item xs={12} md={3} key={footer.title} className={classes.siteMapItem}>
                {isDesktop && (
                  <div>
                    <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                      {footer.title}
                    </Typography>
                    <ul>
                      {footer.description.map((item, index) => (
                        <li key={item}>
                          <Link onClick={() => handleRoute(footer.link[index])} href={footer.link[index]} variant="subtitle1" color="textSecondary">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isMobile && (
                  <ExpansionPanel
                    square
                    classes={{
                      root: classes.accordionRoot,
                    }}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon className={classes.accordionIcon} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      classes={{
                        content: classes.accordionContent,
                      }}>
                      <strong>
                        {footer.title}
                      </strong>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <ul>
                        {footer.description.map((item, index) => (
                          <li key={item}>
                            <Link onClick={() => handleRoute(footer.link[index])} href={footer.link[index]} variant="subtitle1" color="textSecondary">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.socmed}>
            <IconButton aria-label="FB" className={classes.margin} size="small">
              <i className="ion-social-twitter" />
            </IconButton>
            <IconButton aria-label="TW" className={classes.margin} size="small">
              <i className="ion-social-facebook" />
            </IconButton>
            <IconButton aria-label="IG" className={classes.margin} size="small">
              <i className="ion-social-instagram" />
            </IconButton>
            <IconButton aria-label="LI" className={classes.margin} size="small">
              <i className="ion-social-linkedin" />
            </IconButton>
          </div>
          <Select
            value={values.lang}
            onChange={handleChange}
            MenuProps={{
              container: ctn
            }}
            startAdornment={(
              <InputAdornment className={classes.icon} position="start">
                <LangIcon />
              </InputAdornment>
            )}
            className={classes.selectLang}
            input={<OutlinedInput labelWidth={200} name="lang" id="outlined-lang-simple" />}>
              {app.metas ? app.metas.map(lan => <MenuItem key={lan.language} value={lan.language}>{lan.language}</MenuItem>) : <MenuItem value="en">English</MenuItem>}
          </Select>
        </Grid>
      </Grid>
    </Container>
  );
}

Footer.propTypes = {
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  toggleDir: () => {},
};

export default Footer;
