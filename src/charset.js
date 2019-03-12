const arrayUniq = require('array-uniq')

class Charset {

  constructor() {
    this.chars = ''
  }

  setType(type) {
    const numeric = '0123456789'
    const alphabeticLowercase = 'abcdefghijklmnopqrstuvwxyz'
    const alphabeticUppercase = alphabeticLowercase.toUpperCase()
    const hex = 'abcdef'

    this.chars =
      type === 'alphanumeric' ? numeric + alphabeticLowercase + alphabeticUppercase :
      type === 'alphabetic' ? alphabeticLowercase + alphabeticUppercase :
      type === 'numeric' ? numeric :
      type === 'hex' ? numeric + hex : type
  }

  setCapitalization(capitalization) {
    this.chars = 
      capitalization === 'uppercase' ? this.chars.toUpperCase() : 
      capitalization === 'lowercase' ? this.chars.toLowerCase() : this.chars
  }

  removeUnreadable() {
    this.chars = this.chars.replace(/[^\x00-\x7f]/g, '')
  }

  removeDuplicates() {
    let charArray = this.chars.split('')
    charArray = arrayUniq(charArray)
    this.chars = charArray.join('')
  }

}

module.exports = exports = Charset