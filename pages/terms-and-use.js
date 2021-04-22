import React, { Fragment } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import brand from '../public/text/brand';
import TermsAndUse from '../components/Footer/TermsAndUse';

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  }
}));

function Contact(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Head>
        <title>
          { brand.architect.name }
          &nbsp; - Terms and Use
        </title>
      </Head>
      <div className={classes.mainWrap}>
        <TermsAndUse {...props}/>
      </div>
    </Fragment>
  );
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Contact;
