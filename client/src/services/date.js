export function getMinimumAndMaximumDates() {
  // Calculate the minimum and maximum date values
  const today = new Date();
  const maxDate = today.toISOString().split("T")[0];
  const minDate = new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000) //You can register till 7 previous days
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
