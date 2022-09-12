<template>
  <div v-if="currentStudent" class="edit-form">
    <h4>Student</h4>
    <form>
      <div class="form-group">
        <label for="name">name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentStudent.name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email"
          v-model="currentStudent.email"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <input type="text" class="form-control" id="gender"
          v-model="currentStudent.gender"
        />
      </div>
    </form>
 
    
    <button class="btn btn-danger"
      @click="deleteStudent"
    >
      Delete
    </button>
    <button type="submit" class="btn btn-info"
      @click="updateStudent">
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Student...</p>
  </div>
</template>
<script>
import StudentDataService from "../services/StudentDataService";
export default {
  name: "ShowOneStudent",
  data() {
    return {
      currentStudent: null,
      message: ''
    };
  },
  methods: {
    getStudent(id) {
      StudentDataService.get(id)
        .then(response => {
          this.currentStudent = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateSStudent(status) {
      var data = {
        id: this.currentStudent.id,
        name: this.currentStudent.name,
        email: this.currentStudent.email,
        
      };
      StudentDataService.update(this.currentStudent.id, data)
        .then(response => {
          console.log(response.data);
          this.currentStudent.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateStudent() {
      StudentDataService.update(this.currentStudent.id, this.currentStudent)
        .then(response => {
          console.log(response.data);
          this.message = 'The Student was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteStudent() {
      if(!confirm("Are you sure?")){
            return;
        }
      StudentDataService.delete(this.currentStudent.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "Students" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getStudent(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>