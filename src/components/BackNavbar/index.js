import React from "react";
import "./style.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const BackNavbar = () => {
  return (
    <nav className="sectionNav">
      <div className="items">
        <ArrowBackIosIcon />
        <h4>voltar</h4>
      </div>
    </nav>
  );
};

export default BackNavbar;
