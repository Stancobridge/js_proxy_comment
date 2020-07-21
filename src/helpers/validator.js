export const validateLength = (min,max, string = String) => {
  if(string.length > max) return false;
  if(string.length < min) return false;
  return true;
}