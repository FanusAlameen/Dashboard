import { NavLink } from "react-router-dom";

const ReusableLi = ({icon, content, to, sidebar}) => {

  return (
    <NavLink to={to}>
    <li className="list">
        <div className="nav-button">
            {icon}
        </div>
        <p className={sidebar ? "sidebar-collapse" : "paragraph-light"}>
            {content}
        </p>
    </li>
    </NavLink>
  )
}

export default ReusableLi;