import * as React from "react";

import ExternalLink from "../ExternalLink";

type PhotoCreditProps = {
  link?: string
  text?: string
}

export default function PhotoCredit({ link, text }: Readonly<PhotoCreditProps>) {
  return (
    <>
      {text && (
        <span>
          <small>
            Photo Credit: <ExternalLink to={link ?? ""}>
              {text}
            </ExternalLink>
          </small>
        </span>
      )
      }
    </>
  );
}