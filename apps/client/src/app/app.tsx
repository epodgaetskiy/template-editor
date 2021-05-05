import styled from '@emotion/styled';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <div>Hello</div>
      <div style={ {width: "800px"}}>
      <iframe title="review" src="/review" width="100%" />
      </div>
      
    </StyledApp>
  );
}

export default App;
