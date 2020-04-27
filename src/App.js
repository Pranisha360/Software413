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
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Firebase from 'firebase';
import config from './config';

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
    padding: theme.spacing(0),
  },
  textBox: {
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  submitButton: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
  toolbar: theme.mixins.toolbar,
}));

const styleToolbar2 = {
  background: 'white',
  color: 'black',
};

const styleToolbar3 = {
  background: 'rgba(234, 236, 238)',
  color: 'black',
};

function createData(name, VeryD, Dissatisfied, Niether, Satisfied, VeryS, NA) {
  return { name, VeryD, Dissatisfied, Niether, Satisfied, VeryS, NA };
}

const rows = [
  createData('Considering my duties and responsibilities, I am satisfied with my case compensation.', 0, 0, 0, 0, 0, 0),
  createData('I am satisfied with my benefits', 0, 0, 0, 0, 0, 0),
  createData('I am satisfied with my non-cash rewards/perks', 0, 0, 0, 0, 0, 0),
  createData('My organization pays well compared to other similar organizations in our industry.', 0, 0, 0, 0, 0, 0),
];

const rows2 = [
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

  const [selectedValue1, setSelectedValue1] = React.useState('a');
  const handleChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };

  const [selectedValue2, setSelectedValue2] = React.useState('a');
  const handleChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  const [selectedValue3, setSelectedValue3] = React.useState('a');
  const handleChange3 = (event) => {
    setSelectedValue3(event.target.value);
  };

  const [selectedValue4, setSelectedValue4] = React.useState('a');
  const handleChange4 = (event) => {
    setSelectedValue4(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedValue1);
    console.log(selectedValue2);
    console.log(selectedValue3);
    console.log(selectedValue4);
  };


  const [state, setState] = React.useState({
    survey: '',
    name: 'hai',
  });

  const handleChangeSurvey = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
        <Toolbar style={styleToolbar2}>
          <Typography edge="start" className={classes.title} variant="h6" noWrap>
            Survey Report
          </Typography>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-filled-label">
              Survey
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={state.survey}
              onChange={handleChangeSurvey}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Engagement Survey</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <Divider />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
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
        <div className={classes.toolbar} />
        <form onSubmit={handleSubmit}>
          <Typography variant="body1" className={classes.textBox} component={Paper}>
            1. Read each statement and indicate your level of agreement.
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow style={styleToolbar3}>
                  <TableCell></TableCell>
                  <TableCell align="center">Very Dissatisfied</TableCell>
                  <TableCell align="center">Dissatisfied</TableCell>
                  <TableCell align="center">Niether Agree nor Disagree</TableCell>
                  <TableCell align="center">Satisfied</TableCell>
                  <TableCell align="center">Very Satisfied</TableCell>
                  <TableCell align="center">N/A, No Opinion</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                    <TableCell component="th" scope="row">
                      Considering my duties and responsibilities, I am satisfied with my case compensation.
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue1 === 'a'}
                        onChange={handleChange1}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue1 === 'b'}
                        onChange={handleChange1}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'B' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue1 === 'c'}
                        onChange={handleChange1}
                        value="c"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'C' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue1 === 'd'}
                        onChange={handleChange1}
                        value="d"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'D' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue1 === 'e'}
                        onChange={handleChange1}
                        value="e"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'E' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue1 === 'f'}
                        onChange={handleChange1}
                        value="f"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'F' }}
                      />
                    </TableCell>
              </TableBody>
              <TableBody>
                    <TableCell component="th" scope="row">
                      I am satisfied with my benefits
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue2 === 'a'}
                        onChange={handleChange2}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue2 === 'b'}
                        onChange={handleChange2}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'B' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue2 === 'c'}
                        onChange={handleChange2}
                        value="c"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'C' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue2 === 'd'}
                        onChange={handleChange2}
                        value="d"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'D' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue2 === 'e'}
                        onChange={handleChange2}
                        value="e"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'E' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue2 === 'f'}
                        onChange={handleChange2}
                        value="f"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'F' }}
                      />
                    </TableCell>
              </TableBody>
              <TableBody>
                    <TableCell component="th" scope="row">
                      I am satisfied with my non-cash rewards/perks
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue3 === 'a'}
                        onChange={handleChange3}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue3 === 'b'}
                        onChange={handleChange3}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'B' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue3 === 'c'}
                        onChange={handleChange3}
                        value="c"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'C' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue3 === 'd'}
                        onChange={handleChange3}
                        value="d"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'D' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue3 === 'e'}
                        onChange={handleChange3}
                        value="e"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'E' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue3 === 'f'}
                        onChange={handleChange3}
                        value="f"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'F' }}
                      />
                    </TableCell>
              </TableBody>
              <TableBody>
                    <TableCell component="th" scope="row">
                      My organization pays well compared to other similar organizations in our industry.
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue4 === 'a'}
                        onChange={handleChange4}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue4 === 'b'}
                        onChange={handleChange4}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'B' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue4 === 'c'}
                        onChange={handleChange4}
                        value="c"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'C' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue4 === 'd'}
                        onChange={handleChange4}
                        value="d"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'D' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue4 === 'e'}
                        onChange={handleChange4}
                        value="e"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'E' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Radio
                        checked={selectedValue4 === 'f'}
                        onChange={handleChange4}
                        value="f"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'F' }}
                      />
                    </TableCell>
              </TableBody>
            </Table>
          </TableContainer>
          <Button type = "submit" variant="contained" color="primary" className={classes.submitButton}>
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
}
