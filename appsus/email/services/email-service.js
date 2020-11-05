const DAY_IN_MS = 24 * 60 * 60 * 1000;
const YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;

function getTimeToShow(emailTime) {
    var dateToShow = new Date(emailTime)
    if (Date.now() - emailTime < DAY_IN_MS) {
        dateToShow = dateToShow.toLocaleTimeString().substring(0, 5)
    } else if (Date.now() - emailTime < YEAR_IN_MS) {
        dateToShow = getMonthName(dateToShow.getMonth() + 1) + ' ' +
            dateToShow.getDay()
    } else dateToShow = dateToShow.toLocaleDateString()
    return dateToShow
}

function getMonthName(month) {
    switch (month) {
        case 1:
            return ('Jan')
        case 2:
            return ('Feb')
        case 3:
            return ('Mar')
        case 4:
            return ('Apr')
        case 5:
            return ('May')
        case 6:
            return ('Jun')
        case 7:
            return ('Jul')
        case 8:
            return ('Aug')
        case 9:
            return ('Sep')
        case 10:
            return ('Oct')
        case 11:
            return ('Nov')
        case 12:
            return ('Dec')
    }
}


export const emailService = {
    getTimeToShow,
}