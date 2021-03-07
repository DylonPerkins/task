<template>
  <div class="main_area">
    <div v-for="job in response" :key="job.id">
      <div class="container2">
        <div>
          <div class="container">
            <div class="content">
              <h2>{{job.title}}</h2>
              <h3>Description:</h3>
              <h5>{{job.description}}</h5>
              <button class="myButton apply" @click="apply(job.id)" >Apply</button>
            </div>
            <div class="image_container">
              <div class="image_size">
                  <img :src="'http://localhost:8081/'+job.image">
              </div> 
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import applicationTracker from '@/services/applicationTrackerService'
import postJob from '@/services/postJob'
export default {
name: 'Home',
    data(){
        return {
          response: null,
          applyCheck:null
        }
    },
    computed: {
    
    },
        
    methods:
    {
      
        async apply(jobId)
        {
          const userId = this.$store.state.userID
          if(userId != null)
          {
              var applied = false;
              console.log(jobId)
              console.log(userId)
                        this.userId = (await applicationTracker.applyTracker(jobId)).data
                        const responseApply = await applicationTracker.apply({
                          PostID: jobId,
                          UserID: userId
                        })
                      console.log(responseApply)
                        this.applyCheck = (await applicationTracker.applyTracker()).data
                      console.log(this.applyCheck)
                        var json = this.applyCheck
                      for (var key in json) 
                      {
                        var userIdCheck = json[key].UserID;
                        var PostIdCheck = json[key].UserID;
                        // console.log(userIdCheck);
                        // console.log(PostIdCheck);
                        if(userId == userIdCheck && jobId == PostIdCheck)
                        {
                          applied = true
                        }
                      }
                      if (applied == true)
                      {
                        alert("You have already applied to this job Post")
                      }else
                      {
                        alert("Thank you and we will contact you shortly")
                      }
          }else
          {
            alert("You must be logged in to apply")
          }
        }
    },

     async mounted ()
     {
              this.response = (await postJob.getJob()).data
              console.log(this.response)
     }
    
}
</script>

<style scoped>
.main_area
{
  width: 50rem;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  border-style: solid;
}

.tile{
  width: 40rem;
  border-radius: 10px;
  border-style: solid;
  padding: 2rem;
}

.content{
  width: 20rem;
}

.container{
  width: 40rem;
  border-radius: 10px;
  border-style: solid;
  padding: 2rem;
  display: flex;
  flex-flow: row;
}

.container2{
  padding: 2rem;
  display: flex;
  flex-flow: column;
}

.image_size
{
  display: flex;
  height:15rem;
  width: 25rem;
  padding-left: 2rem;
}

.apply
{
  width:10rem;
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