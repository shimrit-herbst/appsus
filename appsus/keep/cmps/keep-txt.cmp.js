export default {
    name: 'keep-txt',
    props: ['note'],
    template: `
    <section class="keep-txt">
       <h3>{{note.info.title}}</h3>
       <label>{{note.info.txt}}</label>
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
