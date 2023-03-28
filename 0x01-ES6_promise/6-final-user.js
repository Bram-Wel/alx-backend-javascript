import signUpUser from "./4-user-promise"; //eslint-disable-line
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const value = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  value[1].reason = `${value[1].reason.name}: ${value[1].reason.message}`;
  Object.defineProperty(value[1], 'value',
    Object.getOwnPropertyDescriptor(value[1], 'reason'));
  delete value[1].reason;
  return value;
}
