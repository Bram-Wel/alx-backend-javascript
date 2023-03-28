import { uploadPhoto, createUser } from "./utils"; //eslint-disable-line

export default async function asyncUploadUser() {
  const response = { photo: null, user: null };
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    response.user = user;
    response.photo = photo;
  } catch (err) {
    /* Empty */
  }
  return response;
}
