import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import '../App.css';
function Layout (){
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <footer>
                <h3></h3>
            </footer>
        </div>
    )
}

export default Layout;