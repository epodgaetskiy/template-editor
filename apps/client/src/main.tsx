import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
