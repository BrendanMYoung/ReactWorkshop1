import { Routes, Route } from 'react-router-dom';
import Cartpage from "./Cartpage";
import Navbar from "../Components/Navbar";
import CoffeePage from "./CoffeePage";

const pages = [
    {
        "name": "Home",
        "path": "/",
        "element":  <CoffeePage />
    },
    {
        "name": "Cart",
        "path": "/cart",
        "element":  <Cartpage />
    }
]
export default function PageRouter() {
    console.log('going')
    return (
        <>
            <Navbar pages={pages} />
            <Routes>
                    {pages.map(page => <Route
                                            key={page.name}
                                            path={page.path}
                                            element={page.element}
                    />)}

            </Routes>
        </>
    )

}