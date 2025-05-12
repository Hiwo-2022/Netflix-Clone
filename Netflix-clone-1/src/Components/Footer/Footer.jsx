import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_socials">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
      </div>
      <div className="footer_links_group">
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Legal Notices</li>
          <li>Do Not Sell or Share My Personal Information</li>
        </ul>
        <ul>
          <li>Gift Cards</li>
          <li>Netflix Shop</li>
          <li>Cookie Preferences</li>
          <li>Ad Choices</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <button className="footer_service_code">Service Code</button>
      <p className="footer_copyright">© 1997-2025 Netflix, Inc.</p>
    </div>
  );
}

export default Footer;
