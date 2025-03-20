import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { token } from "../../utils/getToken";

const MissingRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/profile");

    navigate("/");
  }, []);

  return <></>;
};

export default MissingRoute;
