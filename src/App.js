import './App.css';
import { Box } from '@mui/system';

import MenuSimple from './components/MenuSimple';

function App() {
  return (
    <div className="App">
      {/* Hello\ */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <MenuSimple />

      </Box>

    </div>
  );
}

export default App;
