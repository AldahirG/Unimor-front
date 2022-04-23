import React from "react";
import './app.css'
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CompanyDetails from "./pages/public/companies/company-details";
import Home from "./pages/public/home";
import TopCompanies from "./pages/public/companies/top-companies";
import Profile from "./pages/user/profile";
import Login from "./pages/auth/login";
import UserForm from "./pages/auth/form";
import AdminCompanies from "./pages/admin/company/companies";

import CompanyForm from "./pages/admin/company/company-form";
import CompanyPhotos from "./pages/admin/company/company-photos";
import AdminUsers from "./pages/admin/users/users";
import FavCompanies from "./pages/user/fav-companies";
import AdminRoute from "./components/routes/admin-route";
import PublicRoute from "./components/routes/public-route";
import AuthRoute from "./components/routes/auth-route";
import UserRoute from "./components/routes/user-routes";
function App() {
    const theme = createTheme({
        palette: {
            primary:{
                main: '#345177'
            },
            secondary: {
                main: '#00AB84'
            },
            info:{
                main:'#c2c2c2'
            }
        }
    });

    return (
      <ThemeProvider theme={theme}>
              <BrowserRouter>
                  <Routes>
                      <Route element={<PublicRoute />}>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/details/:id" element={<CompanyDetails/>}/>
                          <Route path="/top-five" element={<TopCompanies/>}/>
                      </Route>
                      <Route element={<UserRoute />}>
                          <Route path="/user/profile" element={<Profile/>}/>
                          <Route path="/user/fav" element={<FavCompanies/>}/>
                      </Route>
                      <Route element={<AuthRoute />}>
                          <Route path="/login" element={<Login/>}/>
                          <Route path="/form" element={<UserForm/>}/>
                      </Route>
                      <Route element={<AdminRoute />}>
                          <Route path="/admin/companies" element={<AdminCompanies/>}/>
                          <Route path="/admin/users" element={<AdminUsers/>}/>
                          <Route path="/admin/companies/form" element={<CompanyForm/>}/>
                          <Route path="/admin/companies/edit/:id" element={<CompanyForm/>}/>
                          <Route path="/admin/companies/photos/:id" element={<CompanyPhotos/>}/>
                      </Route>
                  </Routes>
              </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;

