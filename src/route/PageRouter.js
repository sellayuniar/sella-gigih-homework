import {
    BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import Home from "../pages/Home/Home";
import { useSelector } from 'react-redux';
import Auth from "../pages/Login/Auth";

const PageRouter = () => {
    const accessToken = useSelector((state) => state.accessToken.value);
    return (
        <Router>
            <Switch>
                <Route path="/" component={Auth} exact />
                <Route path="/create-playlist">
                    {accessToken !== undefined ? (
                        <Home />
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>
            </Switch>
        </Router>
    )
}

export default PageRouter;