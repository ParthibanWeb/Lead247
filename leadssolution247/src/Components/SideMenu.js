import { makeStyles } from "@material-ui/core";
import react from "react";

const useStyles = makeStyles( {
    sideMenu:
{
    display:'flex',
    flexDirection:'column',
    position:'absolute',
    backgroundColor:'Brown',
    width:'15%',
    height:'100%',
    left:'0px'
}
})

function SideMenu()
{
    const classes = useStyles();
    return(
        <>
        <div className={classes.sideMenu}></div>
        </>
    )
}

export default SideMenu