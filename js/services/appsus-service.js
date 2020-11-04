import { utilService } from './util-service.js';

var gEmails = [{
        id: utilService.createId(),
        from: 'APPSUS COP',
        to: 'Me',
        subject: 'hellooooo Appsus',
        body: 'Getting Started with a whole new App',
        isRead: false,
        sentAt: Date.now(),
        isMarked: false
    },
    {
        id: utilService.createId(),
        from: 'Me',
        to: 'Coding Acadmi',
        subject: 'We gonna have a party!!!!!!',
        body: 'Its an invetation to the biggest party ever! come and join us to....',
        isRead: true,
        sentAt: Date.now() - 1003244522,
        isMarked: false

    },
    {
        id: utilService.createId(),
        from: 'FaceBook',
        to: 'Me',
        subject: 'FACEBOOK remainder',
        body: 'Its been sooooo long since we have heard from you....',
        isRead: false,
        sentAt: Date.now() - 2367821,
        isMarked: false
    },
    {
        id: utilService.createId(),
        from: 'APPSUS COP',
        to: 'Me',
        subject: 'hellooooo Appsus',
        body: 'Getting Started with a whole new App',
        isRead: false,
        sentAt: Date.now(),
        isMarked: false
    },
    {
        id: utilService.createId(),
        from: 'Me',
        to: 'Coding Acadmi',
        subject: 'We gonna have a party!!!!!!',
        body: 'Its an invetation to the biggest party ever! come and join us to....',
        isRead: true,
        sentAt: Date.now() - 221003244522,
        isMarked: false

    },
    {
        id: utilService.createId(),
        from: 'FaceBook',
        to: 'Me',
        subject: 'FACEBOOK remainder',
        body: 'Its been sooooo long since we have heard from you....',
        isRead: false,
        sentAt: Date.now() - 2367821,
        isMarked: false
    },
];


function getEmailById(emailId) {
    console.log('emailId', emailId);
    return Promise.resolve(gEmails.find(email => email.id === emailId))
}

function getEmails() {
    return Promise.resolve(gEmails)
}

function getEmailIdxById(emailId) {
    return Promise.resolve(gEmails.findIndex(email => email.id === emailId))
}

function markReadEmail(emailId) {
    getEmailIdxById(emailId)
        .then(emailIdx => {
            return Promise.resolve(gEmails[emailIdx].isRead = true)
        })
}

function countUnredEmails() {
    var counter = 0;
    gEmails.forEach(email => {
        console.log('email is read? ', email.isRead);
        console.log('counter? ', counter);
        // counter = email.isRead ? counter : counter++;
        if (!email.isRead) counter++
    });
    return Promise.resolve(counter)
}



export const appsusService = {
    getEmails,
    getEmailById,
    markReadEmail,
    countUnredEmails
}