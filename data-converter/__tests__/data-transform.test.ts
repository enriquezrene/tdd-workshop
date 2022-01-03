import {calculateAge, orderDate, parseFullName} from "../data-transform";


test('Given a full name, it should return the first and last name separated', () => {
    const fullName = 'Rene Enriquez'

    const names = parseFullName(fullName)

    expect(names).toEqual({
        firstName: 'Rene',
        lastName: 'Enriquez',
    })
})

test('Juan Perez => firstName: Juan, lastName: Perez', () => {
    const fullName = 'Juan Perez'

    const names = parseFullName(fullName)

    expect(names).toEqual({
        firstName: 'Juan',
        lastName: 'Perez',
    })
})

test('should calculate the age', () => {
    const birthdayDate = '28-01-1987'

    const calculatedAge = calculateAge(birthdayDate)

    expect(calculatedAge).toBe(34)
})


test('given a day-month-year should return year-month-day', () => {
    const initialDate = '28-01-1987'

    const orderedData = orderDate(initialDate)

    expect(orderedData).toBe('1987-01-28')
})