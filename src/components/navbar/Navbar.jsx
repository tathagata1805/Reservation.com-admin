import React, { useContext } from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          {user ? (
            user.username
          ) : (
            <div className="item">
              <img
                src="https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                alt=""
                className="avatar"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
