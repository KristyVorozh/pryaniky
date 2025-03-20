import axios from "axios";
import { AuthResponse, LoginData } from "../types/AuthTypes";

export const HOST = "https://test.v5.pryaniky.com";

export const login = async (data: LoginData): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    `${HOST}/ru/data/v3/testmethods/docs/login`,
    data
  );
  return response.data;
};
