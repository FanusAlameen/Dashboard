import { useState } from "react";

const ReusableLi = ({icon, content, to, sidebar}) => {

  return (
    <li className="list">
        <div className="nav-button">
            {icon}
        </div>
        <p className={sidebar ? "sidebar-collapse" : "paragraph-light"}> {/*To be hidden*/}
            {content}
        </p>
    </li>
  )
}

export default ReusableLi;