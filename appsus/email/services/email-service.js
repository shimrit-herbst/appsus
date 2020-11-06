import { utilService } from '../../../js/services/util-service.js';

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;
const EMAILS_KEY = 'mail';



var gEmails = [{
        id: utilService.createId(),
        from: 'APPSUS COP',
        to: 'Me',
        subject: 'hellooooo Appsus',
        body: 'Getting Started with a whole new App',
        isRead: false,
        sentAt: Date.now(),
        isMarked: true,
        isTrash: false,
    },
    {
        id: utilService.createId(),
        from: 'Me',
        to: 'Coding Acadmi',
        subject: 'We gonna have a party!!!!!!',
        body: 'Its an invetation to the biggest party ever! come and join us to....',
        isRead: true,
        sentAt: Date.now() - 1003244522,
        isMarked: false,
        isTrash: false,
    },
    {
        id: utilService.createId(),
        from: 'FaceBook',
        to: 'Me',
        subject: 'FACEBOOK remainder',
        body: 'Its been sooooo long since we have heard from you....',
        isRead: false,
        sentAt: Date.now() - 2367821,
        isMarked: false,
        isTrash: false,
    },
    {
        id: utilService.createId(),
        from: 'APPSUS COP',
        to: 'Me',
        subject: 'hellooooo Appsus',
        body: 'Getting Started with a whole new App',
        isRead: false,
        sentAt: Date.now(),
        isMarked: true,
        isTrash: false,

    },
    {
        id: utilService.createId(),
        from: 'Me',
        to: 'Coding Acadmi',
        subject: 'We gonna have a party!!!!!!',
        body: 'Its an invetation to the biggest party ever! come and join us to....',
        isRead: false,
        sentAt: Date.now() - 221003244522,
        isMarked: false,
        isTrash: false,

    },
    {
        id: utilService.createId(),
        from: 'FaceBook',
        to: 'Me',
        subject: 'FACEBOOK remainder',
        body: 'Its been sooooo long since we have heard from you....',
        isRead: true,
        sentAt: Date.now() - 2367821,
        isMarked: true,
        isTrash: false,

    },
];

loadEmails()

function loadEmails() {
    if (utilService.loadFromStorage(EMAILS_KEY)) gEmails = utilService.loadFromStorage(EMAILS_KEY);
}

function getEmails() {
    return Promise.resolve(gEmails)
}

function getEmailById(emailId) {
    return Promise.resolve(gEmails.find(email => email.id === emailId))
}

function getEmailIdxById(emailId) {
    return Promise.resolve(gEmails.findIndex(email => email.id === emailId))
}


function markReadEmail(emailId) {
    return getEmailIdxById(emailId)
        .then(emailIdx => {
            if (gEmails[emailIdx].to !== 'Me') return Promise.resolve(true);
            var isReadBefore = gEmails[emailIdx].isRead;
            gEmails[emailIdx].isRead = true;
            utilService.saveToStorage(EMAILS_KEY, gEmails)
            return Promise.resolve(isReadBefore)
        })
}

function sendMail(mail) {
    gEmails.unshift(mail)
    utilService.saveToStorage(EMAILS_KEY, gEmails)
}

function removeToTrash(emailId) {
    getEmailById(emailId)
        .then(email => {
            email.isTrash = true
        })
}

function countUnreadEmails() {
    var counter = 0;
    gEmails.forEach(email => {
        if (!email.isRead && email.to === 'Me') counter++
    })
    return Promise.resolve(counter)
}

function filterMails(filter) {
    var checkKey = 'Me';
    if (filter === 'inbox') {
        return Promise.resolve(gEmails.filter(email => email.to === checkKey))
    } else return Promise.resolve(gEmails.filter(email => email.from === checkKey))
}

function toggleRead(emailId) {
    getEmailById(emailId)
        .then(email => email.isRead = !email.isRead)
}

function markEmail(emailId) {
    getEmailById(emailId)
        .then(email => {
            if (email.to !== 'Me') return
            email.isMarked = !email.isMarked
        })
}






//   **************         UTILS????

function getTimeToShow(emailTime) {
    var dateToShow = new Date(emailTime)
    if (Date.now() - emailTime < DAY_IN_MS) {
        dateToShow = moment(dateToShow, Date.now()).fromNow()
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

// **************************************



export const emailService = {
    getTimeToShow,
    getEmails,
    getEmailById,
    markReadEmail,
    countUnreadEmails,
    filterMails,
    sendMail,
    removeToTrash,
    toggleRead,
    markEmail
}