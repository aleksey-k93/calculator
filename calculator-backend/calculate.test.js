import calculateMagic from "./calculate";

describe('Failed outcomes processing', () => {
    test('Dividing by zero returns Infinity', () => {
        expect(calculateMagic('19/0+27')).toBe(Infinity)
    })

    test('Equation with multiple consecutive plus signs returns null', () => {
        expect(calculateMagic('2+++2+++2')).toBe(null)
    })

    test('Equation with multiple consecutive minus signs returns null', () => {
        expect(calculateMagic('2---2')).toBe(null)
    })

    test('Equation with multiple consecutive multiply signs returns null', () => {
        expect(calculateMagic('2***2')).toBe(null)
    })

    test('Equation with multiple consecutive divide signs returns null', () => {
        expect(calculateMagic('2//2')).toBe(null)
    })
})

describe('Usual simple equation solving', () => {
    test('Simple adding equation', () => {
        expect(calculateMagic('2+2')).toBe(4)
    })

    test('Simple multiplying equation', () => {
        expect(calculateMagic('2*4')).toBe(8)
    })

    test('Equation with multiple operations', () => {
        expect(calculateMagic('2+2+2-2')).toBe(4)
    })

    test('Equation with multiple operations with different priorities', () => {
        expect(calculateMagic('2+2*2')).toBe(6)
    })

    test('Equation with multiple consecutive operations with different priorities', () => {
        expect(calculateMagic('14*4+2*2*2')).toBe(64)
    })
})

describe('Quite strange equations solving', () => {
    test('Equation with two minus signs', () => {
        expect(calculateMagic('3--3')).toBe(6)
    })

    test('Equation with consecutive operations like minus signs', () => {
        expect(calculateMagic('3--3--3*-2*-2')).toBe(18)
    })

    test('Equation with minus sign at beginning', () => {
        expect(calculateMagic('-3*2*2/3')).toBe(-4)
    })
})