"use client";

import { createContext, useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SidebarContent from "./SidebarContent";
import TopBar from "../TopBar";

const SidebarContext = createContext({});

const IsSidebar = ({ children }) => {
  const [sidebarRTL, setSidebarRTL] = useState(false);
  const [sidebarBackgroundColor, setSidebarBackgroundColor] =
    useState(undefined);
  const [sidebarImage, setSidebarImage] = useState(undefined);

  return (
    // <ProSidebarProvider>
    //     <SidebarContext.Provider
    //         value={{
    //             sidebarBackgroundColor,
    //             setSidebarBackgroundColor,

    //             sidebarImage,
    //             setSidebarImage,

    //             sidebarRTL,
    //             setSidebarRTL,
    //         }}
    //     >
    <div className="flex">
      <SidebarContent />
      <div className="flex-auto">
        <div
          className="bg-gray-100"
          style={{
            minHeight: "calc(100vh)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TopBar />
          <div className="p-4 flex-auto" style={{ overflowY: "auto" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
    //     </SidebarContext.Provider >
    // </ProSidebarProvider>
  );
};

export default IsSidebar;
