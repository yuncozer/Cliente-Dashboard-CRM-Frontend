import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom ";

// Layout
import { LayoutAuth } from "./layouts/LayoutAuth";
import { LayoutAdmin } from "./layouts/LayoutAdmin";

// Context
import { AuthProvider } from './context/authContext';

// Auth
import Login from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgetPassword } from "./pages/auth/ForgetPassword";

// Admin
import { Home } from "./pages/admin/Home";
import { Contacts } from "./pages/admin/Contacts";
import { Companies } from "./pages/admin/Companies";
import { Deals } from "./pages/admin/Deals";
import { AccountManagers } from "./pages/admin/AccountManagers";
import { ProtectedRoute } from './pages/admin/ProtectedRoute';
import { RouteActiveUser } from './pages/admin/RouteActiveUser';

// 404
import { Error404 } from "./pages/Error404";


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteActiveUser><LayoutAuth /></RouteActiveUser>}>
            <Route index element={<RouteActiveUser><Login /></RouteActiveUser>} />
            <Route path="registro" element={<RouteActiveUser><Register /></RouteActiveUser>} />
            <Route path="forgetPass" element={<RouteActiveUser><ForgetPassword /></RouteActiveUser>} />
          </Route>
          <Route path="/dashboard" element={<ProtectedRoute><LayoutAdmin /></ProtectedRoute>}>
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="contacts" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
            <Route path="companies" element={<ProtectedRoute><Companies /></ProtectedRoute>} />
            <Route path="deals" element={<ProtectedRoute><Deals /></ProtectedRoute>} />
            <Route path="accountmanagers" element={<ProtectedRoute><AccountManagers /></ProtectedRoute>} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
