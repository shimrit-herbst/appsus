export default {
    name: 'keep-txt',
    props: ['note'],
    template: `
    <section class="keep-txt">
       <h3>{{note.info.title}}</h3>
       <label>
       {{note.info.txt}}
       <!-- <textarea rows="5" cols="50">{{note.info.txt}}</textarea> -->
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
