import { useEffect } from "react";
import { useUserList } from "../../hooks/useUser";
import { Button, CircularProgress } from "@mui/material";
import ProfileTable from "./components/ProfileTable";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOpen } from "../../store/ProfileModalStore";
import ProfileCreateModal from "./components/ProfileCreateModal";
import { token } from "../../utils/getToken";

const Profile = () => {
  const dispatch = useDispatch();
  const { isLoading } = useUserList();
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    if (!token) navigate("/");
  }, [token]);

  if (isLoading) return <CircularProgress />;
  return (
    <Wrapper>
      <ProfileCreateModal />
      <Button onClick={signOut} variant="contained">
        Выход
      </Button>
      <ProfileTable />
      <Button onClick={() => dispatch(setOpen(true))} variant="contained">
        Добавить запись
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
`;
export default Profile;
