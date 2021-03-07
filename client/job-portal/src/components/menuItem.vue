<template>
<div class="canvas">
    <div class="menu_container">
        <div @click="dropIt()">
            <div class="menu"></div> 
            <div class="menu"></div>
            <div class="menu"></div> 
        </div>
        <div>
        <ul class="list" v-if="isDropped">
        <li class="li" @click="dropIt()"><router-link to="/Home" class="">Home</router-link></li>
        <li class="li" @click="dropIt()"><router-link to="/login">Login</router-link></li>
        <li class="li" @click="dropIt()"><router-link to="/Register">Register</router-link></li>
        <li class="li" @click="dropIt()"><router-link to="/NewPost">New Job Post</router-link></li>
        </ul>
        </div>
    </div>
    <div class="logout" @click="logout()" v-if="$store.state.isUserLoggedIn">
        Log Out
    </div>
</div>

</template>

<script>

export default {
    name: "menuItem",
    data: () => ({
        isDropped: false
    }),
    methods: 
    {
        dropIt: function () 
        {
            this.isDropped = !this.isDropped
        },
        logout(){
           location.reload()
        }
    }
}

</script>

<style scoped>
.canvas
{
    display: flex;
    flex-flow: row;
}

.menu_container
{
    display: flex;
    flex-flow: column;
}
.menu 
{
  width: 3.2rem;
  height: 0.5rem;
  background-color: black;
  margin: 0.3rem 0;
}

.drop_down_closed
{
   display: none;
   width: 15rem;
   height : 25rem;
}

.drop_down_open
{
   display: none;
   width: 15rem;
   height : 25rem;
}

.list{
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  -ms-flex-align: center;
  width: 15rem;
  margin: 0;
  padding: 0;
  transition: transform 1s ease-in-out;
  overflow: hidden;
}
.li
{
    padding: 1rem;
    background: white;
    border-bottom: solid thin black;
    border-left: solid medium black;
}

.logout{
    display: flex;
    padding-left: 2rem;
    justify-content: center;
    padding-top: 0.8rem;
    cursor: pointer;
}

.router-link
{
   color: black; 
}

.router-link-exact-active
{
    color: black;
}

</style>