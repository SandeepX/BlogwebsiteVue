<template>
  <div id = "add-blog">

    <h2>Add a new Blog</h2>

    <form v-if="!submitted">

      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />

      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content" ></textarea>

      <div id="checkboxes">
        <label>Sports</label>
        <input type ="checkbox" value="sports" v-model="blog.categories"/>
        <label>politice</label>
        <input type ="checkbox" value="politice" v-model="blog.categories"/>
        <label>Tourism</label>
        <input type ="checkbox" value="tourism" v-model="blog.categories"/>
        <label>Religious</label>
        <input type ="checkbox" value="religion" v-model="blog.categories"/>
      </div>

      <label>Author:</label>
      <select id="select"  v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>

      <br>

      <button  id="button" v-on:click.prevent="post">Add blog</button>

    </form>
    <div v-if="submitted">
      <h3>Your blog is submittted successfully</h3>
    </div>

    <div id ="preview">
      <h3>Preview Blog</h3>
      <p>Blog title:{{ blog.title }}</p>

      <p>Blog content:</p>
      <p>{{ blog.content }}</p>

      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>

      <p>Blog Author: {{ blog.author }}</p>


    </div>


  </div>  
</template>

<script>



  export default {
   
    data(){
      return{
        blog:{
          title:"",
          content:"",
          categories:[],
          author:""
        },

        authors:['Sandeep','Harish','Ashok','Krishna'],
        submitted:false,

      }
    },

    methods:{

      post:function(){
        this.$http.post('https://jsonplaceholder.typicode.com/posts',{
          title:this.blog.title,
          body:this.blog.content,
          userId:1

        }).then(function(data){
          //console.log(data);
          this.submitted=true;
        });
      }

    }
  } 

    
</script>

<style>

  

  
  #add-blog *{
      box-sizing: border-box;
      
  
  }

  #select{
     display: block;
    width: 100%;
  }

  #add-blog{
      margin: 20px auto;
      max-width: 500px;
  }
  label{
      display: block;
      margin: 20px 0 10px;
  }
  input[type="text"], textarea{
      display: block;
      width: 100%;
      padding: 8px;
      border: 2px solid red;
      border-radius: 4px;
  }
  #preview{
      padding: 10px 20px;
      border: 1px dotted #ccc;
      margin: 30px 0;
      border: 2px solid red;
      border-radius: 4px;
  }

  h3{
      margin-top: 10px;

  }

  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
 
  #checkboxes label{
    display: inline-block;
  }

  #button {
  background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
}


</style>
