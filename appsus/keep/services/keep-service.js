import { utilService } from '../../../js/services/util-service.js'


const STORAGE_KEY = 'notesDB'

var gNotes = [
    _createNoteTxt('Fullstack Me Baby!'),
    _createNoteImg(
        'https://images.unsplash.com/photo-1601997719352-f2bf5db7fd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        'Me playing Mi'
    ),
    _createNoteTodos(
        'How was it:',
        [
            _createNoteTodosItem('Do that', null),
            _createNoteTodosItem('Do this', 187111111),
        ],
    )
]

function getNotes() {
    return Promise.resolve(gNotes);
}

function getEmptyTextNote() {
    return {
        type: 'noteTxt',
        info: {},
        isPinned: true,
    }
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

function _createNoteTodosItem(txt, doneAt) {
    return {
        txt,
        doneAt
    };
}

function _createNoteTodos(label, items) {
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

function saveNote(note) {
    if (note.id) {
        const noteIdx = gNotes.findIndex(currNote => note.id === currNote.id);
        gNotes.splice(noteIdx, 1, note);
    } else {
        note.id = utilService.createId();
        gNotes.unshift(note);
    }
    utilService.saveToStorage(STORAGE_KEY, gNotes);
    return note;
}

function deleteNote(id) {
    const noteIdx = gNotes.findIndex(currNote => note.id === currNote.id);
    gNotes.splice(noteIdx, 1);
    utilService.saveToStorage(STORAGE_KEY, gNotes);
    return Promise.resolve('Note was successfully deleted!')

}

function getNoteById(id) {
    const note = gNotes.find(note => note.id === id)
    return Promise.resolve(note)
}


export const keepService = {
    getNotes,
    getNoteById,
    saveNote,
    deleteNote,
    getEmptyTextNote
}