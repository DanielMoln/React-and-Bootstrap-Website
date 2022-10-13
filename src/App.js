import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MyForm from "./components/MyForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyAccordion from './components/MyAccordion';
import MyNavbar from './components/MyNavbar';
import Products from './pages/Products';
import Users from './pages/Users';
import Files from './pages/Files';
import Error from './pages/Error';
import Home from './pages/Home';

class App extends Component {
  state = {
    menus: [
            {
                name: 'Home',
                url: '/'
            },
            {
                name: 'Products',
                url: '/products'
            },
            {
                name: 'Users',
                url: '/users'
            },
            {
                name: 'Files',
                url: '/files'
            }
        ] 
  }

  render() { 
    return (
      <React.Fragment>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home menus={this.state.menus} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
            <Route path="/files" element={<Files />} />
            <Route path="/*" element={<Error  />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
