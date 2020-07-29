<template>
  <div >
    <!-- <addBlog> </addBlog> -->
    <!-- <showBlogs></showBlogs> -->
    <app-header></app-header>
    <router-view></router-view>
    

  </div>  
</template>

<script>
import addBlog from './component/addBlog.vue';
import showBlog from './component/getBlog.vue';
import header from './component/header.vue';


  export default {
     components:{
      'showBlogs':showBlog,
      'addBlog' :addBlog,
      'app-header':header
      
    },

    data(){
      return{

      }
    },

    methods:{

    }
  } 

    
</script>


