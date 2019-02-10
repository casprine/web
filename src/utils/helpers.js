/**
A function that returns the current section in a day
@param { Boolean }.-- returns true if it's day time and false if its night 
*/

export function day() {
  const now = new Date();
  const hour = now.getHours();
  if (hour > 4 && hour < 18) {
    return "true";
  }
  return "false";
}
