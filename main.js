function getType(data){
  return Object.prototype.toString.call(data)
}

console.log(getType(null));