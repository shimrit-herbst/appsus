import { utilService } from '../../../js/services/util-service.js'

var notes = [
    _createNoteTxt('Fullstack Me Baby!'),
    _createNoteImg(
        'https://images.unsplash.com/photo-1601997719352-f2bf5db7fd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        'Me playing Mi'
    ),
    _createNoteTodo(
        'How was it:',
        [
            _createNoteTodoItem('Do that', null),
            _createNoteTodoItem('Do this', 187111111),
        ],
    )
]

function getNotes() {
    return notes;
}

function _createNoteTxt(text) {
    return {
        id: utilService.createId(),
        type: 'noteTxt',
        info: {
            text: "Fullstack Me Baby!"
        },
        isPinned: true,
    }
}

function _createNoteImg(url, title) {
    const noteImg = {
        id: utilService.createId(),
        type: "noteImg",
        info: {
            url,
            title
        },
        style: {
            backgroundColor: "#00d"
        },
        isPinned: true,
    }
    return noteImg;
}

function _createNoteTodoItem(txt, doneAt) {
    return {
        txt,
        doneAt
    };
}


function _createNoteTodo(label, items) {
    const noteTodos = {
        id: utilService.createId(),
        type: "noteTodos",
        info: {
            label,
            todos: items,
        },
        isPinned: true
    }
    return noteTodos;
}



export const keepService = {
    getNotes,
}