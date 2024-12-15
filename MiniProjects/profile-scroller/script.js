const people = [
  {
    name: 'Jamie Williams',
    age: 26,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/1.jpg',
    looking: 'House',
  },
  {
    name: 'John Smith',
    age: 35,
    gender: 'male',
    location: 'New York, NY',
    imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    looking: 'Flat',
  },
  {
    name: 'Bob Johnson',
    age: 42,
    gender: 'male',
    location: 'Chicago, IL',
    imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    looking: 'Tent',
  },
  {
    name: 'Shannon Jackson',
    age: 29,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    looking: 'Loft',
  },
];

const container = document.querySelector('.container');
const img = document.querySelector('img');
const profileInfo = document.querySelector('.profile-info');
const nextBtn = document.querySelector('#next');

function* createPeopleIterator() {
  let index = 0;

  while (true) {
    yield people[index++ % people.length];
  }
}

const iterator = createPeopleIterator();

nextBtn.addEventListener('click', () => {
  const person = iterator.next().value;

  img.src = person.imageURL;
  profileInfo.querySelector('h3').textContent = person.name;
  profileInfo.querySelectorAll('p')[0].textContent = `${person.age} years old`;
  profileInfo.querySelectorAll('p')[1].textContent = `From ${person.location}`;
  profileInfo.querySelectorAll(
    'p'
  )[2].textContent = `Looking for ${person.looking}`;
});
