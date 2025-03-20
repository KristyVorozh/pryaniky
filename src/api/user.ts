import axios from "axios";
import { HOST } from "./auth";
import { TUser, TUserResponseGet } from "../types/UserTypes";

export const getUserList = async (token: string): Promise<TUserResponseGet> => {
  const response = await axios.get<TUserResponseGet>(
    `${HOST}/ru/data/v3/testmethods/docs/userdocs/get`,
    {
      headers: {
        "x-auth": token,
      },
    }
  );
  return response.data;
};

export const deleteUserById = async (
  token: string,
  id: string
): Promise<TUserResponseGet> => {
  const response = await axios.post<TUserResponseGet>(
    `${HOST}/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
    {},
    {
      headers: {
        "x-auth": token,
      },
    }
  );
  return response.data;
};

export const changeUserById = async (
  body: TUser,
  token: string,
  id: string
): Promise<TUserResponseGet> => {
  const response = await axios.post<TUserResponseGet>(
    `${HOST}/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
    body,
    {
      headers: {
        "x-auth": token,
      },
    }
  );
  return response.data;
};

export const createUserById = async (
  body: TUser,
  token: string
): Promise<TUserResponseGet> => {
  const response = await axios.post<TUserResponseGet>(
    `${HOST}/ru/data/v3/testmethods/docs/userdocs/create`,
    body,
    {
      headers: {
        "x-auth": token,
      },
    }
  );
  return response.data;
};
