const Engineer = require('../lib/engineer');

describe('Employee class', () => {
    describe('getName', () => {
        it('getName returns employee name', () => {
            expect(new Engineer('David', '002', 'dave@email.com').getName()).toBe('David')
        })
    })
    
    describe('getId', () => {
        it('getId returns employee id', () => {
            expect(new Engineer('David', '002', 'dave@email.com','davedevs').getId()).toBe('002')
        })    
    })

    describe('getEmail', () => {
        it('getEmail returns employee email', () => {
            expect(new Engineer('David', '002', 'dave@email.com','davedevs').getEmail()).toBe('dave@email.com')
        })    
    })
    describe('getRole', ()=> {
        it('getRole returns employee', () => {
            expect(new Engineer('David', '002', 'dave@email.com','davedevs').getRole()).toBe('Engineer')
        })
    })
    describe('getGithub', ()=> {
        it('getGithub returns github username', () => {
            expect(new Engineer('David', '002', 'dave@email.com','davedevs').getGithub()).toBe('davedevs')
        })
    })

})