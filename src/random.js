'use strict'

const number = (min = 0, max = 100) => {
  return Math.random() * (max - min) + min
}

const integer = (min = 0, max = 100) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

exports.number = number
exports.integer = integer