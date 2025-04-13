import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Helmet } from "react-helmet";

export default function MainLayout() {
    return (
        <>
            <Helmet>
                <meta name="google-site-verification" content="03_1miTV8CcvUSQAYE2MZsYKpMe6jTyi3yGY-chvdOk" />
            </Helmet>
            <NavBar />
            <Outlet />
        </>
    );
}
