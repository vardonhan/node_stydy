const obj = {
  info: {
    name: '公牛'
  },
  get name () {
    return this.info.name;
  },
  set name (val) {
    this.info.name = val
  },
}

const obj1 = Object.create(obj)
console.log(obj1.hasOwnProperty('name'))