import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";

//condition location

const Footer = () => {
  return (
    <div>
      <div className="footer-container"> 
        <div>
          {" "}
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="not-link"
          >
            {" "}
          </a>
        </div>
        <div className="footer-links">
          <div>
            <a
             className="not-link"
              href="https://github.com/Dasika-Vaishnavi/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <div>
            <a
            className="not-link"
              href="https://twitter.com/vaishnavi0x"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
          <div>
            <a
             className="not-link"
              href="https://www.linkedin.com/in/vaishnavi-dasika/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div>&#169; EthIndia 2023 | Charcha</div>
      </div>
    </div>
  );
};

export default Footer;
