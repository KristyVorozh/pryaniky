import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.data) {
        const {
          data: { token },
        } = data;

        localStorage.setItem("token", token);
        navigate("/profile");
      }
    },
    onError: (error) => {
      console.error("Ошибка авторизации:", error);
    },
  });
};
