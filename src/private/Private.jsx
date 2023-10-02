import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const ACCESS_TOKEN = localStorage.getItem("accessToken");
  // const userRole = localStorage.getItem("userRole");
  if (ACCESS_TOKEN?.length > 900) {
      return children;
  }

  // If there's no access token, navigate to the login page
  return <Navigate to="/login" replace />;
};

export default Private;
