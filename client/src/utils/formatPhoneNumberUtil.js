function formatPhoneNumberUtil(inputString) {
  // Remove all spaces
  const stringWithoutSpaces = inputString.replace(/\s/g, "");

  // Insert hyphens in the desired positions
  const formattedPhoneNumber = stringWithoutSpaces.replace(
    /(\d{3})(\d{3})(\d{3})/,
    "$1-$2-$3"
  );

  return `+48 ${formattedPhoneNumber}`;
}
export default formatPhoneNumberUtil;
