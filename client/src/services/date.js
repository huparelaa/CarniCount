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
export function listOfAvailableDates() {
  // Get the list of available dates
  const { minDate, maxDate } = getMinimumAndMaximumDates();
  const availableDates = [];
  let currentDate = new Date(minDate);
  while (currentDate <= new Date(maxDate)) {
    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1
    );
    availableDates.push(currentDate.toISOString().split("T")[0]);
  }
  const objectDates = availableDates.map((dayMapped) => {
    const year = dayMapped.slice(0, 4);
    const month = dayMapped.slice(5, 7);
    const day = dayMapped.slice(8, 10);
    return { year, month, day };
  });//convert the string dates to object dates with year, month and day
  
  return objectDates; //return a list of dates
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
