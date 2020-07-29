<template>

<nav>
	<ul  >
		<li><router-link to="/" exact>Blog</router-link></li>
		<li><router-link to="/add" exact>Add Blog</router-link></li>
	</ul>
</nav>

</template>

<script>

	export default{
		data(){

		}
	}


</script>


<style scoped>
	
	ul {
	  list-style-type: none;
	  margin: 0;
	  padding: 0;
	  overflow: hidden;
	  background-color: #333;
	}

	li {
	  float: left;
	}

	li a {
	  display: block;
	  color: white;
	  text-align: center;
	  padding: 14px 16px;
	  text-decoration: none;
	}

	li a:hover:not(.active) {
	  background-color: blue;
	}

</style>