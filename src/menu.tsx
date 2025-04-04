import React from "react";

type MenuProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<"Menu"|"Skills"|"Outras">>;
};
const Menu = ({setActiveTab}:MenuProps) => {
  return (
    <>
      <div className=" h-[90vh] w-[100vw]  rotating-menu">
        <ul className="0 text-7xl text-white  translate-z-0 rotate-y-40 translate-x-30 bg-black font-main">
        <li onClick={()=>setActiveTab("Skills")}>
          <p>Skills</p>
          <p className="text-sm font-second text-right">Quae facere possum</p>
        </li>
        <li>
          <p>Projetos</p>
          <p className="text-sm font-second text-right">Quae perfeci</p>
        </li>
        <li>
          <p>Sobre mim</p>
          <p className="text-sm font-second text-right">Praeteritum meum</p>
        </li>
        <li>
          <p>Contato</p>
          <p className="text-sm font-second text-right">Ubi me invenias</p>
        </li>
        <li>
          <p>FAQ</p>
          <p className="text-sm font-second text-right">Nescire non est turpe</p>
        </li>
        </ul>
      </div>
    </>
  );
};
export default Menu;
