import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { Link } from "react-router-dom"

export const NavBar = () => {

    const StyledToolBar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
    }))

    return (
        <>
            <AppBar position="static">
                <StyledToolBar>
                    <Link style={{textDecoration: "none", color: "black"}} to={"/"}><MenuItem>Início</MenuItem></Link>
                </StyledToolBar>
            </AppBar>
        </>
    )
}