import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const ACCESS_TOKEN = localStorage.getItem("accessToken");

  if (!!ACCESS_TOKEN) {
    return children;
  }

  // If there's no access token, navigate to the login page
  return <Navigate to="/login" replace />;
};

export default Private;
