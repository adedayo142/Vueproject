<template>
  <div id="nav">
    <Navbar/>
  <!-- <div class="container-lg">
    <div class="row justify-content-center align-items-center">
       <div class="col-md-5 text-center text-md-start">
           <h1>
               <div class="display-2">SQI BANK</div>
               <div class="display-5 text-muted">DIGITAL BANKING</div>
           </h1>
            <p class="lead my-4 text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <router-link to="/Signup" class="btn btn-secondary btn-lg">Sign Up</router-link>
</div>
    </div>
</div> -->
     <!-- <router-link to="/login">Login</router-link>
    <router-link to="/signup">Signup</router-link> -->
    
  </div>
   <router-view/>
</template>


<script>
 import Navbar from './components/Navbar.vue'
 import Footer from './components/Footer.vue'
 export default {
 components:{Navbar, Footer}
 }
 </script>