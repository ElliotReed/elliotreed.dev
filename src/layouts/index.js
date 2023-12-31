import React from "react";

import DeveloperLayout from "./DeveloperLayout";
import DesignLayout from "./DesignLayout";

export default function layouts({ children, pageContext }) {
  if (pageContext.layout === "design") {
    return <DesignLayout>{children}</DesignLayout>
  }

  return <DeveloperLayout>{children}</DeveloperLayout>
}
