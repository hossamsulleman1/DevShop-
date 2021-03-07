import React, { useContext, Suspense, Spinner } from 'react';
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import App from "./App";

// CONTEXT API
import { SemProvider } from "./SemContext";



// use sem context change theme button

// lazy
const ProfilePage = React.lazy(() => import('./components/Profile/Profile')); // Lazy-loaded


ReactDOM.render(

  <SemProvider>
    <Suspense fallback={<Spinner />}>
    <App />
</Suspense>
  
    
 
  </SemProvider>,

  document.getElementById("root")
);
