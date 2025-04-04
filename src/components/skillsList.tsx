import React, {useState,useEffect} from "react";
import escIcon from "../assets/icons8-esc-key-30.png"

const tabs = ["Front End", "Back End" , "Outras"] as const;

type Tab = typeof tabs[number];

const items: Record<Tab, string[]> = {
  "Front End": ["HTML","CSS","Javascript","Typescript","React","Tailwindcss","Next.js","jQuery"],
  "Back End": ["Java", "Node.Js","Spring Boot","MySql","MongoDB","Firebase","PostgreSQL"],
  "Outras": ["Github","Docker","AWS","Wordpress","Terraform"]
};

type MenuProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<"Menu"|"Skills"|"Outras">>;
};

const SkillList = ({setActiveTab}:MenuProps) => {
  const [activeSkillTab, setActiveSkillTab] = useState<Tab>("Front End");

  useEffect(()=>{
    const handleEsc = (event:KeyboardEvent) => {
      if (event.key === "Escape"){
        setActiveTab("Menu")
      }
    };

    window.addEventListener("keydown",handleEsc);
    return () => window.removeEventListener("keydown",handleEsc)
  })

  return (
    <div className="w-screen h-screen bg-gray-800 text-white rounded-lg p-4 shadow-lg flex">
      <h1 className="font-main text-[9rem] absolute -rotate-90 top-[55%] left-[81%] font-extrabold">Skills</h1>
      <div className="absolute top-3 right-4 flex gap-2 font-second bg-amber-50 text-black justify-center items-center px-2 hover:bg-red-700 hover:text-white transition-colors hover:cursor-pointer"
      onClick={()=>{setActiveTab("Menu")}}>
        <img src={escIcon} />
        <p>Voltar</p>
      </div>
      <div className="w-1/2 m-15">
        <div className="flex border-b border-gray-600 justify-evenly">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSkillTab(tab)}
              className={`px-4 py-2 font-second w-full text-2xl ${
                activeSkillTab === tab
                  ? "  text-black bg-white"
                  : "text-white"
              } hover:bg-white hover:text-black transition-colors`}
            >
              {tab}
            </button>
          ))}
        </div>
        <ul className="mt-4 text-xl font-second flex flex-col gap-0">
          {items[activeSkillTab].map((item, index) => (
            <li key={index} className="pl-10 py-3 border-amber-50 border-solid border-2 border-t-0 border-l-0 list-brush">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/4 m-15 flex flex-col gap-5 pt-5 border-2 border-gray-500 p-5">
      <img src="src/assets/ChatGPT Image Apr 3, 2025, 08_12_25 PM.png"  className="w-xl border-2"/>
      <h1 className="font-main text-6xl border-b-2 text-center">Lorem</h1>
      <p className="font-second text-2xl">Lorem lorem</p>
      </div>
    </div>
  );
}

export default SkillList;