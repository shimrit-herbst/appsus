// import { utilService } from './util-service.js';

// const EMAILS_KEY = 'mail';

// var gEmails = [{
//         id: utilService.createId(),
//         from: 'APPSUS COP',
//         to: 'Me',
//         subject: 'hellooooo Appsus',
//         body: 'Getting Started with a whole new App',
//         isRead: false,
//         sentAt: Date.now(),
//         isMarked: false
//     },
//     {
//         id: utilService.createId(),
//         from: 'Me',
//         to: 'Coding Acadmi',
//         subject: 'We gonna have a party!!!!!!',
//         body: 'Its an invetation to the biggest party ever! come and join us to....',
//         isRead: true,
//         sentAt: Date.now() - 1003244522,
//         isMarked: false

//     },
//     {
//         id: utilService.createId(),
//         from: 'FaceBook',
//         to: 'Me',
//         subject: 'FACEBOOK remainder',
//         body: 'Its been sooooo long since we have heard from you....',
//         isRead: false,
//         sentAt: Date.now() - 2367821,
//         isMarked: false
//     },
//     {
//         id: utilService.createId(),
//         from: 'APPSUS COP',
//         to: 'Me',
//         subject: 'hellooooo Appsus',
//         body: 'Getting Started with a whole new App',
//         isRead: false,
//         sentAt: Date.now(),
//         isMarked: false
//     },
//     {
//         id: utilService.createId(),
//         from: 'Me',
//         to: 'Coding Acadmi',
//         subject: 'We gonna have a party!!!!!!',
//         body: 'Its an invetation to the biggest party ever! come and join us to....',
//         isRead: false,
//         sentAt: Date.now() - 221003244522,
//         isMarked: false

//     },
//     {
//         id: utilService.createId(),
//         from: 'FaceBook',
//         to: 'Me',
//         subject: 'FACEBOOK remainder',
//         body: 'Its been sooooo long since we have heard from you....',
//         isRead: true,
//         sentAt: Date.now() - 2367821,
//         isMarked: false
//     },
// ];


// function getEmailById(emailId) {
//     console.log('emailId', emailId);
//     return Promise.resolve(gEmails.find(email => email.id === emailId))
// }

// function getEmails() {
//     if (utilService.loadFromStorage(EMAILS_KEY)) gEmails = utilService.loadFromStorage(EMAILS_KEY);
//     return Promise.resolve(gEmails)
// }

// function getEmailIdxById(emailId) {
//     return Promise.resolve(gEmails.findIndex(email => email.id === emailId))
// }

// function markReadEmail(emailId) {
//     getEmailIdxById(emailId)
//         .then(emailIdx => {
//             gEmails[emailIdx].isRead = true;
//             utilService.saveToStorage(EMAILS_KEY, gEmails)
//             return Promise.resolve()
//         })
// }

// function sendMail(mail) {
//     gEmails.push(mail)
//     utilService.saveToStorage(EMAILS_KEY, gEmails)
// }

// function countUnredEmails() {
//     var counter = 0;
//     gEmails.forEach(email => {
//         // counter = email.isRead ? counter : counter++;
//         if (!email.isRead && email.to === 'Me') counter++
//     });
//     return Promise.resolve(counter)
// }

// function filterMails(filter) {
//     var checkKey = 'Me';
//     if (filter === 'inbox') {
//         return Promise.resolve(gEmails.filter(email => email.to === checkKey))
//     } else return Promise.resolve(gEmails.filter(email => email.from === checkKey))

// }



// export const appsusService = {
// getEmails,
// getEmailById,
// markReadEmail,
// countUnredEmails,
// filterMails,
// sendMail
// }