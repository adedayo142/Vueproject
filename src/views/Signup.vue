<template>
<div class="row">
<div class="col-md-5">
  <form  class=" m-3 p-5 card shadow-sm formed" method="POST" @submit.prevent="submitForm()">
    <div>
<h1 class='text-center'> BANK</h1>
</div>
    <div class="">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" v-model="name" class="form-control">

  </div>
  <div class="">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" v-model="email" class="form-control">

    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="">
    <label for="exampleInputPassword1" class="form-label">Pin</label>
    <input type="password" v-model="password" class="form-control">

  </div>

  <button type="submit" class="btn btn-primary my-3">Submit</button>
</form>
</div>
<div class="col-md-5 ">
    <img src="@/assets/signup.png" class="img-fluid" alt="">
</div>
</div>
</template>

<script>

import { postJson } from '../service/signup';

export default {

  data(){
    return{

      name:"",
      email:"",

     password:"",


    }
  },

methods:{
   async submitForm(){

      try {
      await  postJson({
          name: this.name,
          email: this.email,
          password: this.password,

        }).then((res)=>{
          res.data
          console.log(res);
          console.log(res.data);
        }).catch(err=>{
          console.log(err);
        })
      } catch (error) {
        this.error = error.res.data.error
        console.log(this.error);
      }

  this.$router.push('/login')


    },

},

}
</script>

<style scoped>

@media (max-width:900px) {
  input{
    width:200px;
  }
}
.formed{
    width: 350px;
}
input{
    border: none;
    border-bottom: 1px solid grey;
    padding: 5px 10px;
    outline: 0;
}
</style>