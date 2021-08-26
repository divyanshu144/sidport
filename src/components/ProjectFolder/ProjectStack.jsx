import React from "react";
import ProjectCard from "./ProjectCard";
import allProjects from "../../assets/AllProjects.json";
import Stack from "@material-ui/core/Stack";
import Item from "@material-ui/core/ListItem";

class ProjectStack extends React.Component {
  render() {
    const myData = allProjects;

    return (
      <div>
        <h2>PROJECTS</h2>
        <Stack>
          {myData.map((data, idx) => (
            <Item>{<ProjectCard data = {data}></ProjectCard>}</Item>
          ))}
        </Stack>
      </div>
    );
  }
}

export default ProjectStack;