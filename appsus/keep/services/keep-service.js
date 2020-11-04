var notes = [
    {
        type: 'itemText',
        info: {
            text: "Fullstack Me Baby!"
        },
        isPinned: true,
    },
    {
        type: "itemImg",
        info: {
            url: "https://images.unsplash.com/photo-1601997719352-f2bf5db7fd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        },
        isPinned: true,
    },
    {
        type: "itemTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        },
        isPinned: true,
    },
]

function getById(){
    return notes;
}

export const keepService = {
    getById,
}