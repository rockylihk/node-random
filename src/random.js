'use strict'

const crypto = require('crypto')
const Charset = require('./charset')

const number = (min = 0, max = 100) => {
  return Math.random() * (max - min) + min
}

const integer = (min = 0, max = 100) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const boolean = () => {
  return Math.random() >= 0.5
}

const bytes = (len = 16) => {
  return crypto.randomBytes(len)
}

const string = (len = 16, type = 'alphanumeric', capitalization = 'lowercase') => {
  const charset = new Charset()
  charset.setType(type)
  charset.setCapitalization(capitalization)
  charset.removeUnreadable()
  charset.removeDuplicates()
  const charsetLength = charset.chars.length
  const buffer = crypto.randomBytes(len)
  let randomString = ''
  for (let index = 0; index < buffer.length; index++) {
    randomString += charset.chars.charAt(buffer.readUInt8(index) % charsetLength)
  }
  return randomString
}

exports.number = number
exports.integer = integer
exports.boolean = boolean
exports.bytes = bytes
exports.string = string