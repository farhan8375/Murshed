import React, { useState, useEffect } from "react";
import {
  getFromChromeStorage,
  saveToChromeStorage,
} from "../../src/utils/chromeStorage"; // Adjust this import based on your actual utility file
import LoginForm from "./login";

const SideBar = () => {

  
  debugger;
  const [state, setState] = useState(false);
  const [placement, setPlacement] = useState("LEFT");
//   const [currentActivePage, setCurrentActivePage] = useState("/login");
//   const [currentView, setCurrentView] = useState("Login");

  useEffect(() => {
    getFromChromeStorage("iframepage").then((data) => {
      setCurrentView(data || "LoginForm");
    });
  }, []);

  useEffect(() => {
    checkModeAndShow();
  }, [state]);

  const toggleSidebar = async () => {
    if (state) {
      removeSideBar();
      window.localStorage.removeItem("createMode");
    } else {
      initializeSideBar();
      window.localStorage.setItem("createMode", "true");
    }
  };

  const initializeSideBar = () => {
    const iframe = document.createElement("iframe");
    iframe.src = chrome.runtime.getURL(`/view/${currentView}`);
    iframe.id = "sidebarframe";
    iframe.className = `fixed ${
      placement === "LEFT" ? "left-0" : "right-0"
    } top-0 h-full w-64 bg-white shadow-lg`; // Tailwind classes
    document.body.appendChild(iframe);
    setState(true);
  };

  const removeSideBar = () => {
    const iframe = document.getElementById("sidebarframe");
    if (iframe) {
      iframe.remove();
    }
    setState(false);
  };

  const checkModeAndShow = async () => {
    if (window.localStorage.getItem("createMode") === "true") {
      const savedState = await getFromChromeStorage("sidebarState");
      if (savedState) {
        initializeSideBar();
      }
    }
  };

  const changePage = (page) => {
    const obj = { page };
    saveToChromeStorage(obj).then(() => {
      setCurrentView(page);
      const iframe = document.getElementById("sidebarframe");
      if (iframe) {
        iframe.src = chrome.runtime.getURL(`/view/${page}`);
      }
    });
    setCurrentActivePage(page);
  };

  return (

    <div className="flex justify-center items-center min-h-[96vh]">
    <LoginForm />
</div>


  );
};

export default SideBar;
