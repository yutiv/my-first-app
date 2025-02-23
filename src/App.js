import { createTheme } from '@mui/material/styles';
import SimpleBottomNavigation from "./componnents/navigateBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelloHome } from './componnents/router/home';
import { HelloChat } from './componnents/router/chat';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#1976d2',
      },
    }
  })
  return (
    <BrowserRouter>
      <SimpleBottomNavigation />
      <Routes>
        <Route path='/router/home' element={<HelloHome />}> </Route>
        <Route path='/router/chat' element={<HelloChat />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;