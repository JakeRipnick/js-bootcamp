const data = {
  locations: [],
  get location() {
    return this._location
  },
  set location(val) {
    this._location = val.trim()
    this.locations.push(this._location)
  }
}

// code that uses the data object
data.location = 'New York'
data.location = '              New Jersey             '
console.log(data)