class MobilePhone {
    constructor(brand, model, screen_size, storage_capacity) {
        this.brand = brand
        this.model = model
        this.screen_size = screen_size
        this.storage_capacity = storage_capacity
    }

    setBrand(brand) {
        if ('string' === typeof (brand) && brand.length > 0) {
            this.brand = brand
        }
    }
    // could be both a string or a number so no validation checks
    setModel(model) {  
        this.model = model
    }
    setScreenSize(screen_size) {
        if (!isNaN(screen_size) && screen_size > 0) {
            this.screen_size = screen_size
        }
    }
    setStorageCapacity(storage_capacity) {
        if (!isNaN(storage_capacity) && storage_capacity > 0) {
            this.storage_capacity = storage_capacity
        }
    }
}