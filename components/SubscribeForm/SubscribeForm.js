import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import { Parallax } from 'react-parallax';
import imgAPI from '../../public/images/imgAPI';
import { useText } from '../../theme/common';
import { withTranslation } from '../../i18n';
import useStyles from './subscribe-style';

import SubscriptionController from "../../controller/support/SubscriptionController";

function SubscribeForm(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const [value, setValue] = useState('');

  const [openNotif, setNotif] = useState(false);

  function handleChange(event) {
    setValue(event.target.value);
  }

  const handleClose = () => {
    setNotif(false);
  };
  
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
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Thank you! You subscribed.</span>}
      />
      <Container fixed>
        <Paper className={classes.form}>
          <Typography variant="h4" className={text.title2}>
            {t('common:architect-landing.subscribe_title')}
          </Typography>
          <Typography className={text.subtitle2}>
            {t('common:architect-landing.subscribe_subtitle')}
          </Typography>
          <SubscriptionController>
            {(data) => {
              const {createSupport, loading} = data;
              return (
                <form>
                  <TextField
                    className={classes.field}
                    fullWidth
                    label={t('common:architect-landing.subscribe_input')}
                    placeholder={t('common:architect-landing.subscribe_input')}
                    onChange={(e) => handleChange(e)}
                    value={value}
                  />
                  <Button onClick={() => {
                    createSupport({
                      variables: {
                        input: {
                          email: value,
                          appId: "3e005e83-7aea-4ca0-8c03-d3d3daaf8227"
                        }
                      }
                    }).then(res => {
                      setNotif(true);
                      setValue("")
                    }).catch(error => console.log(error))
                  }} disabled={!value} variant="contained" size="large" color="secondary" className={classes.button}>
                    {t('common:architect-landing.subscribe_subscribe')}
                  </Button>
                </form>
              )
            }}
          </SubscriptionController>
        </Paper>
      </Container>
    </div>
  );
}

SubscribeForm.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['architect-landing'])(SubscribeForm);
