const jsonString = `
{
    "people": {
        "name":"Anton",
        "age":36,
        "skills": ["Javascript","HTML","CSS"],
        "salary": 80000
    }
}
`;

const data = JSON.parse(jsonString);
const people = data.people;

const result = {
  name: people.name,
  age: people.age,
  skills: people.skills,
  salary: people.salary,
};
console.log('result', result);