import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";
import store from "redux-config/store";
import {React} from 'react';
import { Header } from 'components/header';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Container className="mt-2">
            <RouterConfig></RouterConfig>
          
        </Container>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
