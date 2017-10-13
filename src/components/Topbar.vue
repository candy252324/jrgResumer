<template>
	<div id="topbar">
		<div class="wrapper">
			<span class="logo">resumer</span>
			<div class="actions">
				<span>{{user}}</span>
		        <!-- title是标签的固有属性，所以不需要 :title="title"的形式传递 -->
		        <MyDialog title="注册"  
		        	:visible="signUpDialogVisible" 
		        	@close="signUpDialogVisible = false">
		        	<SignUpForm @success="login($event)"/>
		        </MyDialog>
		         <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
		        <a class="button" href="#">登录</a>
		        <button class="button primary">保存</button>
		        <button class="button">预览</button>
			</div>
		</div>
	</div>

</template>
<script>
	import MyDialog from './MyDialog'
	import SignUpForm from './SignUpForm'
	export default{
		name:"topBar",
		data(){
			return{
				signUpDialogVisible:"",
				user:"",
			}
		},
		components:{
			MyDialog,SignUpForm
		},
		methods:{
		  	login(user){
      			this.signUpDialogVisible = false
      			this.$store.commit('setUser', user)
    		}
		}


	}
</script>

<style scoped lang="scss">
	#topbar{
		background: #fff;
		box-shadow: 0 1px 3px 0 rgba(0,0,0,.25);
		>.wrapper{
			min-width: 1024px;
			max-width: 1440px;
			height: 64px;
			margin:0 auto;
			display:flex;
			justify-content:space-between;
			align-items: center;
			padding:0 16px;
		}
		.logo{
			font-size: 24px;
			color:#000;
		}
		// 由于加了 scoped， 所以这个 button 选择器只在本组件内有效，不会影响其他组件
		.button{
			width:72px;
			height:32px;
			border:none;
			cursor:pointer;
			font-size:18px;
			background:#ddd;
			color:#222;
			text-decoration: none;
   			display: inline-flex;
    		justify-content: center;
    		align-items: center;
	    	vertical-align: middle;
			&:hover{
				box-shadow:1px 1px 1px hsla(0,0,0,.5);
			}
			&.primary{
				background:#02af5f;
				color:white;
			}
		}
	}
	
</style>