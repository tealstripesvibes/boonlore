import { articles } from "./+data";

export { onBeforePrerenderStart };

async function onBeforePrerenderStart() {
  return Object.entries(articles).map(([key, value]) => {
    return "/articles/" + key;
  });
}
