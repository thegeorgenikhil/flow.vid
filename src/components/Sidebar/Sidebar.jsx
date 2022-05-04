import React from "react";
import "./Sidebar.css";
import {
  MdHome,
  MdOutlinePlaylistPlay,
  MdOutlineAccessTime,
  MdHistory,
  MdThumbUp,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const SidebarTab = ({ name, icon, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "sidebar-link sidebar-link-active" : "sidebar-link"
      }
    >
      {icon}
      <p className="sidebar-link-name">{name}</p>
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <SidebarTab name={"Home"} icon={<MdHome />} to={"/"} />
      <SidebarTab
        name={"Watch Later"}
        icon={<MdOutlineAccessTime />}
        to={"/watch"}
      />
      <SidebarTab
        name={"Playlist"}
        icon={<MdOutlinePlaylistPlay />}
        to={"/playlist"}
      />
      <SidebarTab name={"Liked"} icon={<MdThumbUp />} to={"/likes"} />
      <SidebarTab name={"History"} icon={<MdHistory />} to={"/history"} />
    </aside>
  );
};

export default Sidebar;
