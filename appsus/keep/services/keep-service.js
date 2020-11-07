import { utilService } from '../../../js/services/util-service.js'


const STORAGE_KEY = 'notesDB'

var gNotes = [
    _createNoteImg(
        'https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png?w=590&h=800&756A88D1-C0EA-4C21-92BE0BB43C14B265',
        'Welcome 🥰'
    ),
    _createNoteTxt('If you can dream it, you can do it!'),
    _createNoteImg(
        'https://images.unsplash.com/photo-1601997719352-f2bf5db7fd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        'Me playing Mi'
    ),
    _createNoteImg(
        'https://miro.medium.com/max/700/0*PLCqmNStib2H47iv', 'Winter Vibes'
    ),
    _createNoteTxt('Always look on the bright side of life 😄'),
    _createNoteImg(
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg',
        'Cute Vibes'
    ),
    _createNoteTodos(
        'Buy suger, Go for a walk, Buy new fridge, Plan this weekend\'s hike'
    ),
    _createNoteImg(
        'https://greenglobaltravel.com/wp-content/uploads/Diatoy-Island-Hopping.jpg',
        'I do a thing called what I want!'
    ),
    _createNoteTodos(
        'Edit article, Brainstorm design ideas, Find new theme for website'
    ),
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

function _createNoteTxt(txt, title = 'Note to self') {
    return {
        id: utilService.createId(),
        type: 'noteTxt',
        info: {
            txt,
            title,
        },
        style: {
            backgroundColor: "#ff7e8b"
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
            backgroundColor: "#fc3"
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
            backgroundColor: "#6ff"
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

function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note)
}


export const keepService = {
    getNotes,
    getNoteById,
    saveNote,
    removeNote,
    getEmptyTextNote
}