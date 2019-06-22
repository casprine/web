import React from "react";
import Head from "next/head";

// helpers
import me from "../../../config.js";

const SEO = ({
  title = "Hi - I'am Casprine",
  description = "I am frontend developer & UI designer in love with react and css",
  url = me.url
}) => {
  return (
    <Head>
      <title>{title}</title>

      <link
        rel="icon"
        type="image/png"
        href="../../../static/images/circle-dark.png"
        sizes="32x32"
      />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        href={me.url + "/static/images/circle-dark.png"}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@casprine_ix" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        href={me.url + "/static/images/circle-dark.png"}
      />
    </Head>
  );
};

export default SEO;
