import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from "react-typed";
import avatar from "../Images/avatar.png";


//CSS Styling

const useStyles = makeStyles(theme=> ({
    avatar: {
        color:"#291C8F",
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(15)
    },
    title: {
        color:"#291C8F",
        marginBottom: "1rem"
    },
    subtitle: {
        color: "#02EE35",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="David T Ready" />
            </Grid>
            <Typography className={classes.title} variant="h2">
                <Typed strings={["David T. Ready"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h3">
                <Typed 
                strings={["Web Design", "Web Development", "MERN Stack"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </Typography>
        </Box>
    );
};

export default Header;
