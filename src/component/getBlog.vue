<template>
  <div v-theme:column="'narrow'" id ="show-blog">
    <h1> All Blog Article</h1>

    <input type="text" v-model="search" placeholder = "Search blogs..."/>

    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-color>{{ blog.title |uppercase}}</h2>
      <p>{{blog.body | snippet}}</p>
    </div>
   
  </div>  
</template>

<script>

  export default {
    

    data(){
      return{
        blogs:[],
        search:''

      }
    },

    methods:{

    },

    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        //console.log(data);
        this.blogs = data.body.slice(0,10);
      })
    },

    computed:{
      filteredBlogs:function(){
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        });
      }
    }
  } 

    
</script>

<style>

  #show-blog{

    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-shadow:content-box;
    
    background: #eee;
  }


</style>
