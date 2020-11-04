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
        isRead: false,
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
];


function getEmailById(emailId) {
    console.log('emailId', emailId);
    return Promise.resolve(gEmails.find(email => email.id === emailId))
}

function getEmails() {
    return Promise.resolve(gEmails)
}



export const appsusService = {
    getEmails,
    getEmailById
}