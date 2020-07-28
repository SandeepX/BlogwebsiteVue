import showBlogs from './component/getBlog.vue';
import addBlogs from './component/addBlog.vue';

export default[

	{path:'/', component:showBlogs},
	{path:'/add', component:addBlogs},

]