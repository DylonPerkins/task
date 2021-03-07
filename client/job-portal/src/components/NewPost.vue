<template>
  <div class="main_area">
  <div class="post_area">
    <h2>New Job Post</h2>
    <input v-model="newPost.title" class="textBox"  placeholder="Title...">
    <textarea v-model="newPost.requirments" class="textarea_requirements" rows="10" cols="30"  placeholder="Requirments..."></textarea>
    <textarea v-model="newPost.description" class="textarea_description" rows="10" cols="30"  placeholder="Description..."></textarea>
  </div>
  <div class="upload">
    <input class="myButton" type="file" @change="onfileSelected">
    <button class="myButton" @click="onUpload()">Upload Image</button>
  </div>

    
  </div>
</template>

<script>
import postJob from '@/services/postJob'
import upload from '@/services/upload'
export default {
name: 'NewPost',
    data(){
        return {
          onSelected : false,
          newPost:
            {
              title:'',
              description:'',
              requirments:'',
              image: ''
            }
        }
    },
    methods:
    {
      onfileSelected(event)
      {
        this.newPost.image = event.target.files[0]
        this.onSelected = true
      },
      async onUpload()
      {
        if(this.onSelected == true)
        {
            const fd = new FormData();
            fd.append('file',this.newPost.image,this.newPost.image.name)
            
            const responseImage = await upload.upload(
                  fd
            )
            this.newPost.image = responseImage.data.path
        }
        
        const response = await postJob.postJob({
              title: this.newPost.title,
              description: this.newPost.description,
              requirments: this.newPost.requirments,
              image: this.newPost.image
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
  width: 100%;
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

.textarea_requirements {
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

h2 {
  padding-left: 1rem;
}

.upload
{
    padding-top: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-flow: row; 
    justify-items: flex-end;
}
</style>