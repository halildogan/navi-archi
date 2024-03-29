import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ThemeProvider,
  createMuiTheme,
  StylesProvider,
  jssPreset
} from '@material-ui/core/styles';
import { create } from 'jss';
import { PageTransition } from 'next-page-transitions';
import DefaultErrorPage from 'next/error';

import DefaultComingSoon from "./DefaultComingSoon"

import rtl from 'jss-rtl';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoadingBar from 'react-top-loading-bar';
import { i18n, appWithTranslation } from '../i18n';
import appTheme from '../theme/appTheme';
/* import css vendors */
import '../node_modules/animate.css/animate.css';
import '../vendors/top-loading-bar.css';
import '../vendors/animate-extends.css';
import '../vendors/page-transition.css';
import '../vendors/slick/slick.css';
import '../vendors/slick/slick-theme.css';
import { lapadi } from "../lib/lapadi";
let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function MainWrap(props) {

  const [loading, setLoading] = useState(0);
  const [theme, setTheme] = useState({
    ...appTheme('greenLeaf', themeType),
    direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
  });
  const [state, setState] = useState({
    app: null,
    error: false,
    loading: false
  });
  const handleState = (values) => {
    setState((prev) => ({
      ...prev,
      ...values
    }))
  }

  useEffect(() => {
    // Set layout direction
    setLoading(100);

   
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      preloader.remove();
    }

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    };
    
    (async() => {
      await lapadi.app.get().then( async ({data, errors}) => {
        handleState({app:data});
        setTimeout(() => {
          setLoading(100);
        }, 1500);
    
      }).catch(err =>  handleState({error:err}))
    })()
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    setTheme({
      ...appTheme('greenLeaf', newPaletteType),
      direction: theme.direction,
    });
  };

  const toggleDirection = dir => {
    document.dir = dir;
    setTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette
      }
    });
  };
  const muiTheme = createMuiTheme(theme);
  const { Component, pageProps, router } = props; // eslint-disable-line
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  const mainte = false

  if (!loading &&  state.error) return <DefaultErrorPage statusCode={503} />;

  console.log("app state: ", state)
  return (
    <div>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <LoadingBar
            height={0}
            color={theme.palette.primary.light}
            progress={loading}
            className="top-loading-bar"
          />
          <div id="main-wrap">
            <PageTransition timeout={300} classNames="page-fade-transition">
              {mainte ? <DefaultComingSoon statusCode={503} /> : 
              <Component
                app={state.app}
                {...pageProps}
                onToggleDark={toggleDarkTheme}
                onToggleDir={toggleDirection}
                key={router.route}
              /> }
            </PageTransition>
          </div>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

MainWrap.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default appWithTranslation(MainWrap);
