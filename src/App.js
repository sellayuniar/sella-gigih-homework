import './App.css';
import PageRouter from './route/PageRouter';
import {Provider} from "react-redux";
import store  from "./store";

function App() {
  return (
    <div className="App">
       <Provider store={store}>
          <PageRouter />
      </Provider>
    </div>
  );
}

export default App;
