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
import { ProtectedRoute } from './pages/admin/ProtectedRoute';



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
          <Route path="/dashboard" element={<ProtectedRoute><LayoutAdmin /></ProtectedRoute>}> 
            <Route index element={<ProtectedRoute><Home/></ProtectedRoute> }/>
            <Route path="contacts" element={<ProtectedRoute><Contacts/></ProtectedRoute>} />
            <Route path="companies" element={<ProtectedRoute><Companies/></ProtectedRoute>} />
            <Route path="deals" element={<ProtectedRoute><Deals/></ProtectedRoute>} />
            <Route path="accountmanagers" element={<ProtectedRoute><AccountManagers/></ProtectedRoute>} />
          </Route>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
