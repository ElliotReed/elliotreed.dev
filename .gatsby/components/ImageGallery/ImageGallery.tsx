import * as React from "react";

import * as styles from "./image-gallery.module.scss";

interface ImageProps {
  src: string
  alt: string
}

interface ImageGalleryProps { children: [] }

export default function ImageGallery({ children }: Readonly<ImageGalleryProps>) {
  return (
    <ul className={styles.imageGallery}>
      {React.Children.map(children, child => {
        return (
          <li key={child} className={styles.image}>
            {child}
          </li>
        )
      }
      )}
    </ul>
  );
}