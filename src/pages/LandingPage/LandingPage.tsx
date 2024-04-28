import React, { useEffect } from "react";

import DashboardPage from "../DasboardPage/DashboardPage";
import useAuth from "../../hooks/useAuth";
import LoginPage from "../../components/common/Login/LoginPage";

const LandingPage: React.FC = () => {
  const { isAuthed } = useAuth();

  return <>{isAuthed ? <DashboardPage /> : <LoginPage />}</>;
};

export default LandingPage;
