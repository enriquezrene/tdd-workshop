import moment from "moment";

export const parseFullName = (fullName: string) => {
    const fullNameSplit = fullName.split(' ')
    return {
        firstName: fullNameSplit[0],
        lastName: fullNameSplit[1],
    }
}

export const orderDate = (date: string) => {
    const originalDateSplit = date.split('-')
    return `${originalDateSplit[2]}-${originalDateSplit[1]}-${originalDateSplit[0]}`
}

export const calculateAge = (birthdayDate: string) => {
    const currentDate = new Date()
    const orderedDate = orderDate(birthdayDate)
    return moment(currentDate).diff(orderedDate, 'years')
}