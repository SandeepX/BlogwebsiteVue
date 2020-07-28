<template>
  <div >
    <!-- <addBlog> </addBlog> -->
    <!-- <showBlogs></showBlogs> -->
    <router-view></router-view>

  </div>  
</template>

<script>
import addBlog from './component/addBlog.vue';
import showBlog from './component/getBlog.vue';

  export default {
     components:{
      'showBlogs':showBlog
    },

    data(){
      return{

      }
    },

    methods:{

    }
  } 

    
</script>

<style>

  body{
    margin: 0;
    font-family: 'Nunito SemiBold';
  }



</style>
