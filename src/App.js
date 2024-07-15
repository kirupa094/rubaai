import { Fragment } from 'react';
import './App.css';
import { Box} from '@mui/material';
import NavBar from './components/appbar/appbar';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/home_screen';
import { PathsUrls } from './utils/path_url';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Box component="main">
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path={PathsUrls.home} element={<HomeScreen />} />
        </Routes>
      </Box>

    </Fragment>
  );
}

export default App;
