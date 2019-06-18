import React, { Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";

const Logo = () => (
  <Fragment>
    <Fragment>
      <Link href="/">
        <StyledPicture>
          <source
            srcSet="../../../static/images/circle-dark.png"
            alt="my logo"
            type="image/png"
          />
          <source
            srcSet="../../../static/images/circle-dark.jpg"
            alt="my logo"
            type="image/jpg"
          />
          <source
            srcSet="../../../static/images/circle-dark.webp"
            alt="my logo"
            type="image/webp"
          />
          <img src="../../../static/images/circle-dark.jpg" alt="my logo" />
        </StyledPicture>
      </Link>
    </Fragment>
  </Fragment>
);

const StyledPicture = styled.picture`
  width: 35px;
  height: 35px;
  cursor: pointer;

  source,
  img {
    width: inherit;
    height: inherit;
  }
`;

export default Logo;
