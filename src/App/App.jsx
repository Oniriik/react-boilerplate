import { GlobalStyles } from '../Styles';
import { Routes } from '../Routes';

import * as Styled from './styled';

export const App = () => {
  return (
    <Styled.App className="App">
      <GlobalStyles />
      <Routes />
    </Styled.App>
  );
};
