let user = {
  name : "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

console.log(user.fullName);


console.log(moment().startOf('day').fromNow());

const today = moment().startOf('day').fromNow();

const todayDate = document.querySelector('#todayDate');
todayDate.innerHTML = today;