import {
    BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { useSelector } from 'react-redux';

const PageRouter = () => {
    const accessToken = useSelector(state => state.dataAccessToken.value);
    return (
        <Router>
            <Switch>
                <Route path="/create-playlist">
                    {accessToken !== undefined ? (
                        <Home />
                    ) : (
                        <Redirect to="/" />
                    )}
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default PageRouter;