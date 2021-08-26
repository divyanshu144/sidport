import React from "react";
import { Stack } from "@material-ui/core";

import VSCodeLogo from "../../assets/Favicons/VSCode.svg";
import KrakenLogo from "../../assets/Favicons/Kraken.svg";
import GithubLogo from "../../assets/Favicons/Github.svg";

class ApplicationStack extends React.Component {
  render() {
    return (
      <div>
        <section> What I use daily:</section>
        <Stack direction="row">
          <img src={VSCodeLogo} alt="React Logo" width = "50" />
          <img src={GithubLogo} alt="React Logo" width = "50" />
          <img src={KrakenLogo} alt="React Logo" width = "50" />
          <img src={KrakenLogo} alt="RIDER Logo" width = "50" />
        </Stack>
      </div>
    );
  }
}

export default ApplicationStack;
