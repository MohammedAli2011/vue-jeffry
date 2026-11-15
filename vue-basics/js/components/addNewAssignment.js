export default {
  template: `
            <form @submit.prevent="add" action="" class="addNewAssignment border border-gray-700 bg-gray-500 flex">
                <input class="bg-gray-500 outline-none p-1 w-1/3" v-model="newAssignment" placeholder="name" required type="text">
                <input class="bg-gray-500 outline-none border-l border-gray-700 p-1 w-1/3" v-model="newAssignmentTag" placeholder="tag name" type="text">
                <button type="submit" class="border-l border-gray-700 p-1 w-1/3">Add</button>
            </form>`,

  data() {
    return {
      newAssignment: "",
      newAssignmentTag: "",
    };
  },

  methods: {
    add() {
      if (this.newAssignmentTag === "") {
        this.newAssignmentTag = "general";
      }
      this.assignments.push({
        name: this.newAssignment,
        complete: false,
        id: this.assignments.length + 1,
        tag: this.newAssignmentTag,
      });

      this.newAssignment = "";
      this.newAssignmentTag = "";
    },
  },

  props: {
    assignments: Array,
  },
};
