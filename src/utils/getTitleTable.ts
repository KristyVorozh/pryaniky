export const getTitleTable = [
  "Имя документа",
  "Cтатус документа",
  "Тип документа",
  "Имя компании",
  "Дата подписи компании",
  "Номер сотрудника",
  "Имя сотрудника",
  "Дата подписи сотрудника",
];

export const titleFieldArray = [
  { title: "Имя документа", key: "documentName" },
  { title: "Cтатус документа", key: "documentStatus" },
  { title: "Тип документа", key: "documentType" },
  { title: "Имя компании", key: "companySignatureName" },
  { title: "Дата подписи компании", key: "companySigDate", isDatePicker: true },
  { title: "Номер сотрудника", key: "employeeNumber" },
  { title: "Имя сотрудника", key: "employeeSignatureName" },
  {
    title: "Дата подписи сотрудника",
    key: "employeeSigDate",
    isDatePicker: true,
  },
];
