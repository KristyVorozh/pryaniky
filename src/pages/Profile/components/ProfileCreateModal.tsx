import React from "react";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setIsChangeModal } from "../../../store/ProfileModalStore";
import { Box, Button, Modal, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { titleFieldArray } from "../../../utils/getTitleTable";
import { styleModalBox } from "../../../styled";
import { updateModalField } from "../../../store/ProfileModalStore";
import { TUser } from "../../../types/UserTypes";
import moment from "moment";
import { useChangeUserById, useCreateUser } from "../../../hooks/useUser";

const ProfileCreateModal = () => {
  const dispatch = useDispatch();
  const { open, data, isChangeModal } = useSelector(
    (state: RootState) => state.modal
  );
  const changeUser = useChangeUserById(data);
  const createUser = useCreateUser(data);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateModalField({ name, value }));
  };

  const handleChangeDate = (date: string, name: string) => {
    dispatch(updateModalField({ name, value: date }));
  };

  const closeModal = () => {
    dispatch(setIsChangeModal(false));
    dispatch(resetForm());
  };

  return (
    <Modal open={open} onClose={closeModal}>
      <Box sx={styleModalBox}>
        {titleFieldArray.map((field) => {
          const { title, isDatePicker } = field;
          const { key } = field as { key: keyof TUser };

          if (isDatePicker)
            return (
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  format="DD/MM/YYYY"
                  onChange={(date) =>
                    handleChangeDate(date?.toISOString() ?? "", key)
                  }
                  value={moment(data[key])}
                  label={title}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>
            );
          return (
            <TextField
              label={title}
              onChange={handleChange}
              name={key}
              value={data[key]}
              fullWidth
            />
          );
        })}
        <Button
          onClick={() =>
            isChangeModal ? changeUser.mutate() : createUser.mutate()
          }
          variant="contained"
        >
          {isChangeModal ? "Редактировать" : "Создать"}
        </Button>
      </Box>
    </Modal>
  );
};

export default ProfileCreateModal;
