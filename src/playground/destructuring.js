console.log('destructuring');

const person = {
  name: 'Chris',
  age: 29,
  location: {
    city: 'Toronto',
    temp: 5
  }
};

const{name: firstname = 'anon', age} = person;
//const name = person.name;
//const age = person.age;

console.log(`${firstname} is ${age}.`);

const{city, temp: temperature} = person.location;

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`)

}

const book = {
  title: 'Ego is the enemy',
  author: 'ryan holiday',
  publisher: {
    name: 'penguin'
  }
};

const {name: publisherName ='Self-Published'} = book.publisher;

console.log (publisherName);

//arry destructuring

const address = ['120 strathearn ave', 'richmond hill', 'toronto', 'l4b2j6'];

const [street, town, city2, postal] = address;

console.log (`You are in ${town} ${city2}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, ,mediumCost] = item;

console.log(`a medium ${itemName} costs ${mediumCost}`);
