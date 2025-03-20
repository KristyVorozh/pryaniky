import { Alert, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, updateField } from "../../store/AuthStore";
import { RootState } from "../../store/store";
import { useLogin } from "../../hooks/useAuth";
import { AlertWrapper, FormStyled, Wrapper } from "../../styled";

const Auth = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);
  const loginMutation = useLogin();
  const isErrorAuth = loginMutation.data?.error_code === 2004;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateField({ name, value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { password, email } = formData;

    loginMutation.mutate({
      username: email,
      password,
    });

    dispatch(resetForm());
  };

  return (
    <Wrapper>
      {isErrorAuth && (
        <AlertWrapper>
          <Alert severity="error">Ошибка входа</Alert>
        </AlertWrapper>
      )}

      <FormStyled onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Пароль"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          autoComplete="new-password"
          type="password"
        />
        <Button type="submit" variant="contained">
          Вход
        </Button>
      </FormStyled>
    </Wrapper>
  );
};

export default Auth;
