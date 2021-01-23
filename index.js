class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string){
    string = string.split(' ')
    const nonCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    for(let i=0; i < string.length; i++){
      if(i === 0){
        string[i] = this.capitalize(string[i])
      } else {
        if(!(nonCap.includes(string[i]))){
          string[i] = this.capitalize(string[i])
        }
      }
    }
    return string.join(' ')
  }
}