import { utilService } from '../../../js/services/util-service.js'


const STORAGE_KEY = 'notesDB'

var gNotes = [
    _createNoteTxt('Fullstack Me Baby!'),
    _createNoteImg(
        'https://images.unsplash.com/photo-1601997719352-f2bf5db7fd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        'Me playing Mi'
    ),
    _createNoteTodos(
        'Do that, Do this'
    )
]

function getNotes() {
    gNotes = utilService.loadFromStorage(STORAGE_KEY) ? utilService.loadFromStorage(STORAGE_KEY) : gNotes;
    utilService.saveToStorage(STORAGE_KEY, gNotes);
    return Promise.resolve(gNotes);
}

function getEmptyTextNote() {
    return {
        type: 'noteTxt',
        info: {},
        isPinned: true,
    }
}

function _createNoteTxt(txt, title = 'My note') {
    return {
        id: utilService.createId(),
        type: 'noteTxt',
        info: {
            txt,
            title,
        },
        style: {
            backgroundColor: "#add8e6"
        },
        isPinned: true,
    }
}

function _createNoteImg(url, title = 'My image') {
    const noteImg = {
        id: utilService.createId(),
        type: "noteImg",
        info: {
            title,
            url
        },
        style: {
            backgroundColor: "#f08080"
        },
        isPinned: true,
    }
    return noteImg;
}

function _createNoteTodos(todos, title = 'My Todos') {
    todos = todos.split(',').map(todoText => {
        return {
            txt: todoText,
            isDone: false,
            doneAt: null,
        }
    })
    const noteTodos = {
        id: utilService.createId(),
        type: "noteTodos",
        info: {
            title,
            todos,
        },
        style: {
            backgroundColor: "#ffb6c1"
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
        if (note.type === 'noteTxt') note = _createNoteTxt(note.info.txt);
        if (note.type === 'noteImg') note = _createNoteImg(note.info.url);
        if (note.type === 'noteTodos') note = _createNoteTodos(note.info.todos);
        gNotes.unshift(note);
    }
    utilService.saveToStorage(STORAGE_KEY, gNotes);
    return note;
}

function removeNote(noteId) {
    const noteIdx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(noteIdx, 1);
    utilService.saveToStorage(STORAGE_KEY, gNotes);
    return Promise.resolve();

}

function getNoteById(id) {
    const note = gNotes.find(note => note.id === id)
    return Promise.resolve(note)
}


export const keepService = {
    getNotes,
    getNoteById,
    saveNote,
    removeNote,
    getEmptyTextNote
}