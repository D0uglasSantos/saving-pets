import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const MediaSocial = () => {
  return (
    <div className="section-media-social">
      <h3 className="mb-4">Siga-nos</h3>
      <div className="row justify-content-center gap-4">
        <div className="icon-facebook">
          <FacebookIcon />
        </div>
        <div className="icon-twitter">
          <TwitterIcon />
        </div>
        <div className="icon-whatsapp">
          <WhatsAppIcon />
        </div>
        <div className="icon-instagram">
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default MediaSocial;
