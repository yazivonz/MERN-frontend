import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider
import { useMode } from "./theme"; // Adjust the path to your theme file

const Root = () => {
  const [theme] = useMode(); // Get the theme and color mode
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root /> {/* Use Root component to wrap App with ThemeProvider */}
  </React.StrictMode>
);
