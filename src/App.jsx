import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="menu" element={<Menu />} />
                <Route path="appointment" element={<Appointment />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );

    return <RouterProvider router={router}>App</RouterProvider>;
};
export default App;
