export default {
    name: 'keep-txt',
    props: ['note'],
    template: `
    <section>
       <label>
            {{note.info.text}}
            <!-- <input type="text" v-model="val" placeholder="Take a note..." @blur="reportVal" /> -->
        </label>
    </section>
    `,
    data() {
        return {
            val: '',
        }
    },
    methods: {
        reportVal() {
            this.$emit('setVal', this.val);
        }
    },
}
