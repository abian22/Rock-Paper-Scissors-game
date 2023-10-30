import "./application.css"
import Router from "./router/Router"
import { RouterProvider } from 'react-router-dom'
import { GameContext } from "./context/gamecontext.js"
import { ScoreContext } from "./context/scorecontext.js" 
import React, { createContext, useContext, useState } from "react";

function Application() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [punctuation, setPunctuation] = useState(0);

  return (
    <>
    <GameContext.Provider value={{ selectedItem, setSelectedItem }}>
      <ScoreContext.Provider value={{ punctuation, setPunctuation }}> 
        <RouterProvider router={Router} />
      </ScoreContext.Provider>
    </GameContext.Provider>
    </>
  );
}

export default Application;
