<template>
  <div class = "container">

    <h2 v-if="!submitted">Add a new Blog</h2>

    <form v-if="!submitted">

      <label>Blog Title:</label>
      <input type="text" class="form-control" v-model.lazy="blog.title" required />

      <label>Blog Content:</label>
      <textarea class="form-control" v-model.lazy="blog.content" ></textarea>

       

      <div id="checkboxes">
        <label >Sports</label>
        <input type ="checkbox" value="sports" v-model="blog.categories"/>
        <label>politice</label>
        <input type ="checkbox" value="politice" v-model="blog.categories"/>
        <label>Tourism</label>
        <input type ="checkbox" value="tourism" v-model="blog.categories"/>
        <label>Religious</label>
        <input type ="checkbox" value="religion" v-model="blog.categories"/>
      </div>

      <label>Author:</label>
      <select class="form-control"  v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>

      <br>

      <button class="btn btn-success" v-on:click.prevent="post">Add blog</button>

    </form>

    <div class="alert alert-danger" v-if="submitted" role="alert">
      <h3>your blog is submitted successfully</h3>
    </div>
    <!-- <div v-if="submitted">
      <h3>Your blog is submittted successfully</h3>
    </div> -->

    <div class="container" v-if="submitted" >
      <div class="row">
        <label>
          <h3>Preview Blog:</h3>
        </label>
        <label>
          <p>Blog title:{{ blog.title }}</p>
        </label>

        <label>
          <p>Blog content:</p>
        </label>
          <p>{{ blog.content }}</p>
        
        <label>
          <p>Blog Categories:</p>
        </label>
        <ul>
          <li v-for="category in blog.categories">{{ category }}</li>
        </ul>

        <label>
          <p>Blog Author: {{ blog.author }}</p>
        </label>

      </div>

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
  
 

  label{
      display: block;
      margin: 20px 0 10px;
  }
   
 #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
 
  #checkboxes label{
    display: inline-block;
  }

</style>
