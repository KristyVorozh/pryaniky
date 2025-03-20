export type TUser = {
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
  id?: string;
};
export type TUserResponseGet = {
  data: TUser[];
  error_code: number;
};
