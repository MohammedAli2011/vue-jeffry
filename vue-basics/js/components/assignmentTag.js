export default {
  template: `
         <div class="text-xs mb-3 flex gap-2">
                <!--    we use emit event to update currentTag in assignmentList.js     -->
                <button 
                    @click="$emit('update:modelValue', tag)"
                    class="p-1 border rounded-sm"
                    :class="{
                        'border-blue-900 text-blue-900': tag === modelValue,
                    }"
                    v-for="tag in tags"
                >{{ tag }}</button>
         </div>
  `,

  props: {
    //if you want to use v-model, you need to use modelValue as the prop name, or you can use the model option to specify a different prop name.
    modelValue: String,
    // currentTag: String,
    tags: Array,
  },

  // computed: {
  //   tags() {
  //     return this.tags;
  //   },
  // },
};
