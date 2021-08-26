import React from "react";
import { Stack } from "@material-ui/core";

import AWSLogo from "../../assets/Favicons/AWS.svg";
import BlenderLogo from "../../assets/Favicons/Blender.svg";
import CppLogo from "../../assets/Favicons/Cpp.svg";
import DockerLogo from "../../assets/Favicons/Docker.svg";
import JavaLogo from "../../assets/Favicons/Java.svg";
import NPMLogo from "../../assets/Favicons/NPM.svg";
import PythonLogo from "../../assets/Favicons/Python.svg";
import ReactLogo from "../../assets/Favicons/React.svg";
import UnrealLogo from "../../assets/Favicons/Unreal.svg";
import CLogo from "../../assets/Favicons/C.svg";

import "../SharedFolder/FaviconBar.css"

class ExperienceStack extends React.Component {
  render() {
    return (
      <div>
        <section>What I have experience with</section>
        <Stack direction="row">
        <img className="icon" src={AWSLogo} alt="React Logo" width = "50" />
        <img className="icon" src={BlenderLogo} alt="React Logo" width = "50" />
        <img className="icon" src={CppLogo} alt="React Logo" width = "50" />
        <img className="icon" src={DockerLogo} alt="React Logo" width = "50" />
        <img className="icon" src={JavaLogo} alt="React Logo" width = "50" />
        <img className="icon" src={NPMLogo} alt="React Logo" width = "50" />
        <img className="icon" src={PythonLogo} alt="React Logo" width = "50" />
        <img className="icon" src={ReactLogo} alt="React Logo" width = "50" />
        <img className="icon" src={UnrealLogo} alt="React Logo" width = "50" />
        <img className="icon" src={CLogo} alt="React Logo" width = "50" />
      </Stack>
      </div>
    );
  }
}

export default ExperienceStack;