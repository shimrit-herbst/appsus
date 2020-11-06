import { utilService } from '../../../js/services/util-service.js';

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;
const EMAILS_KEY = 'mail';



var gEmails = [{
        id: utilService.createId(),
        from: 'APPSUS-COP@gmail.com',
        to: 'Me@gmail.com',
        subject: 'Welcome to Appsus',
        body: 'We are very hapy to see that you have joined us! With your new APPSUS app you can say goodbay to your Gmail and Notes because now you will have the best App for all of this!',
        isRead: false,
        sentAt: Date.now() - 2.5 * YEAR_IN_MS,
        isMarked: true,
        isTrash: false,
        isSelected: false,
    },
    {
        id: utilService.createId(),
        from: 'Me@gmail.com',
        to: 'Coding-Acadmi@hotmail.com',
        subject: 'We gonna have a party!!!!!!',
        body: 'Its an invetation to the biggest party ever! Come and join us to our brand new App release. Do not forget to and early up we are saving couple of drinks for you!',
        isRead: false,
        sentAt: Date.now() - DAY_IN_MS * 3,
        isMarked: false,
        isTrash: false,
        isSelected: false,
    },
    {
        id: utilService.createId(),
        from: 'FaceBook@facebook.com',
        to: 'Me@gmail.com',
        subject: 'FaceBook remainder',
        body: 'Its been sooooo long since we have heard from you. Come and see the latest posts of your best friends and family members. We also have a nice surpeise for you! Hope to see you soon.',
        isRead: false,
        sentAt: Date.now() - 2367821,
        isMarked: false,
        isTrash: false,
        isSelected: false,
    },
    {
        id: utilService.createId(),
        from: 'D_trump@americaGotCrazy.com',
        to: 'Me@gmail.com',
        subject: 'Big Disappointment',
        body: 'After 4 years of messing with your lovely country, its time for me to say goodbay. you probably thinking what am i going to do now? well its none of your f%^#%$ business! But i can only tell you thats its involve with some programing and the college Coding Acadmi',
        isRead: false,
        sentAt: Date.now(),
        isMarked: true,
        isTrash: false,
        isSelected: false,
    },
    {
        id: utilService.createId(),
        from: 'Me@gmail.com',
        to: 'Arsenal@venger.loser',
        subject: 'Finally!',
        body: 'Its been so long for us waiting for the real change to come! Finally we can see it coming with a lot of changes and money invested on the wright places. We really hope to keep this way and maybe soon we wont be the losers everybody think we are! COME ON YOU GUNNERS!',
        isRead: false,
        sentAt: Date.now() - 221003244522,
        isMarked: false,
        isTrash: false,
        isSelected: false,
    },
    {
        id: utilService.createId(),
        from: 'Me@gmail.com',
        to: 'FaceBook@facebook.com',
        subject: 'STOP BUGGING ME!!!!!',
        body: 'Its been sooooo long since I have heard from you and frankly its soooo nice! goodbye!',
        isRead: true,
        sentAt: Date.now() - 2367821,
        isMarked: true,
        isTrash: false,
        isSelected: false,
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
            if (gEmails[emailIdx].to !== 'Me@gmail.com') return Promise.resolve(true);
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
            utilService.saveToStorage(EMAILS_KEY, gEmails)
        })
}

function countUnreadEmails() {
    var counter = 0;
    gEmails.forEach(email => {
        if (!email.isRead && email.to === 'Me@gmail.com' && !email.isTrash) counter++
    })
    return Promise.resolve(counter)
}

function filterMails(filter) {
    var checkKey = 'Me@gmail.com';
    if (filter === 'inbox') {
        return Promise.resolve(gEmails.filter(email => email.to === checkKey))
    } else return Promise.resolve(gEmails.filter(email => email.from === checkKey))
}

function toggleRead(emailId) {
    getEmailById(emailId)
        .then(email => {
            email.isRead = !email.isRead
            utilService.saveToStorage(EMAILS_KEY, gEmails)
        })

}

function toggleSelected(emailId) {
    return Promise.resolve(getEmailById(emailId)
        .then(email => {
            email.isSelected = !email.isSelected
            if (email.isSelected) return 1
            return -1
        }))
}


function markEmail(emailId) {
    getEmailById(emailId)
        .then(email => {
            if (email.to !== 'Me@gmail.com') return
            email.isMarked = !email.isMarked
            utilService.saveToStorage(EMAILS_KEY, gEmails)
        })
}

function toggleAllRead(istoggleToUnread) {
    gEmails.forEach(email => {
        if (email.isSelected) {
            email.isRead = istoggleToUnread;
        }
    });
    utilService.saveToStorage(EMAILS_KEY, gEmails)
}

function toggleAllMarked(isToggleToStar) {
    gEmails.forEach(email => {
        if (email.isSelected) {
            email.isMarked = isToggleToStar;
        }
    });
    utilService.saveToStorage(EMAILS_KEY, gEmails)
}

function removeAllToTrash() {
    gEmails.forEach(email => {
        if (email.isSelected) email.isTrash = true;
    });
    utilService.saveToStorage(EMAILS_KEY, gEmails)
    return Promise.resolve()
}


function getSelectedCounter() {
    var counter = 0;
    gEmails.forEach(email => {
        if (email.isSelected) counter++
    })
    return Promise.resolve(counter)
}

function toggleAllSelected(togggleTo, diff) {
    var counter = 0
    gEmails.forEach(email => {
        if (email.isSelected !== togggleTo && email.to === 'Me@gmail.com') {
            email.isSelected = togggleTo;
            counter += diff;
        }
    });
    return Promise.resolve(counter);
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
    markEmail,
    toggleSelected,
    toggleAllRead,
    getSelectedCounter,
    toggleAllMarked,
    removeAllToTrash,
    toggleAllSelected
}