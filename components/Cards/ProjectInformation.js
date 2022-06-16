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

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { withTranslation } from '../../i18n';


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
      author: 'swabdesign',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
      author: 'Pavel Nekoranec',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
      author: 'Charles Deluvio',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
      author: 'Christian Mackie',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
      author: 'Darren Richardson',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
      author: 'Taylor Simpson',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
      author: 'Ben Kolde',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
      author: 'Philipp Berndt',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
      author: 'Jen P.',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
      author: 'Douglas Sheppard',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
      author: 'Fi Bell',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
      author: 'Hutomo Abrianto',
    },
  ];

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

const ProjectInformation = ({t, item}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div >
        {item.images.length > 0 && (
            <div>
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                              {t("common:architect-landing.galery")}
                            </Typography>
                            <GridList cellHeight={160} spacing={40} cols={2} className={classes.gridList}>
                                {item.images && item.images.map((image) => (
                                  <GridListTile key={image.url} cols={1} rows={1}>
                                      <img src={image.url} alt={image.name} />
                                      <GridListTileBar
                                          title={image.name}
                                          titlePosition="top"
                                          actionPosition="left"
                                          className={classes.titleBar}
                                      />
                                  </GridListTile>
                                ))}
                            </GridList>
                        </CardContent>
                    </div>
                </Card>
            </div>
        )}
        {item.meta?.tags && (
            <div style={{marginTop: 20}}>
                <Card className={classes.root}>
                    <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                          {t("common:architect-landing.tags")}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {item.meta?.tags && item.meta?.tags.map(tag => <span style={{marginRight: 5}}>{tag}</span>)}
                        </Typography>
                    </CardContent>
                    </div>
                </Card>
            </div>
        )}
        {item.meta?.keywords && (
            <div style={{ marginTop: 20}}>
                <Card className={classes.root}>
                    <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                          {t("common:architect-landing.keywords")}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                        {item.meta?.keywords && item.meta?.keywords.map(keyword => <span style={{marginRight: 5}}>{keyword}</span>)}
                        </Typography>
                    </CardContent>
                    </div>
                </Card>
            </div>
        )}
        {item.meta?.description && (
            <div style={{ marginTop: 20}}>
                <Card className={classes.root}>
                    <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                          {t("common:architect-landing.description")}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {item.meta?.description}
                        </Typography>
                    </CardContent>
                    </div>
                </Card>
            </div>
        )}
        {item.meta?.text && (
            <div style={{marginTop: 20}}>
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                          {t("common:architect-landing.text")}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            <div dangerouslySetInnerHTML={{__html: item.meta?.text}} />
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
            </div>
        )}
    </div>
  );
}

export default withTranslation(['architect-landing'])(ProjectInformation)