<template>
  <form
  @submit="saveStudent" >
    <div class="submit-form">

      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"  minlength="6"
      maxlength="6" required v-model="student.name" name="name" />

      </div>
      <div class="form-group">
        <label for="email">email</label>
        <input class="form-control" type="email" id="email" @change="validEmail" required v-model="student.email"
          name="email" />

      </div>

      <br />
      <p>gender is male or female></p>
      <div class="form-group">
        <label for="gender">Gender</label>
        <input class="form-control" type="gender" id="gender" pattern="male|female" required v-model="student.gender"
          name="gender" />

      </div>
      <br />
      <button @click="saveStudent" class="btn btn-success">Add</button>
    </div>
  </form>

</template>
<script>
import StudentDataService from "../services/StudentDataService";
export default {
  name: "add-student",
  data() {
    return {
      student: {
        id: null,
        name: "",
        email: "",
        gender: "",
        status: "",

      },


    };
  },
  methods: {

    saveStudent() {

      var data = {
        name: this.student.name,
        email: this.student.email,
        gender: this.student.gender,
        status: "inactive",
      };
      StudentDataService.create(data)
        .then(response => {
          this.student.id = response.data.id;
          console.log(response.data);

        })
        .catch(e => {
          console.log(e);
        });

    },

    newStudent() {

      this.student = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
  