import { createBrowserRouter } from "react-router-dom";
import Header from "../layout/Header";

const routes = createBrowserRouter([{ path: "/", element: <Header /> }]);

export default routes;
