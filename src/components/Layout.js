import { Drawer, List, ListItemText, ListItem, ListItemIcon, makeStyles, Typography, AppBar, Toolbar, Avatar } from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from "react-router";
import { format } from 'date-fns';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return{
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#434343',
            color: 'white',
            '&:hover': {
                color: 'black'
            }
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            background: '#f9f9f9',
            color: '#434343'
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow:1
        },
        avatar: {
            padding: theme.spacing(2)
        },
        user: {
            fontFamily: 'Lobster'
        }
    }
});

const menuItems = [
    {
        text: 'My Notes',
        icon: <SubjectOutlined color="secondary" />,
        path: '/'
    },
    {
        text: 'Create New Note',
        icon: <AddCircleOutlineOutlined color="secondary" />,
        path: '/create'
    }
];

const Layout = ({ children }) => {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    return ( 
        <div className={classes.root}>

            <AppBar
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date} variant="h6">
                        Today is { format(new Date(), 'do MMMM Y') }
                    </Typography>

                    <Typography className={classes.user}>
                        Megumi
                    </Typography>
                    <Avatar src="megumi.jpg" className={classes.avatar}/>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawer }}
            >
                <div>
                    <Typography 
                        variant="h5"
                        className={classes.title}    
                    >
                        Zennin Notes
                    </Typography>
                </div>

                <List>
                    { menuItems.map(element => (
                        <ListItem
                            button
                            key = { element.text }
                            onClick = {() => history.push(element.path)}
                            className = { location.pathname === element.path ? classes.active : null }
                        >
                            <ListItemIcon>{ element.icon }</ListItemIcon>
                            <ListItemText 
                                primary={ element.text } 
                            />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar} />
                { children }
            </div>
        </div>
    );
}
 
export default Layout;