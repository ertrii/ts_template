import sum from '../src/sum'

describe('Sum', () => {
    it('get result', () => {
        expect(sum(15)).toBe(30)
    })
})
