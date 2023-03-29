import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classrooms = [];
  const sizes = [19, 20, 34];
  sizes.forEach((element) => {
    classrooms.push(new ClassRoom(element));
  });
  return classrooms;
}
