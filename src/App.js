import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  offset: theme.mixins.toolbar,
}));

function createData(name, VeryD, Dissatisfied, Niether, Satisfied, VeryS, NA) {
  return { name, VeryD, Dissatisfied, Niether, Satisfied, VeryS, NA };
}

const rows = [
  createData('Considering my duties and responsibilities, I am satisfied with my case compensation.', 0, 0, 0, 0, 0, 0),
  createData('I am satisfied with my benefits', 0, 0, 0, 0, 0, 0),
  createData('I am satisfied with my non-cash rewards/perks', 0, 0, 0, 0, 0, 0),
  createData('My organization pays well compared to other similar organizations in our industry.', 0, 0, 0, 0, 0, 0),
];

export default function ClippedDrawer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <React.Fragment>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Tabs value={value} onChange={handleChange} className={classes.title} color="inherit" aria-label="simple tabs example">
              <Tab label="Dashboard" {...a11yProps(0)} />
              <Tab label="Reports" {...a11yProps(1)} />
              <Tab label="Feedback" {...a11yProps(2)} />
            </Tabs>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="LanguageRounded">
              <LanguageRoundedIcon />
            </IconButton>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="AccountCircleRounded">
              <AccountCircleRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />
      </React.Fragment>
      <Divider />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Job Satisfaction', 'Compensation', 'Work Enviornment', 'Performance Feedback', 'Professional Growth',
          'Work/Life Balance', 'Information and Communication', 'Teamwork', 'Innovation', 'Customer Focus',
          'Immediate Management', 'Executive Leadership', 'Organizational Vision', 'Safety', 'Engagement',
          'Final Message',].map((text, index) => (
            <ListItem button key={text}>

              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          1. Read each statement and indicate your level of agreement.
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Very Dissatisfied</TableCell>
                <TableCell align="right">Dissatisfied</TableCell>
                <TableCell align="right">Niether Agree nor Disagree</TableCell>
                <TableCell align="right">Satisfied</TableCell>
                <TableCell align="right">Very Satisfied</TableCell>
                <TableCell align="right">N/A, No Opinion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.VeryD}</TableCell>
                  <TableCell align="right">{row.Dissatisfied}</TableCell>
                  <TableCell align="right">{row.Niether}</TableCell>
                  <TableCell align="right">{row.Satisfied}</TableCell>
                  <TableCell align="right">{row.VeryS}</TableCell>
                  <TableCell align="right">{row.NA}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography paragraph>
          2. Please select the theme(s) that best describe(s) the comment you made above.
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Fewest</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">Most</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.VeryD}</TableCell>
                  <TableCell align="right">{row.Dissatisfied}</TableCell>
                  <TableCell align="right">{row.Niether}</TableCell>
                  <TableCell align="right">{row.Satisfied}</TableCell>
                  <TableCell align="right">{row.VeryS}</TableCell>
                  <TableCell align="right">{row.NA}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </div>
  );
}
