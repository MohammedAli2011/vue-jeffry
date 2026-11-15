export default {
    template: `
                <button 
                :class="{
                    'border-1 border-black rounded-xl p-5 py-2 disabled:cursor-not-allow' : !clicked,
                    'bg-gray-300 hover:bg-gray-400' : type === 'secondary',
                    'bg-blue-500 hover:bg-blue-700 text-white' : type === 'primary',
                    'bg-purple-300 hover:bg-purple-400 text-white' : type === 'muted',
                }"
                :disabled="clicked"
                >
                    <slot></slot>
                </button>
                `
    ,

    props: {
        type: {
            type: String,
            default: 'secondary',
        },
//now we can use clicked from props and data
        clicked: {
            type: Boolean,
            default: false,
        },
    },

    // data() {
    //     return {
    //         clicked: false,
    //     }
    // }
};