import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useUserList } from "../../../hooks/useUser";
import { TUser, TUserResponseGet } from "../../../types/UserTypes";
import { getTitleTable } from "../../../utils/getTitleTable";
import { getDateString } from "../../../utils/getDateString";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { InvalidateQueryFilters, useMutation } from "@tanstack/react-query";
import { deleteUserById } from "../../../api/user";
import { queryClient } from "../../../main";
import { useDispatch } from "react-redux";
import {
  setIsChangeModal,
  setOpen,
  updateField,
} from "../../../store/ProfileModalStore";
import { token } from "../../../utils/getToken";
const ProfileTable = () => {
  const { data } = useUserList();
  const { data: userList } = data as TUserResponseGet;
  const dispatch = useDispatch();

  const deleteUser = useMutation({
    mutationFn: (id: string) => deleteUserById(token, id),
    onSuccess: (data) => {
      if (data.error_code === 0) {
        queryClient.invalidateQueries("userList" as InvalidateQueryFilters);
      }
    },
  });

  const changeField = (user: TUser) => {
    dispatch(updateField(user));
    dispatch(setIsChangeModal(true));
    dispatch(setOpen(true));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {getTitleTable.map((item) => (
              <TableCell align="center">{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{user.documentName}</TableCell>
              <TableCell align="center">{user.documentStatus}</TableCell>
              <TableCell align="center">{user.documentType}</TableCell>
              <TableCell align="center">{user.companySignatureName}</TableCell>
              <TableCell align="center">
                {getDateString(user.companySigDate)}
              </TableCell>
              <TableCell align="center">{user.employeeNumber}</TableCell>
              <TableCell align="center">{user.employeeSignatureName}</TableCell>
              <TableCell align="center">
                {getDateString(user.employeeSigDate)}
              </TableCell>
              <TableCell
                sx={{ gap: 1, cursor: "pointer", display: "flex" }}
                align="center"
              >
                <DeleteIcon onClick={() => deleteUser.mutate(user.id ?? "")} />
                <EditIcon onClick={() => changeField(user)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProfileTable;
