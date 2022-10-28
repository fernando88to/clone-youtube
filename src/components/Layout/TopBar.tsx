import {AppBar, styled, Toolbar} from "@mui/material";
import theme from "../../config/theme";


const AppBarCustomize = styled(AppBar)({
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default

}) as typeof AppBar;


function TopBar() {

    return (
        <AppBarCustomize color="default">
            <Toolbar>
                <p>oi</p>
            </Toolbar>
        </AppBarCustomize>
    );
}

export default TopBar;