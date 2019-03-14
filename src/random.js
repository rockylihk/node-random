'use strict'

const crypto = require('crypto')
const uuidv4 = require('uuid/v4')
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

const uuid = () => {
  return uuidv4()
}

const date = (min = new Date(0), max = new Date(2147483647000)) => {
  const randomValue = crypto.randomBytes(1)[0] / 0xff
  const minTimestamp = min.getTime()
  const maxTimestamp = max.getTime()
  return new Date(minTimestamp + randomValue * (maxTimestamp - minTimestamp))
}

exports.number = number
exports.integer = integer
exports.boolean = boolean
exports.bytes = bytes
exports.string = string
exports.uuid = uuid
exports.date = date