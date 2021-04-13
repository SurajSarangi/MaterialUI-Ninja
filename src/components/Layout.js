import { Drawer, List, ListItemText, ListItem, ListItemIcon, makeStyles, Typography } from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from "react-router";

const drawerWidth = 240;

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
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
    },
];

const Layout = ({ children }) => {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    return ( 
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawer }}
            >
                <div>
                    <Typography variant="h5" align="center">
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
                { children }
            </div>
        </div>
    );
}
 
export default Layout;