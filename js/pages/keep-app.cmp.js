var notes = {
    title: 'MissKeep',
    cmps: [
        {
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            type: "NoteImg",
            info: {
                url: "http://some-img/me",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            type: "NoteTodos",
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            }
        }
    ],
}

const textBox = {
    props: ['info'],
    template: `
        <div class="row">
            <label>
                {{info.label}}
                <input type="text" v-model="txt" @blur="reportVal" />
            </label>
        </div>
    `,
    data() {
        return {
            txt: '',
        }
    },
    methods: {
        reportVal() {
            this.$emit('setVal', this.txt)
        }
    }
} 






export default {
    name: 'miss-keep',
    template: `
    <section class="miss-keep">
        <h1>Miss Keep</h1>
        <input type="text" v-model="titleTag" />
        <component :is="titleTag">{{survey.title}}</component>
                <form @submit.prevent="save">
            <div v-for="(cmp, idx) in survey.cmps">
                <component :is="cmp.type"
                            :info="cmp.info" 
                            @setVal="setAns($event, idx)" />

            </div>
            <button>Save</button>
        </form>
        <hr />
        <pre>{{answers}}</pre>
    </section>
    `,
    data() {
        return {
            titleTag: 'h1',
            survey: notes,
            answers: new Array(notes.cmps.length)
        }
    },
    methods: {
        save() {
            console.log('Saving: ', this.answers);
        },
        setAns(val, idx) {
            this.answers.splice(idx, 1, val)
        }
    },
    mounted() {
    },
    created() {
    },
    components: {
        NoteText,
        NoteImg,
        NoteTodos
    }
}