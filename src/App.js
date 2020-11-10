import React from "react";
import { Grommet, Box,  } from "grommet";



const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill align="center" justify="center" background="dark-2">
        
      </Box>
  
    </Grommet>
  );
}

export default App;
