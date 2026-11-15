import assignment from "./assignment.js";
import assignmentTag from "./assignmentTag.js";

export default {
  components: { assignment, assignmentTag },

  template: `        
       
        <section v-if="toggle && assignments.length" class="w-60 mt-0">
            <div class="flex justify-between items-center mb-3">
                <h2 class="text-xl font-bold text-gray-900">
                    {{title}}
                </h2>
                
                <span class="text-black">({{ filteredAssignments.length }}) From ({{assignments.length}})</span>
                
                <button @click="toggle = !toggle" v-show="title === 'Completed'">&times;</button>
            </div>
            <!--     you can use the v-model directive to create a two-way binding between the component and the parent from props and you can change prop name by write v-model:prop-name=""   -->
            <assignment-tag v-model="currentTag" :tags="[...new Set(['all', ...this.assignments.map((a) => a.tag)])]"></assignment-tag>
    
            <ul class="border border-gray-700 divide-y divide-gray-700">
                <assignment :key="assignment.id" v-for="assignment in filteredAssignments" :assignment="assignment"></assignment>
            </ul>
            <slot></slot>
        </section>
        <button class="text-white hover:text-gray-700 p-2 border border-gray-700" v-else-if="toggle === false" @click="toggle = !toggle">toggle completed</button>
    `,

  data() {
    return {
      currentTag: "all",
      toggle: true,
    };
  },

  props: {
    assignments: Array,
    title: String,
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      } else if (this.currentTag === "") {
        this.currentTag = "all";
      }

      return this.assignments.filter(
        (assignment) => assignment.tag === this.currentTag,
      );
    },
  },
};
