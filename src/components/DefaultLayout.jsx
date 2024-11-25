import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";



export default function DefaultLayout() {
    return (
        <>
            <header>
                <AppHeader />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <AppFooter />
            </footer>


        </>
    )
}