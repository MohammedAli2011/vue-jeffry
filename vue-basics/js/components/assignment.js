export default {
    template: `
        <li>
            <label class="flex justify-between items-center p-3">
                {{assignment.name}}

                <input class="ms-3" id="" name="" type="checkbox" v-model="assignment.complete">
            </label>
        </li>
    `,

    props: {
        assignment: Object,
    }
}