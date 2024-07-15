import { Fragment } from 'react';
import './App.css';
import { Box } from '@mui/material';
import NavBar from './components/appbar/appbar';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/home_screen';
import { PathsUrls } from './utils/path_url';
import AboutUsScreen from './screens/about_us_screen';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Box component="main">
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path={PathsUrls.home} element={<HomeScreen />} />
          <Route path={PathsUrls.about} element={<AboutUsScreen />} />
        </Routes>
      </Box>

    </Fragment>
  );
}

export default App;
