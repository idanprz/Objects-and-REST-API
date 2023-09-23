class Animal {
    constructor(common_name, color, life_expectancy, activity_time) {
        this.common_name = common_name
        this.color = color
        this.life_expectancy = life_expectancy
        this.activity_time = activity_time
    }

    setCommonName(common_name) {
        if ('string' === typeof (common_name) && common_name.length > 0) {
            this.common_name = common_name
        }
    }
    setColor(color) {
        if ('string' === typeof (color) && color.length > 0) {
            this.color = color
        }
    }
    setLifeExpectancy(life_expectancy) {
        if (!isNaN(life_expectancy) && life_expectancy > 0) {
            this.life_expectancy = life_expectancy
        }
    }
    setActivityTime(activity_time) {
        if ('string' === typeof (activity_time) && activity_time.length > 0) {
            this.activity_time = activity_time
        }
    }
}