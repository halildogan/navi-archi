import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useText } from '../../theme/common';
import useStyles from './cards-style';
import ProjectCard from './Project';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

export default function General(props) {
  const classes = useStyles();
  const theme = useTheme();
  const text = useText();
  const {
    img,
    title,
    desc
  } = props;


  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [value, setValue] = React.useState(0);
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const renderContext = () => {
    return (
      
        <div style={{
          width: "600px",
          overflow: "hidden",
        }}>
          <header >
            <div className="MuiTabs-root jss841">
                <div className="MuiTabs-scroller MuiTabs-fixed" style={{
                  overflow: "hidden"}}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="fullWidth"
                      aria-label="action tabs example"
                    >
                      <Tab label="Detail" {...a11yProps(0)} />
                      <Tab label="Information" {...a11yProps(1)} />
                    </Tabs>
                </div>
            </div>
          </header>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <ProjectCard />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
          </SwipeableViews>
        </div>
    )
  }

  return (
    <Paper className={classes.generalCard}>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <Paper className={classes.desc}>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography className={text.paragraph}>
          {desc}
        </Typography>
        <Button onClick={toggleDrawer("right", true)} className={classes.button} color="secondary" size="small" variant="contained">
          See Detail
        </Button>
      </Paper>
      <div style={{
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'saturate(180%) blur(20px)',
      }} >
        <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
        {
          renderContext()
        }
        </Drawer>
      </div>
    </Paper>
  );
}

General.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
