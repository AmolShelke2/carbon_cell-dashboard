import React from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex bg-[#181822] gap-6 md:gap-0">
      <div className="h-auto md:h-[100vh] px-0">
        <Sidebar />
      </div>

      <div className="h-[100vh] overflow-auto flex-2 px-4 md:px-4 pt-3">
        <MainContent />
      </div>
    </div>
  );
};

export default App;
