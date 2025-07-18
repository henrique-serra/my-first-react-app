const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

const listPeople = people.map((person) => <li>{person.name}</li>);
const chemistPeople = people.filter((person) => person.profession === 'chemist').map((person) => <li key={person.name}>{person.name}</li>)

function People() {
  return (
    <ul>
      {chemistPeople}
    </ul>
  )
}

export default People;