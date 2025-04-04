import { useState } from "react";
import "./App.css";
import Menu from "./menu";
import SkillList from "./components/skillsList";
const tabs = ["Menu", "Skills" , "Outras"] as const;
type Tab = typeof tabs[number];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("Menu");
  
  function renderSwitch(tab:String) {
    switch(tab) {
      case 'Menu':
        return <Menu setActiveTab={setActiveTab}/>;
      case 'Skills':
        return <SkillList setActiveTab={setActiveTab}/>
      default:
        return <Menu setActiveTab={setActiveTab}/>;
    }
  }
  return (<>
  {renderSwitch(activeTab)}
    </>
  );
}

export default App;
