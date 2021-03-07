<template>
  <div class="main_area">
  <div class="post_area">
    <h2>Personal Details</h2>
    <input v-model="register.name" class="textBox"  placeholder="Name...">
    <input v-model="register.surname" class="textBox"  placeholder="Surname...">
    <input v-model="register.email" class="textBox"  placeholder="Email...">
    <textarea v-model="register.address" class="textarea_address" rows="10" cols="30" placeholder="Address..."></textarea>
    <div class="registerPassword">
        <input v-model="register.username" class="textBox"  placeholder="Username...">
        <input v-model="register.password" class="textBox"  placeholder="Password...">
    </div>
  </div>
  <div class="upload">
    <input class="myButton" type="file" @change="onfileSelected">
    <button class="myButton" style="padding-left:2rem;" @click="onUpload()">Register</button>
  </div>

    
  </div>
</template>

<script>

 import upload from '@/services/upload'
 import AuthenticationServices from '@/services/authenticationService'
export default {
name: 'Register',
    data(){
        return {
          onSelected:false,
          pdfPath:'',
          register:
            {
              name:'',
              surname:'',
              email:'',
              address:'',
              username:'',
              password:'',
              pdf: ''
            }
        }
    },
    methods:
    {
      onfileSelected(event)
      {
        this.register.pdf = event.target.files[0]
        this.onSelected = true
      },
      async onUpload()
      {
        if(this.onSelected == true)
        {
            const fd = new FormData();
            fd.append('file',this.register.pdf,this.register.pdf.name)
            
            const responsePdf = await upload.upload(
                  fd
            )
            this.pdf = responsePdf.data.path
        }
        
        console.log(this.onSelected)
        // console.log(responsePdf)
        // var pdfPath =''
        // if (responsePdf) 
        // pdfPath = responsePdf.data.path
        const response = await AuthenticationServices.register({
          name: this.register.name, 
          surname: this.register.surname,
          email: this.register.email,
          address: this.register.address,
          username: this.register.username,
          password: this.register.password,
          pdf: this.pdf
        })

        console.log(response)
      }
    }
}
</script>

<style scoped>
.main_area
{
  width: 70rem;
  height: 35rem;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items:flex-start;
  border-radius: 10px;
  border-style: solid;
}

.post_area
{
  width: 40rem;
  display: flex;
  flex-flow: column;
  justify-content:  flex-start;
  align-items: flex-start;
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

.textarea_address {
  font-size: 1rem;
	border-radius: 10px;
	width:15rem;
  box-sizing: border-box;
  padding: 0.5rem;
  margin: 1rem;
  border-style: solid;
  border-width: 0.15rem;
  resize: none;
}

.textarea_description {
  font-size: 1rem;
	border-radius: 10px;
	width:30rem;
  box-sizing: border-box;
  padding: 0.5rem;
  margin: 1rem;
  border-style: solid;
  border-width: 0.15rem;
  resize: none;
}

.registerPassword
{
    display: flex;
    flex-flow: row; 
}

.upload
{
    padding-top: 2rem;
    display: flex;
    flex-flow: row; 
    justify-items: flex-end;
}

h2 {
  padding-left: 1rem;
}
</style>