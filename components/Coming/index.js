import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import routeLink from '../../public/text/link';
import useStyles from './error-style';

function Coming(props) {
  const classes = useStyles();
  const { errCode, text } = props;
  return (
    <div className={classes.errorWrap}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={5} xs={12}>
            <div className={classes.flex}>
              <div className={classes.deco}>
             
              </div>
            </div>
          </Grid>
          <Grid item sm={7} xs={12}>
            <div className={classes.text}>
              <Typography variant="h4">{"Coming soon."}</Typography>
              <Typography>
                We do not provide services for now.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Coming.propTypes = {
  errCode: PropTypes.string,
  text: PropTypes.string,
};

Coming.defaultProps = {
  errCode: '404',
  text: '',
};

export default Coming;
