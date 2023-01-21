import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {Button, Container, Typography, Paper, TextField, Snackbar} from '@material-ui/core';
import { Parallax } from 'react-parallax';

import imgAPI from '../../public/images/imgAPI';
import { useText } from '../../theme/common';
import { withTranslation } from '../../i18n';
import useStyles from './subscribe-style';

function SubscribeForm(props) {
  const classes = useStyles();
  const text = useText();
  const { t, app } = props;
  const [value, setValue] = useState('');

  const [notify, setNotif] = useState({
    show: false,
    message: ''
  });

  function handleChange(event) {
    setValue(event.target.value);
  }

  const handleClose = () =>  setNotif({ show: false });
  
  const handleSubmit = async () => {
      // await createAppUser({
      //   variables: {
      //     input: {
      //       app: {
      //         id: app.id
      //       },
      //       apps: [{
      //         id: app.id
      //       }],
      //       user: {
      //         email: value
      //       },
      //       role: {
      //         id: '28d269c7-2e99-489f-b193-738b8292ede1'
      //       },
      //       notification: true
      //     }
      //   }
      // }).then(({data, errors}) => {
      //   if (errors) handleErrors(errors[0]);
      //   if (data?.createAppUser) handleSuccess({
      //     message: "Thank you! You subscribed."
      //   })
      // }).catch(error => handleErrors(error))
  }
  const handleErrors = (err) => {
    setNotif({
      show: true,
      message: err.message
    })
  }
  const handleSuccess = (success) => {
    setNotif({
      show: true,
      message: success.message
    })
    setValue("")
  }
  return (
    <div className={classes.root}>
      <Parallax
        blur={0}
        bgImage={imgAPI.architect[15]}
        bgImageAlt="benefit"
        strength={300}
      >
        <div className={classes.parallaxWrap} />
      </Parallax>
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
      <Container fixed>
        <Paper className={classes.form}>
          <Typography variant="h4" className={text.title2}>
            {t('common:architect-landing.subscribe_title')}
          </Typography>
          <Typography className={text.subtitle2}>
            {t('common:architect-landing.subscribe_subtitle')}
          </Typography>
            <form>
              <TextField
                className={classes.field}
                fullWidth
                label={t('common:architect-landing.subscribe_input')}
                placeholder={t('common:architect-landing.subscribe_input')}
                onChange={(e) => handleChange(e)}
                value={value}
              />
              <Button onClick={handleSubmit} disabled={!value} variant="contained" size="large" color="secondary" className={classes.button}>
                {t('common:architect-landing.subscribe_subscribe')}
              </Button>
            </form>
        </Paper>
      </Container>
    </div>
  );
}

SubscribeForm.propTypes = {
  t: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired
};

export default withTranslation(['architect-landing'])(SubscribeForm);
