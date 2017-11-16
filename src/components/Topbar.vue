<template>
	<div id="topbar">
		<div class="wrapper">
			<span class="logo">{{$t(`topbar.title`)}}</span>
			<div class="actions">
		       
                <div v-if="logined" class="userActions">
                   <span class="welcome">{{$t(`topbar.hello`)}}，{{user.username}}</span>
                   <a class="button" href="#" @click.prevent="signOut">{{$t(`topbar.logout`)}}</a>
                 </div>
                <div v-else class="userActions">
                   	<el-button type="primary"  href="#" @click.prevent="signUpDialogVisible = true">{{$t(`topbar.regist`)}}</el-button>
                    <el-button class="button" href="#" @click.prevent="signInDialogVisible = true">{{$t(`topbar.login`)}}</el-button>
                </div>
                <el-switch
				  v-model="lang"
				  on-value="zh"
				  off-value="en"
				  on-text="中文"
				  off-text="英文"
				  off-color="#13ce66">
				</el-switch>
			</div>

		</div>
	  <!-- title是标签的固有属性，所以不需要 :title="title"的形式传递 -->
       <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
         <SignUpForm @success="signIn($event)"/>
       </MyDialog>
		<MyDialog title="登录" :visible="signInDialogVisible"
            @close="signInDialogVisible = false">
            <SignInForm @success="signIn($event)"/>
        </MyDialog>
	</div>

</template>
<script>
	import Vue from 'vue'
	import MyDialog from './MyDialog'
	import SignUpForm from './SignUpForm'
	import SignInForm from './SignInForm'
	import AV from '../lib/leancloud'
	export default{
		name:"topBar",
		data(){
			return{
				signUpDialogVisible: false,
 			    signInDialogVisible: false,
 			    lang:"zh",
			}
		},
		computed:{
			user(){
	        	return this.$store.state.user
		     },
		    logined(){
		       return this.user.id
		    }
		},
		components:{
			MyDialog,SignUpForm,SignInForm
		},
		methods:{
		    signOut(){
		      	AV.User.logOut()
		      	this.$store.commit('removeUser')
		    },
		  	signIn(user){
      			this.signUpDialogVisible = false
      			this.signInDialogVisible = false
      			this.$store.commit('setUser', user)
    		}
		},
		watch:{
			'lang'(val){
				Vue.config.lang=val;
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
		.actions{
			 display: flex;
			 align-items:center;
		     .userActions{
		       .welcome{
		        	margin-right: .5em;
		       }
		       button{
		       		padding:6px 12px;
		       		margin-left:0;
		       		margin-right:10px;
		       }
		     }
		}
	}
	
</style>