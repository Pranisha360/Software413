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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  return (
    <div className={classes.root}>
      <CssBaseline />
      <React.Fragment>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Clipped drawer
            </Typography>
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
