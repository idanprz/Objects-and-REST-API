class Activity {
    constructor(activity, type, participants, price) {
        this.activity = activity
        this.type = type
        this.participants = participants
        this.price = price
    }

    setActivity(activity) {
        if ('string' === typeof (activity) && activity.length > 0) {
            this.activity = activity
        }
    }
    setType(type) {
        if ('string' === typeof (type) && type.length > 0) {
            this.type = type
        }
    }
    setParticipants(participants) {
        if (!isNaN(participants) && participants > 0) {
            this.participants = participants
        }
    }
    setPrice(price) {
        if (!isNaN(price) && price >= 0) {
            this.price = price
        }
    }
}