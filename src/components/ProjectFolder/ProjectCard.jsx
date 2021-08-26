import React from "react";

class ProjectCard extends React.Component {
  //per project developer log
  constructor(props) {
    super(props);
    this.state = {
      title: props.data.title,
      imgUrl: props.data.imgUrl,
      techStack: props.data.techStack,
      description: props.data.description,
      start: props.data.start,
      end: props.data.end,
      git: props.data.git,
      demo: props.data.demo,
    };
  }

  render() {
    return (
      <div>
        {this.state.title} <br />
        {this.state.imgUrl} <br />
        {this.state.techStack} <br />
        {this.state.description} <br />
        {this.state.start} <br />
        {this.state.end} <br />
        {this.state.git}
      </div>
    );
  }
}

export default ProjectCard;
