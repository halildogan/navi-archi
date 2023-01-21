import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Header from '../components/Header';
import VideoBanner from '../components/VideoBanner';
import Services from '../components/Services';
import Project from '../components/Project';
import Featured from '../components/Featured';
import About from '../components/About';
import Team from '../components/Team';
import Counter from '../components/Counter';
import Blog from '../components/Blog';
import Subscribe from '../components/SubscribeForm';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import Notification from '../components/Notification';
import brand from '../public/text/brand';

import { lapadi } from "../lib/lapadi";

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  spaceBottom: {
    paddingBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      paddingBottom: sectionMargin(6),
    }
  },
  spaceBottomShort: {
    paddingBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      paddingTop: sectionMargin(6),
    }
  },
  
  spaceTopShort: {
    paddingTop: sectionMargin(theme.spacing() / 2)
  },
  containerWrap: {
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const { onToggleDark, onToggleDir, app } = props;

  const [state, setState] = useState({
    contents: null
  });
  const handleState = (values) => {
    setState((prev) => ({
      ...prev,
      ...values
    }))
  }

  useEffect(() => {
    (async() => {
      await lapadi.app.content.list({
        category: {
          pagination: { page: 0, per: 10 },
          filter: {
            status: {
              path: ['active']
            }
          }
        },
        article: {
          pagination: { page: 0, per: 10, },
          filter: {
            status: {
              path: ['active']
            }
          }
        },
        project: { 
          pagination: { page: 0, per: 10 },
          filter: {
            status: {
              path: ['active']
            }
          } 
        }
      }).then(({data}) => {
        handleState({
          contents: data
        })
      })
    })()
  }, []);

  console.log("index state: ", state)
  return (
    <React.Fragment>
      <Head>
        <title>Home Page&nbsp; - { app?.meta?.title }</title>
        {/* <meta key="description" content={app.meta.description} /> */}
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          app={app}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <VideoBanner />
          </section>
          <section id="services" className={classes.spaceTopShort}>
            <Services project={[]} />
          </section>
          <section id="project" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
            <Project app={app} project={state?.contents?.project} />
          </section>
          <section id="featured" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
            <Featured />
          </section>
          <section id="about">
            <div className={isTablet ? classes.spaceTopShort : classes.spaceTop}>
              <About />
            </div>
            {/* 
              <div className={classes.spaceTopShort}>
                <Team />
              </div>
            */}
            {/* <div>
              <Counter />
            </div> */}
          </section>
          {/* 
            <div id="blog" className={classes.spaceTopShort}>
              <Blog />
            </div>
          */}
          <section id="subscribe" className={classes.spaceTopShort}>
            <Subscribe app={app}/>
          </section>
          <Footer app={app} toggleDir={onToggleDir} />
        </main>
        <Hidden mdDown>
          <PageNav />
        </Hidden>
        <Notification />
      </div>
    </React.Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'architect-landing'],
});

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};


export default Landing;
