import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom ";

// Layout
import { LayoutAuth } from "./layouts/LayoutAuth";
import { LayoutAdmin } from "./layouts/LayoutAdmin";

// Pages Auth
import { AuthProvider } from './context/authContext';
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgetPassword } from "./pages/auth/ForgetPassword";

// Pages Admin
import { Home } from "./pages/admin/Home";
import { Contacts } from "./pages/admin/Contacts";
import { Companies } from "./pages/admin/Companies";
import { Deals } from "./pages/admin/Deals";
import { AccountManagers } from "./pages/admin/AccountManagers";

import { Error404 } from "./pages/Error404";



function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutAuth />}>
            <Route index element={<Login/>}/>
            <Route path="registro" element={<Register/>}/>
            <Route path="forgetPass" element={<ForgetPassword/>}/>
          </Route>
          <Route path="/dashboard" element={<LayoutAdmin />}> 
            <Route index element={<Home/> }/>
            <Route path="contacts" element={<Contacts/>} />
            <Route path="companies" element={<Companies/>} />
            <Route path="deals" element={<Deals/>} />
            <Route path="accountmanagers" element={<AccountManagers/>} />
          </Route>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
