import React from "react";

// Components
import { Button } from "../Button/Button";

// Constants
import { URLS_CONSTANTS } from "../../shared/constants";

// Styles
import "./header.css";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export const Header = () => (
  <header>
    <div className="wrapper">
      <div>
        <h1>María F Hernández </h1>
      </div>
      <div>
        <Button
          primary
          size="small"
          onClick={() => openInNewTab(URLS_CONSTANTS.GITHUB)}
          label="Github"
        />
        <Button
          primary
          size="small"
          onClick={() => openInNewTab(URLS_CONSTANTS.LINKEDIN)}
          label="Linkedin"
        />
        <Button
          primary
          size="small"
          onClick={() => openInNewTab(URLS_CONSTANTS.YOUTUBE)}
          label="Youtube"
        />
      </div>
    </div>
  </header>
);
