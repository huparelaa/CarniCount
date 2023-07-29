export function getMinimumAndMaximumDates() {
  // Calculate the minimum and maximum date values
  const today = new Date();
  //today is the maxDate
  const maxDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];
  //minDate is 1 week before today
  const minDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 6
  )
    .toISOString()
    .split("T")[0];
  return { minDate, maxDate };
}

export function validateDate(dateString) {
  const { minDate, maxDate } = getMinimumAndMaximumDates();
  const inputDate = new Date(dateString);
  const isWithinRange =
    inputDate >= new Date(minDate) && inputDate <= new Date(maxDate);
  const isValidDate = inputDate && !isNaN(inputDate.getTime());
  return isWithinRange && isValidDate;
}

export function dateConverter(date) {
  //convert a object date to a string date
  return date.toISOString().split("T")[0];
}
