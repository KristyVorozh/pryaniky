import styled from "styled-components";

export const styleModalBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  height: "80vh",
  gap: "20px",
};

export const AlertWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 200px;
`;
