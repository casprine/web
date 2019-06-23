import React from "react";
import Head from "next/head";

// helpers
import me from "../../../config.js";

const SEO = ({
  title = "Hi - I'm Casprine 🇬🇭",
  description = "I am frontend developer & UI designer in love with React and CSS",
  url = me.url
}) => {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        href="../../../static/images/circle-dark.png"
        sizes="32x32"
      />

      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={me.url + "/static/images/circle-dark.png"}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={description} />
      <meta
        property="twitter:description"
        content="I am frontend developer & UI designer in love with React and CSS"
      />
      <meta
        name="twitter:image"
        href={me.url + "/static/images/circle-dark.png"}
      />
    </Head>
  );
};

export default SEO;
