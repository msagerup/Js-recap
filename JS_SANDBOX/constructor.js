function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
   const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff)
  return Math.abs.(ageDate.getUTCFullYear() - 1970)
  }
}

const Magnus = new Person("Magnus", "19-05-1981")

Magnus.calculateAge();
