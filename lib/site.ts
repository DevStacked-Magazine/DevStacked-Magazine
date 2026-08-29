export const siteConfig = {
  name: "DevStacked Magazine",
  url: "https://devstackedmagazine.com",
  description:
    "DevStacked Magazine publishes practical tech content and builds websites for individuals and businesses.",
  ogImage: "/images/home/quickit.png",
  email: "devstackedmagazine@gmail.com",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
