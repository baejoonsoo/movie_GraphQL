export const people = [
  {
    id: 1,
    name: "jun",
    age: 18,
    gender: "male",
  },
  {
    id: 2,
    name: "pikachu",
    age: 5,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
