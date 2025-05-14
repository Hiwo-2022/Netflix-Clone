import React, { useEffect, useRef } from "react";
import "./Header.css";
import NetflixLogo from "../../assets/Images/NetflixLogo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const headerRef = useRef(null);
  const scrollTimeout = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector(".banner");
      if (!banner || !headerRef.current) return;

      const bannerRect = banner.getBoundingClientRect();

      // If banner is visible
      if (bannerRect.bottom > 0) {
        // Show header background while scrolling
        headerRef.current.classList.remove("transparent");
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          // If still in banner after scrolling stops, hide background
          if (banner.getBoundingClientRect().bottom > 0) {
            headerRef.current.classList.add("transparent");
          }
        }, 400); // 400ms after scrolling stops
      } else {
        // If banner is not visible, always show header background
        headerRef.current.classList.remove("transparent");
        clearTimeout(scrollTimeout.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div ref={headerRef} className="header_outer_container transparent">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Games</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
