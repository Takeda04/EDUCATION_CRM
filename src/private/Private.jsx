import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const ACCESS_TOKEN = localStorage.getItem("accessToken");
  const userRole = localStorage.getItem("userRole");
  if (!!ACCESS_TOKEN) {
    if (userRole === "student") {
      return <StudentContent />;
    } else if (userRole === "teacher") {
      return <TeacherContent />;
    } else if (userRole === "supervisor") {
      return children;
    }
  }

  // If there's no access token, navigate to the login page
  return <Navigate to="/login" replace />;
};

export default Private;
