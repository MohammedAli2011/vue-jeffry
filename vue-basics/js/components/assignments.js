import assignmentList from "./assignmentList.js";
import addNewAssignment from "./addNewAssignment.js";

export default {
  components: { assignmentList, addNewAssignment },

  template: `
        <div class="assignments text-white flex gap-8 justify-center items-center">
            <assignment-list :assignments="inProgressAssignments" title="In Progress">
                <add-new-assignment class="" :assignments="assignments"></add-new-assignment>
            </assignment-list>
            <add-new-assignment class="w-60" v-show="inProgressAssignments.length === 0" :assignments="assignments"></add-new-assignment>
             
            <assignment-list :assignments="completedAssignments" title="Completed" toggle></assignment-list>
        </div>
    `,

  data() {
    return {
      assignments: [],
    };
  },

  created() {
    fetch("http://localhost:3000/assignments")
      .then((response) => response.json())
      .then((assignments) => {
        this.assignments = assignments;
      });
  },

  computed: {
    inProgressAssignments() {
      return this.assignments.filter((assignment) => !assignment.complete);
    },

    completedAssignments() {
      return this.assignments.filter((assignment) => assignment.complete);
    },
  },
};
