import './App.css';
// import Auth from './pages/Login/Auth';
import PageRoute from './route/PageRouter';
// import Login from './pages/Login/Login';
import {Provider} from "react-redux";
import store  from "./store";

function App() {
  return (
    <div className="App">
       <Provider store={store}>
          <PageRoute />
      </Provider>
    </div>
  );
}

export default App;
