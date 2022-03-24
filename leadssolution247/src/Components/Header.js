import { AppBar, Toolbar,Grid } from "@material-ui/core"


function Header()
{
    return(
        
<>
<AppBar position="static">
    <Toolbar>
        <Grid container>
            <Grid item sm={6} style={{border:"1px solid black"}}>

            </Grid>
            <Grid Item sm={6} style={{border:"1px solid Red"}}>

            </Grid>
        </Grid>
    </Toolbar>
</AppBar>
</>

    )
}

export default Header