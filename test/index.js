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