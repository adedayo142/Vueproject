<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <div class="container-xxl">
    <router-link class="navbar-brand" to="/">
        <span class="fw-bold bar">
            <i class="bi bi-cash-coin"></i>
            SAVEUP</span></router-link>
        <!-- toggle button for mobile view -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

        <!-- navbar links -->
    <div class="collapse navbar-collapse justify-content-end align-items-center" id="main-nav">
      <ul class="navbar-nav marg  ">
        <li class="nav-item px-5">
           <router-link to="/login" style="color:#40196D;" class="nav-link fw-bold">Sign In</router-link>

        </li>
        <li class="nav-item">
           <router-link to="/signup" class=" btn  round">Get SAVEUP</router-link>
          <!-- <a class="nav-link btn btn-success" href="#reviews">Get SAVEUP</a> -->
        </li>
        <li class="nav-item d-md-none">
          <a class="nav-link" href="#pricing">Pricing</a>
        </li>



      </ul>

    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
li{
  margin-left: 80px;
}
.round{
  border-radius: 10px;
  width: 120px;
  text-decoration: none;
  font-weight: 700;
  color: #fff;
  background-color: #40196D;
}
.round:hover{
  color:#fff;
}
.bar{
  color: #40196D;
}
.marg{
  margin-right:100px;
}

</style>