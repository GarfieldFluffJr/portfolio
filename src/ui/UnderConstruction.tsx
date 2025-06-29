import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card p-6 rounded shadow">
        Page is currently under construction!!
      </div>
      <div>
        <NavLink to="/" className="big-black-button">
          <FiArrowLeft size={16} />
          <span>Back to Home Page</span>
        </NavLink>
      </div>
    </div>
  );
}
