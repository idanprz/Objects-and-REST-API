class Address {
    constructor(city, zip_code, country, coordinates) {
        this.city = city
        this.zip_code = zip_code
        this.country = country
        this.coordinates = coordinates
    }

    setCity(city) {
        if ('string' === typeof (city) && city.length > 0) {
            this.city = city
        }
    }
    setZipCode(zip_code) {
        if (!isNaN(zip_code) && zip_code > 0) {
            this.zip_code = zip_code
        }
    }
    setCountry(country) {
        if ('string' === typeof (country) && country.length > 0) {
            this.country = country
        }
    }
    setCoordinates(coordinates) {
        if ('object' === typeof (coordinates)) {
            this.coordinates = `${coordinates.lat} : ${coordinates.lng}`
        }
    }
}