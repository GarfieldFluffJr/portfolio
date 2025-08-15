import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  document.title = "404 Not Found";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card p-6 rounded shadow text-center">
        404. Oops, this page was not found!
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
