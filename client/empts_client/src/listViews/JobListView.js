import { formatDateUI, formatCurrencyUI, getCurrency } from "../api/Utils";

export function StdJobListView() {
  return [
    {
      id: "name",
      numeric: false,
      type: "text",
      disablePadding: true,
      label: "Name",
    },
    {
      id: "title",
      numeric: false,
      type: "text",
      disablePadding: true,
      label: "Title",
    },
    {
      id: "description",
      numeric: false,
      type: "text",
      disablePadding: false,
      label: "Description",
    },
    {
      id: "dateOpened",
      numeric: false,
      type: "date",
      disablePadding: false,
      label: "Date Opened",
      formatter: formatDateUI,
    },
    {
      id: "minSalary",
      numeric: true,
      type: "currency",
      disablePadding: false,
      label: "Minimum Salary",
      formatter: formatCurrencyUI,
      getter: getCurrency,
    },
    {
      id: "maxSalary",
      numeric: true,
      type: "currency",
      disablePadding: false,
      label: "Maximum Salary",
      formatter: formatCurrencyUI,
      getter: getCurrency,
    },
    {
      id: "active",
      numeric: false,
      type: "checkbox",
      disablePadding: false,
      label: "Active",
    },
  ];
}
