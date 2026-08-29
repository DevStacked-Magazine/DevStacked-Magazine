export const siteConfig = {
  name: "devstackedmagazine",
  url: "https://devstackedmagazine.com",
  description:
    "devstackedmagazine publishes practical tech content and builds websites for individuals and businesses.",
  ogImage: "/images/home/quickit.png",
  email: "devstackedmagazine@gmail.com",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
