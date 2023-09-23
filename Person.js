class Person {
    constructor(name, age, gender, address) {
        this.name = name
        this.age = age
        this.gender = gender
        this.address = address
    }

    setName(name) {
        if ('string' === typeof (name) && name.length > 0) {
            this.name = name
        }
    }
    setAge(age) {
        if (!isNaN(age) && age > 0) {
            this.age = age
        }
    }
    setGender(gender) {
        if ('string' === typeof (gender) && gender.length > 0) {
            this.gender = gender
        }
    }
    setAddress(address) {
        if ('string' === typeof (address) && address.length > 0) {
            this.address = address
        }
    }
}