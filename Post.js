class Post {
    constructor(userId, id, title, body) {
        this.userId = userId
        this.id = id
        this.title = title
        this.body = body
    }

    setUserId(userId) {
        if (!isNaN(userId) && userId > 0) {
            this.userId = userId
        }
    }
    setId(id) {
        if (!isNaN(id) && id > 0) {
            this.id = id
        }
    }
    setTitle(title) {
        if ('string' === typeof (title) && title.length > 0) {
            this.title = title
        }
    }
    setBody(body) {
        if ('string' === typeof (body) && body.length > 0) {
            this.body = body
        }
    }
}