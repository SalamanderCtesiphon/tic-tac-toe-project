const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  retun { name, age, sayHello};
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name);

jeff.sayHello();


