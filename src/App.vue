<template>
  <div id="app">
    <headerComponent></headerComponent>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
import headerComponent from '@/components/headerComponent';
import footerComponent from '@/components/footerComponent';
export default {
  name: 'App',
  components:{
      headerComponent:headerComponent,
      footerComponent:footerComponent,
    },
}
</script>

<style>
	div	{
		box-sizing:border-box;
	}
	img{
	vertical-align:middle;
}
p,h1,h2,h3,h4,h5,h6,ul,ol,dl,dd{
	list-style:none;
	margin:0px;
	padding:0px;
}
a{
	text-decoration:none;
	color: #686868;
}
#app{
	font-family:"微软雅黑";
	margin:0 auto;
	box-sizing:border-box;
	overflow-x:hidden;
	font-size:12px;
	color: #686868;
	width:100%;
}
.lf{
	float:left;
}
.rt{
	float:right;
}
.clear:after{
	content:"";
	display:block;
	clear:both;
}
</style>