import { get } from 'idb-keyval';
import navigation from './app/elements/navigation.html';
import footer from './app/elements/footer.html';

interface Block {
  orderId: number
  elementId: number
}

function renderPage(components: Block[] = []) {
  let content = "<div class='container mx-auto px-4'>";
  components.forEach(c => {
    switch (c.elementId) {
      case 1:
        content += navigation;
        break;
      case 2:
        content += footer;
        break;
    }
  })
  document.getElementsByTagName('body')[0].innerHTML = `${content}</div>`;
}

window.addEventListener("message", async (event) => {
  console.log("event", event);
  if (event.data?.name === "add_component") {
    const components = await get("components");
    renderPage(components);
  }
});

get("components").then((components) => {
  renderPage(components)
});
