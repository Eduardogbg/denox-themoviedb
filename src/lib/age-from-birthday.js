export default function ageFromBirthday(birthdayString) {
  const birthday = new Date(birthdayString);
  const diff = Date.now() - birthday.getTime();
  const ageDate = new Date(diff);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
