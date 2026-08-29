import { absoluteUrl, siteConfig } from "@/lib/site";

export default function Head() {
  const title = `About | ${siteConfig.name}`;
  const description =
    "Learn more about devstackedmagazine, the team behind the work, and the studio approach to modern web experiences.";
  const url = absoluteUrl("/about");

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteUrl(siteConfig.ogImage)} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteUrl(siteConfig.ogImage)} />
    </>
  );
}
