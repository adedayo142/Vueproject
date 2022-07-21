<template>
<div class="">
<div class="row ">
  <div class="col-md-5">
 <form class=" m-3 p-5 card shadow-sm formed" enctype="multipart/form-data" method="POST" @submit.prevent="logged()">
  <h4 class="card-title fw-bold" style="fontSize: 20px;">Sign in to SAVEUP</h4>

     <label class="col-form-label col-form-label-lg">Email <span class="text-danger">*</span></label>
    <input type="email" required v-model="email" class="form-control form-control-lg" placeholder="example@gmail.com">
     <!-- <span v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</span> -->

     <label class="col-form-label col-form-label-lg">Password <span class="text-danger">*</span></label>
    <input type="password" required v-model="password" class="form-control form-control-lg" placeholder="****">
     <!-- <span v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</span> -->

  <button type="submit"  class="btn  mt-3 cont">Continue</button>
</form>
</div>

<div class="col-md-5 ">
    <img src="@/assets/signup.png" class="img-fluid" alt="">
</div>
</div>
</div>
</template>
<script>
import { required, minLength, email } from "@vuelidate/validators";
import useValidate from '@vuelidate/core';
import {reactive, computed} from 'vue';
import axios from 'axios';
import {logJson} from '../service/login'
export default {
 data () {
     return{
        email:'',
        password:''
         }

//          const rules = computed(()=>{
//              return{
//                  email:{ required, email },
//                 password:{ required, minLength:minLength(6) }
//              }
//          })

//          const v$ = useValidate(rules,state)
//      return{state, v$}
 },
methods:{
  async logged(){
       try {
           await logJson({
               email: this.email,
               password: this.password
           }).then((res)=>{
               res.data
               console.log(res.data);
           }).catch(err=>{
               console.log(err);
           })
       } catch (error) {
           this.error = error.res.data.error
           console.log(this.error);
       }

       this.$router.push('/dashboard')

    //     this.v$.$validate();
    //     if(!this.v$.$error){
    //     alert('form submit')
    //     this.$router.push('/dashboard')
    // } else{
    //     alert('Form failed validation')
    // }
    }
}
}
</script>

<style scoped>
.cont{
    padding: 10px;
    border-radius: 10px;
    width: 150px;
    margin-left: 50px;
     color: #fff;
  background-color: #40196D;
  font-weight: 700;
}
input{
    border: none;
    border-bottom: 1px solid grey;
    padding: 5px 10px;
    outline: 0;
}

.formed{
    width: 350px;
}
</style>
