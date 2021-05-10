import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

const theme = {
  variable: 'value',
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
