function Person(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
}
Person.prototype.fullName = function () {
    return this.firstName + " : " + this.lastName;
}

function Student(fn, ln, id) {
    Person.call(this, fn, ln);
    this.id = id;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.fullInfo = function () {
    return this.firstName + " " + this.lastName + " id: " + this.id;
}
