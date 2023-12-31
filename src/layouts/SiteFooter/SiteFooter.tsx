import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import Copyright from "../../components/Copyright/Copyright"

import * as styles from "./site-footer.module.scss"
import ExternalLink from "../../components/ExternalLink";

const Footer = ({ type }: { type: string }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        {type === "developer" &&
          <>
            <ExternalLink to="https://www.linkedin.com/in/elliot-reed/">
              <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
            </ExternalLink>
            <ExternalLink to="https://github.com/ElliotReed">
              <FontAwesomeIcon icon={faGithubSquare} className={styles.icon} />
            </ExternalLink>
          </>
        }
      </div>
      <Copyright originYear="2018" holder={<a href="/">Elliot Reed</a>} />
    </footer>
  )
}

export default Footer
