import React, { useState } from "react";
import './App.css'
import { Grid, PaletteMode, ThemeProvider } from "@mui/material";
import { TopBar } from "./components/TopBar/TopBar";
import { LeftNavigation } from "./components/LeftNavigation/LeftNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import { Error404 } from "./screens/404";
import { navigationRoutes } from "./navigationRoutes";
import { Container } from "./components/Container/Container";

const LeftNavigationWidth = 240;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = (mode: PaletteMode) => {
    if (mode === "light") {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopBar toggleTheme={toggleTheme}/>

        <Grid container>
          <Grid item sx={{ width: LeftNavigationWidth }}>
            <LeftNavigation />
          </Grid>
          <Grid item xs>
            <Routes>
              {Object.values(navigationRoutes).map((route) => (
                (['/', '/sports'].includes(route.path)) ? 
                (<Route key={route.path} path={route.path} element={route.element} />) 
                // Template for not ready pages:
                : <Route key={route.path} path={route.path} element={
                    (<Container><div>This is {route.path.slice(1,)} page</div></Container>)
                } /> 
              ))}
              <Route path={"*"} element={<Error404 />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
