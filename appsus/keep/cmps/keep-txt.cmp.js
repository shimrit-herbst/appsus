export default {
    name: 'keep-txt',
    props: ['note'],
    template: `
    <section>
       <label>
            {{note.info.text}}
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
