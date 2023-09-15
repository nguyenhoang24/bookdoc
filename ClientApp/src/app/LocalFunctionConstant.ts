import { formatDate as format } from '@angular/common';

export function formatDate(val, type: string = 'dd/MM/yyyy') {
  return val ? format(new Date(val), type, 'en-US') : ''
};

export function formatDateYear(val, type: string = 'yyyy') {
  return val ? format(new Date(val), type, 'en-US') : ''
};

export function checkIsValidDate(val: Date | number) {
  return val && !isNaN(new Date(val).getTime())
};

function convertDate(date: number | Date): Date {
  const value = new Date(date)
  return new Date(value.getFullYear(), value.getMonth(), value.getDate())
}

export function checkIsSameOrBefore(dateBefore: Date | number, dateAfter: Date | number) {
  if (checkIsValidDate(dateBefore) && checkIsValidDate(dateAfter)) {
    return convertDate(dateBefore) >= convertDate(dateAfter)
  };

  return true
};

export function checkIsSameOrAfter(dateBefore: Date | number, dateAfter: Date | number) {
  if (checkIsValidDate(dateBefore) && checkIsValidDate(dateAfter)) {
    return convertDate(dateBefore) <= convertDate(dateAfter)
  };

  return true
};

export function getQuarterStartAndEndDates() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentQuarter = Math.floor(currentMonth / 3) + 1;

  const startDate = new Date(currentYear, (currentQuarter - 1) * 3, 1);
  const endDate = new Date(currentYear, currentQuarter * 3, 0);
  return {
    startDate,
    endDate
  };
}
