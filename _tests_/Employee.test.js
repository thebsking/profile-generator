const Employee = require('../lib/employee');

describe('Employee class', () => {
    describe('getName', () => {
        it('getName returns employee name', () => {
            expect(new Employee('David', '002', 'dave@email.com').getName()).toBe('David')
        })
    })
    
    describe('getId', () => {
        it('getId returns employee id', () => {
            expect(new Employee('David', '002', 'dave@email.com').getId()).toBe('002')
        })    
    })

    describe('getEmail', () => {
        it('getEmail returns employee email', () => {
            expect(new Employee('David', '002', 'dave@email.com').getEmail()).toBe('dave@email.com')
        })    
    })
    describe('getRole', ()=> {
        it('getRole returns employee', () => {
            expect(new Employee('David', '002', 'dave@email.com').getRole()).toBe('Employee')
        })
    })

})