import { firebaseTimesStampType } from '../types/utils-types';

export const firestoreTimestampToDate = (
  timestamp: firebaseTimesStampType,
): Date => {
  const milliseconds =
    timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000);
  return new Date(milliseconds);
};

export const hasDatePassed = (date: firebaseTimesStampType) => {
  const dateF = firestoreTimestampToDate(date);
  const today = new Date();
  return dateF < today;
};

export const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const dayString = day < 10 ? day.toString().padStart(2, '0') : day;
  const monthString = month < 10 ? month.toString().padStart(2, '0') : month;
  return `${dayString}/${monthString}`;
};

export const toggleDateToJson = (date: Date) => {
  if (!(date instanceof Date))
    throw new Error('This method supports only Date');
  return date.toJSON();
};

export const toggleJsonToDate = (date: string) => {
  if (!(typeof date == 'string'))
    throw new Error('This method supports only string');
  return new Date(date);
};

export const getWeekOfMonth = (date: Date): number => {
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const startDayOfWeek = startOfMonth.getDay();
  const currentDayOfMonth = date.getDate();
  return Math.ceil((currentDayOfMonth + startDayOfWeek) / 7);
};
