<template>
  <div class="sidebar">
      <div class="title">
          Simple Sidebar
      </div>
      <div class="menu-items">
          <router-link :to="{name: 'overview', params: {id: 'overview'}}" active-class="active" tag="button" class="side-btn">
                <div class="link-container">
                    Overview
                </div>
          </router-link>
            <router-link :to="{name: 'message', params: {id:'message'}}" active-class="active" tag="button" class="side-btn">
                <div class="link-container">
                    Messages
                </div>
          </router-link>
            <router-link to="{name: 'profile', params: {id:'profile'}}" active-class="active" tag="button" class="side-btn">
                <div class="link-container">
                    profile
                </div>
          </router-link>
            <router-link to="/dashboard/setting" active-class="active" tag="button" class="side-btn">
                <div class="link-container">
                    settings
                </div>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.title{
    color: white;
    font-size: 24px;
    margin-top: 10px;
}
.menu-items{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
}
.menu-items > *{
    margin-top: 60px;
}

.side-btn:focus{
    outline: none;
}
.side-btn.active{
    background-color: white;
    color: teal;
    font-weight: 500;
}
.side-btn{
    border:none;
    padding:10px 0px;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
    font-weight: 500;
    color: #fff;

}
</style>