'use strict'

const random = require('../src')
const chai = require('chai')
const expect = chai.expect

describe('number()', () => {
  
  it('returns random number between 0 to 100', () => {
    const number = random.number()
    expect(number).to.be.a('number')
    expect(number).to.be.at.least(0)
    expect(number).to.be.at.most(100)
  })
  
  it('returns random number between 50 to 100', () => {
    const number = random.number(50, 100)
    expect(number).to.be.a('number')
    expect(number).to.be.at.least(50)
    expect(number).to.be.at.most(100)
  })
  
  it('returns random number between -50 to 0', () => {
    const number = random.number(-50, 0)
    expect(number).to.be.a('number')
    expect(number).to.be.at.least(-50)
    expect(number).to.be.at.most(0)
  })

})

describe('integer()', () => {
  
  it('returns random integer between 0 to 100', () => {
    const integer = random.integer()
    expect(integer).to.be.a('number')
    expect(integer % 1).to.equal(0)
    expect(integer).to.be.at.least(0)
    expect(integer).to.be.at.most(100)
  })
  
  it('returns random integer between 50 to 100', () => {
    const integer = random.integer(50, 100)
    expect(integer).to.be.a('number')
    expect(integer % 1).to.equal(0)
    expect(integer).to.be.at.least(50)
    expect(integer).to.be.at.most(100)
  })
  
  it('returns random integer between -50 to 0', () => {
    const integer = random.integer(-50, 0)
    expect(integer).to.be.a('number')
    expect(integer % 1).to.equal(0)
    expect(integer).to.be.at.least(-50)
    expect(integer).to.be.at.most(0)
  })

})

describe('boolean()', () => {
  
  it('returns a boolean', () => {
    const boolean = random.boolean()
    expect(boolean).to.be.a('boolean')
    expect(boolean).to.be.oneOf([true, false])
  })

})

describe('bytes()', () => {
  
  it('returns bytes buffer with length 16', () => {
    const bytes = random.bytes()
    expect(bytes).to.be.instanceof(Buffer)
    expect(...bytes).all.be.a('number')
    expect(bytes.length).to.equal(16)
  })

  it('returns bytes buffer with length 256', () => {
    const bytes = random.bytes(256)
    expect(bytes).to.be.instanceof(Buffer)
    expect(...bytes).all.be.a('number')
    expect(bytes.length).to.equal(256)
  })

})

describe('string()', () => {
  
  it('returns default a random alphanumeric lowercase string with length 16', () => {
    const length = 16
    const charset = '0123456789abcdefghijklmnopqrstuvwxyz'
    const string = random.string()
    expect(string).to.be.a('string')
    expect(...string).all.be.oneOf(charset.split(''))
    expect(string.length).to.equal(length)
  })

  it('returns default a random alphanumeric string with length 32', () => {
    const length = 32
    const charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const string = random.string(length, 'alphanumeric', null)
    expect(string).to.be.a('string')
    expect(...string).all.be.oneOf(charset.split(''))
    expect(string.length).to.equal(length)
  })

  it('returns default a random hex string with length 64', () => {
    const length = 64
    const charset = '0123456789abcdef'
    const string = random.string(length, 'hex', null)
    expect(string).to.be.a('string')
    expect(...string).all.be.oneOf(charset.split(''))
    expect(string.length).to.equal(length)
  })

  it('returns default a random custom string with length 16', () => {
    const length = 16
    const charset = '!@#$%^&*()_+'
    const string = random.string(length, charset, null)
    expect(string).to.be.a('string')
    expect(...string).all.be.oneOf(charset.split(''))
    expect(string.length).to.equal(length)
  })

})
