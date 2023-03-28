import signUpUser from "./4-user-promise"; //eslint-disable-line
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const value = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return value;
}
