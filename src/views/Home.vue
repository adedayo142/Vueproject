<template>
  <div class="home">
<div class="container-lg home">
    <div class="row justify-content-center align-items-center">
       <div class="col-md-5 text-center text-md-start">

               <h4 style="color:#40196D; fontWeight:1000; fontSize:40px;" class=""> Download SAVEUP, <br> open an account!</h4>
               <!-- <div class="display-5 text-muted">DIGITAL BANKING</div> -->

            <!-- <p class="lead my-4 text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> -->
        <!-- <router-link to="/Signup" class="btn btn-secondary btn-lg">Sign Up</router-link> -->

        </div>
        <div class="col-md-5  text-center d-none d-md-block">
        <!-- tooltip -->
        <span class="tt" data-bs-placement="bottom" title="">
              <img class="img-fluid" src="@/assets/kuda.png" alt="saveup">
        </span>
</div>
    </div>
</div>
  </div>
  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Footer from '../components/Footer.vue'
export default defineComponent({
  name: 'Home',
  components: {Footer},
  data(){
    return{

    }
  }
});
</script>

<style scoped>
.home{
  margin-top: 40px;

}
</style>
