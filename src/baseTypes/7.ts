/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDay {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

let isWeekend: (day: WeekDay) => boolean;

isWeekend = (day) => {
  return day === WeekDay.SUNDAY || day === WeekDay.SATURDAY;
};
isWeekend(WeekDay.SUNDAY);
