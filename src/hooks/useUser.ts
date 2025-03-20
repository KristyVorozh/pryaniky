import { changeUserById, createUserById, getUserList } from "../api/user";
import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { TUser, TUserResponseGet } from "../types/UserTypes";
import { token } from "../utils/getToken";
import { queryClient } from "../main";
import {
  resetForm,
  setIsChangeModal,
  setOpen,
} from "../store/ProfileModalStore";
import { useDispatch } from "react-redux";
import { Dispatch } from "react";
import { UnknownAction } from "@reduxjs/toolkit";

const closeModal = (dispatch: Dispatch<UnknownAction>) => {
  dispatch(setOpen(false));
  dispatch(setIsChangeModal(false));
  dispatch(resetForm());
  queryClient.invalidateQueries("userList" as InvalidateQueryFilters);
};

export const useUserList = () => {
  return useQuery<TUserResponseGet>({
    queryFn: () => getUserList(token),
    queryKey: [token, "userList"],
  });
};

export const useCreateUser = (body: TUser) => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: () => createUserById(body, token),
    onSuccess: (data) => {
      console.log(data);
      if (data.error_code === 0) {
        closeModal(dispatch);
      }
    },
  });
};

export const useChangeUserById = (data: TUser) => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: () => changeUserById(data, token, data.id ?? ""),
    onSuccess: (data) => {
      if (data.error_code === 0) {
        closeModal(dispatch);
      }
    },
  });
};
