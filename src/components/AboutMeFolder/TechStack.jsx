import React from "react";
import DailyStack from "./DailyStack";
import ApplicationStack from "./ApplicationStack";
import ExperienceStack from "./ExperienceStack";

import "./TechStack.css"

//https://icons8.com/icons/set/c 50px svgs.

class TechStack extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <div className="flex-child vla">
          <h2>ABOUT ME</h2>
          <section>
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
          </section>
          </div>
        <div className="flex-child bla">
            <DailyStack/>
            <ApplicationStack/>
            <ExperienceStack/>
        </div>
        
      </div>
    )
  }
}

export default TechStack;
