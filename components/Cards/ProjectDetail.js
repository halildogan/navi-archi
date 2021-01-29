import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function ProjectCard({item}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <div>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
         
              <Typography component="h5" variant="h5">
              Project 
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {item.meta.title}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
      <div style={{
        marginTop: 20
      }}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
           
            <Typography component="h5" variant="h5">
              Status   
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {item.status && item.status.meta.title || "..."}
            </Typography>
          </CardContent>
        </div>
      </Card>
      </div>
      {
        item.users && (
          <div style={{marginTop: 20}}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                  Teams
                  </Typography>
                  {item.users.map(user => <Avatar alt={user.name} src={user.avatar && user.avatar.url} />)}
                </CardContent>
              </div>
            </Card>
          </div>
        )
      }
      
    </div>
  );
}