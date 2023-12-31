import * as React from "react";

import * as styles from "./date-posted-updated.module.scss";

interface DatePostedUpdatedProps {
  date_posted: string
  date_updated?: string
}

export default function DatePostedUpdated({ date_posted, date_updated }: Readonly<DatePostedUpdatedProps>) {
  return (
    <span className={styles.datePostedUpdated}>
      Posted: {date_posted}
      {
        date_updated && (
          <span>, <em>Updated: {date_updated}</em></span>
        )
      }
    </span>
  );
}