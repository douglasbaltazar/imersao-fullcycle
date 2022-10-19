import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core"
import DriverIcon from '@material-ui/icons/DriveEta'

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <DriverIcon />
                    <Typography variant="h6">Code Delivery</Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}