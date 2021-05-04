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

import { ApolloProvider, useQuery, gql } from '@apollo/react-hooks';

import {client} from "../lib/apollo";

const QUERY_APP = gql`
  query appQuery($id: String) {
    app(id: $id) {
      id
      meta {
        id
        title
        keywords
        description
      }
      metas {
        id
        language
      }
      status {
        id
        path
      }
      type {
        id
        path
      }
    }
  }
`

let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function MyApp(props) {
  return (
      <ApolloProvider client={client}>
        <Qu {...props}/>
      </ApolloProvider>
  );
}

const Qu = (props) => {
  const { loading, data } = useQuery(QUERY_APP, {
    variables: {
      id: "26972e49-7b52-43f7-82f0-ce17895059d3"
    }
  });


  console.log("app: ", data)
  if (!loading && !data) return <DefaultErrorPage statusCode={503} />;


  return <MainWrap {...props} loading={loading} {...data} />;
};


function MainWrap(props) {

  const [loading, setLoading] = useState(0);
  const [theme, setTheme] = useState({
    ...appTheme('greenLeaf', themeType),
    direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
  });

  useEffect(() => {
    // Set layout direction
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      preloader.remove();
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => { setLoading(100); }, 2000);

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
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
  const { Component, pageProps, router, app } = props; // eslint-disable-line
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  const mainte = true
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
                app={app}
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

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default appWithTranslation(MyApp);
