import React from "react";
import Stack from "@material-ui/core/Stack";
import Item from "@material-ui/core/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faDiscord,
  faSpotify,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { Divider } from "@material-ui/core";

import "./FaviconBar.css"

//https://fontawesome.com/
//https://www.digitalocean.com/community/tutorials/creating-a-social-follow-component-in-react
class FaviconBar extends React.Component {
  render() {
    return (
      <div>
        <Stack direction="row" 
                divider={<Divider orientation="vertical" flexItem />}
               
                justifyContent= "space-evenly"
                alignItems="flex-start"
                spacing={0}>
          <Item><FontAwesomeIcon className="icon" icon={faGithub} size="2x" /></Item>
          <Item>
            <a>
              <FontAwesomeIcon className="icon" icon={faDiscord} size="2x" />
            </a>
          </Item>
          <Item>
            <a>
              <FontAwesomeIcon className="icon" icon={faSpotify} size="2x" />
            </a>
          </Item>
          <Item>
            <a>
              <FontAwesomeIcon className="icon" icon={faTwitter} size="2x" />
            </a>
          </Item>
          <Item>
            <a>
              <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
            </a>
          </Item>
          <Item>
            <a>
              <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
            </a>
          </Item>
        </Stack>
      </div>
    );
  }
}

export default FaviconBar;