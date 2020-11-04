import keepPreview from './keep-preview.cmp.js';

export default {
    name: 'keep-list',
    props: ['notes'],
    template: `
        <section class="keep-list">
            <h2>Notes</h2>
            <ul>
                <li v-for="note in notes" :key="note.id" >
                    <keep-preview :note="note" @click.native="noteClicked()" />
                </li>
            </ul>
        </section>
    `,
    components: {
        keepPreview
    }
}
