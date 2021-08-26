import React from "react";
import { Stack } from "@material-ui/core";
import UnityLogo from "../../assets/Favicons/Unity.svg";
import CSharpLogo from "../../assets/Favicons/CSharp.svg";
import GitLogo from "../../assets/Favicons/Git.svg";

import "../SharedFolder/FaviconBar.css"

class DailyStack extends React.Component {
  render() {
    return (
      <Stack direction="row" >
        <img className="icon" src={UnityLogo} alt="React Logo" width = "50" />
        <img className="icon" src={CSharpLogo} alt="React Logo" width = "50" />
        <img className="icon" src={GitLogo} alt="React Logo" width = "50" />
      </Stack>
    );
  }
}

export default DailyStack;
