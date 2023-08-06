import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from '@styles/theme';
import { GlobalStyle } from '@styles/global';
import AppRoutes from '@routes/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
