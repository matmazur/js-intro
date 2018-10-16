function Person(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
}
Person.prototype.fullName = function () {
    return this.firstName + " : " + this.lastName;
}

function Student(fn, ln, id) {
    this.firstName = fn;
    this.lastName = ln;
    this.id = id;
}

Student.prototype=Person.prototype;