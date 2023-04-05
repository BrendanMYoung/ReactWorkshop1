import {AppBar, Container, MenuItem, Toolbar, Typography} from "@mui/material";

import {useNavigate} from 'react-router-dom';
import {useCart} from "../Services/cartContext";

export default function Navbar(props) {
    const pages = props.pages
    const navigate = useNavigate()


    return (
        <AppBar position="static">
            <Container maxWidth ="xl">
                <Toolbar disableGutters>
                    {pages.map((page) => (
                        <MenuItem onClick={() => navigate(page.path)} key={page.name}>
                            <Typography textAlign="center">{page.name} </Typography>
                        </MenuItem>
                    ))}
                </Toolbar>
            </Container>
        </AppBar>
    )
}