import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="container">
      <hr />
      <h2>XFOLIO.</h2>
      <p>
        © Designed by
        <a href="https://www.figma.com/@kartikb" target="_blank"> Kartik Bansal</a>
      </p>
      <p>
        All differences to original design can be see in{" "}
        <a
          href="https://www.figma.com/community/file/1191026033275812161/Xfolio---Portfolio-website-UI-Kit"
          target="_blank"
        >
          this link
        </a>
      </p>
    </footer>
  );
};

export default Footer;
