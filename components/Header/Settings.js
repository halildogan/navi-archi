import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import CheckIcon from '@material-ui/icons/Check';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { i18n, withTranslation } from '../../i18n';
import useStyles from './header-style';

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props) {
  const [ctn, setCtn] = useState(null);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDark, setDark] = useState(themeType === 'dark');

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  function handleChangeLang(lang) {
    if (lang === 'ar') {
      i18n.changeLanguage('ar');
      props.toggleDir('rtl');
    } else {
      i18n.changeLanguage(lang);
      props.toggleDir('ltr');
    }
    setAnchorEl(null);
  }

  useEffect(() => {
    setCtn(document.getElementById('main-wrap'));
  });

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const { invert, t } = props;

  return (
    <div className={classes.setting}>
      <IconButton
        aria-describedby={id}
        aria-label="Settings"
        onClick={handleClick}
        className={
          clsx(
            classes.icon,
            open && classes.active,
            invert && classes.invert
          )
        }
      >
        <SettingsIcon fontSize="inherit" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        container={ctn}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List
          component="nav"
          className={classes.modeMenu}
          aria-label="Mode-menu"
          subheader={(
            <ListSubheader component="div">
              {t('common:architect-landing.header_theme')}
            </ListSubheader>
          )}
        >
          <ListItem>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>{t('common:architect-landing.header_light')}</Grid>
                <Grid item>
                  <Switch
                    checked={isDark}
                    onChange={handleChangeMode}
                    value={isDark}
                    inputProps={{ 'aria-label': 'checkbox' }}
                  />
                </Grid>
                <Grid item>{t('common:architect-landing.header_dark')}</Grid>
              </Grid>
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List
          component="nav"
          className={classes.langMenu}
          aria-label="Language-menu"
          subheader={(
            <ListSubheader component="div">
              {t('common:architect-landing.header_language')}
            </ListSubheader>
          )}
        >
          {props.app?.metas?.map(val => (
            <ListItem
              key={val.language}
              role={undefined}
              dense
              button
              onClick={() => handleChangeLang(val.language)}
            >
              <ListItemIcon>
                <i className={val.language} />
              </ListItemIcon>
              <ListItemText primary={t('common:' + val.language)} />
              {i18n.language === val.language && (
                <ListItemSecondaryAction>
                  <CheckIcon color="primary" />
                </ListItemSecondaryAction>
              )}
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
}

Settings.propTypes = {
  toggleDark: PropTypes.func.isRequired,
  toggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  invert: PropTypes.bool,
  app: PropTypes.object
};

Settings.defaultProps = {
  invert: false
};

export default withTranslation(['common', 'architect-landing'])(Settings);
