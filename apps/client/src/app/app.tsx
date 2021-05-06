import { Grid } from "@chakra-ui/react"
import styled from '@emotion/styled';
import { set, get } from 'idb-keyval';

const Browser = styled.div`
  width: 1200px;
`

const BrowserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92vh;
`;

const BrowserContainer = styled.div`
  position: relative;
  flex: 1;
`;

const BrowserContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  border: 1px solid orange;
`;

const BrowserIframe = styled.iframe`
  height: 100%;
`

async function addNavigation() {
  const components = await get("components") || [];
  const updateComponents= [...components, {
    orderId: components?.length || 1,
    elementId: 1
  }];
  await set("components", updateComponents);
  const reviewIframe = document.getElementById('review') as HTMLIFrameElement;
  reviewIframe.contentWindow.postMessage(
    {
      name: "add_component",
    },
    "*"
  );
}

async function addFooter() {
  const components = await get("components") || [];
  const updateComponents= [...components, {
    orderId: components?.length || 1,
    elementId: 2
  }];
  await set("components", updateComponents);
  const reviewIframe = document.getElementById('review') as HTMLIFrameElement;
  reviewIframe.contentWindow.postMessage(
    {
      name: "add_component",
    },
    "*"
  );
}

export function App() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <div>
        <div>
          <button type="button" onClick={addNavigation}>Add navigation</button>
        </div>
        <div>
          <button type="button" onClick={addFooter}>Add footer</button>
        </div>
      </div>
      <Browser>
        <BrowserWrapper>
          <BrowserContainer>
            <BrowserContent>
              <BrowserIframe id="review" title="review" src="/review" width="100%" frameBorder="0" />
            </BrowserContent> 
          </BrowserContainer>
        </BrowserWrapper>
      </Browser>
    </Grid>
  );
}

export default App;
