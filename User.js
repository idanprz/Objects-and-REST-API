class User {
    constructor(id, name, username, email) {
        this.id = id
        this.name = name
        this.username = username
        this.email = email
    }

    setId(id) {
        if (!isNaN(id) && id > 0) {
            this.id = id
        }
    }
    setName(name) {
        if ('string' === typeof (name) && name.length > 0) {
            this.name = name
        }
    }
    setUsername(username) {
        if ('string' === typeof (username) && username.length > 0) {
            this.username = username
        }
    }
    setEmail(email) {
        if ('string' === typeof (email) && email.length > 0) {
            this.email = email
        }
    }
}