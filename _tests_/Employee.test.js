const Manager = require('../lib/manager');

describe('Employee class', () => {
    describe('getName', () => {
        it('getName returns employee name', () => {
            expect(new Manager('David', '002', 'dave@email.com', '303').getName()).toBe('David')
        })
    })
    
    describe('getId', () => {
        it('getId returns employee id', () => {
            expect(new Manager('David', '002', 'dave@email.com', '303').getId()).toBe('002')
        })    
    })

    describe('getEmail', () => {
        it('getEmail returns employee email', () => {
            expect(new Manager('David', '002', 'dave@email.com', '303').getEmail()).toBe('dave@email.com')
        })    
    })
    describe('getRole', ()=> {
        it('getRole returns employee', () => {
            expect(new Manager('David', '002', 'dave@email.com', '303').getRole()).toBe('Manager')
        })
        
    })

})