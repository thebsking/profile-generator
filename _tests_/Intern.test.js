const Intern = require('../lib/intern');

describe('Employee class', () => {
    describe('getName', () => {
        it('getName returns employee name', () => {
            expect(new Intern('David', '002', 'dave@email.com', 'Ohio State').getName()).toBe('David')
        })
    })
    
    describe('getId', () => {
        it('getId returns employee id', () => {
            expect(new Intern('David', '002', 'dave@email.com', 'Ohio State').getId()).toBe('002')
        })    
    })

    describe('getEmail', () => {
        it('getEmail returns employee email', () => {
            expect(new Intern('David', '002', 'dave@email.com', 'Ohio State').getEmail()).toBe('dave@email.com')
        })    
    })
    describe('getRole', ()=> {
        it('getRole returns intern', () => {
            expect(new Intern('David', '002', 'dave@email.com', 'Ohio State').getRole()).toBe('Intern')
        })
    })
    describe('getSchool', ()=> {
        it('getSchool returns school', () => {
            expect(new Intern('David', '002', 'dave@email.com', 'Ohio State').getSchool()).toBe('Ohio State')
        })
    })

})