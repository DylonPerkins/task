<template>
  <div class="main_area">
    <div class="login_area">
          <h2>Login</h2>
           <input v-model="login.user_name" class="textBox"  placeholder="User Name...">
           <input v-model="login.password" class="textBox" placeholder="Password...">
           <button @click="loginClick()" class="myButton">Login</button>
    </div>
  </div>
</template>

<script>
import AuthenticationServices from '@/services/authenticationService'

export default {
name:"login",
    data(){
        return {
            login:
            {
              user_name:"",
              password:"",
            }
        }
    },
    methods:
    {
      async loginClick()
      {
        const response = await AuthenticationServices.login({
            username: this.login.user_name,
            password: this.login.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.$store.dispatch('setUserID', response.data.user.id)
          if(this.$store.state.isUserLoggedIn == true)
          {
              alert("Login Successful")
          }
          if(this.$store.state.isUserLoggedIn == false)
          {
              alert("Login Failed ")
          }
      },
    }
}
</script>

<style scoped>
.main_area
{
  width: 70rem;
  height: 50rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.login_area
{
  width: 35rem;
  height: 20rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-style: solid;
  padding-bottom: 2rem;
}

.textBox 
{
	font-size: 1rem;
	border-radius: 10px;
	max-width:15rem;
    box-sizing: border-box;
  padding: 0.5rem;
  margin: 1rem;
  border-style: solid;
}
</style>