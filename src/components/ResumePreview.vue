<template>
	<div id="resumePreview">
		<section data-name="profile" v-show="resume.profile && resume.profile.name">
	        <h1>
	          {{resume.profile.name}}
	        </h1>
	        <h2>{{resume.profile.title}}</h2>
	        <p>
	          <small>{{resume.profile.city}}</small>
	          <small>{{resume.profile.birthday}}</small>
	        </p>
	     </section>

	  	<section data-name="projects" v-show="resume.projects &&resume.projects.length > 0">
	        <h2>项目经历</h2>
	        <ol>
	          <li v-for="item in resume.projects">
	           <h3 v-show="item.name">{{item.name}}</h3>
	           <p> {{item.details}} </p>
	         </li>
	        </ol>
        </section>

	     <section data-name="workHistory" v-show="resume.workHistory &&resume.workHistory.length > 0">
	        <h2>工作经历</h2>
	        <ol>
	          <li v-for="item in resume.workHistory">
	            <h3 v-show="item.company">{{item.company}}</h3>
	            <p > {{item.details}} </p>
	          </li>
	        </ol>
	    </section>
	  
	    <section data-name="education" v-show="resume.education &&resume.education.length > 0">
	        <h2>毕业院校</h2>
	        <ol>
	          <li v-for="item in resume.education">
	            <h3 v-show="item.school">{{item.school}}
	              <span> - {{item.details}} </span>
	            </h3>
	          </li>
	        </ol>
        </section>
        <section data-name="awards" v-show="resume.awards &&resume.awards.length > 0">
	        <h2>获奖情况</h2>
		    <ol>
		        <li v-for="item in resume.awards">
		          	<h3 v-show="item.name">{{item.name}}</h3>
		          	<p> {{item.details}} </p>
		        </li>
		    </ol>
	    </section>
		
	    <section data-name="contacts" v-show="resume.contacts &&resume.contacts.length > 0">
		    <h2>联系方式</h2>
		    <table>
		        <tr v-for="item in resume.contacts">
		           <td>{{item.contact}}</td>
		           <td>{{item.details}} </td>
		        </tr>
		    </table>
	    </section>
	</div>

</template>
<script>
	export default{
		name:"ResumePreview",
		data(){
			return{
				
			}
		},
		computed:{
			resume(){
				return this.$store.state.resume;
			},
		},
		methods:{
			change(){
				this.title="日程安排";
				this.todos={
					title:"安排",
					list:[{id:1,text:"吃饭111"},{id:2,text:"睡觉222"}]
				}
			}
		}
	}
</script>

<style lang="scss">
	 #resumePreview{ 
	 	background:white; 
	 	box-shadow:0 1px 3px 0 rgba(0,0,0,0.25); 
	 	padding: 2em;
        color: #333; 
        line-height: 1.2;
        overflow:auto;
        * {
       		box-sizing: border-box; 
       		font-variant: normal; 
       		font-weight: normal;
       	}
        ol{ 
       		list-style: none; 
        }
        section + section{ 
        	margin-top: 2em; 
        }
        p{ 
        	white-space: pre-line; /*合并空白符序列，但是保留换行符。*/
    	} 
        section {
         	> h2:first-child{ 
	         	background: #ddd; 
	         	display: inline-block; 
	         	padding: .2em; 
	            margin-bottom: .5em;
         	}
        }
        section[data-name="profile"]{
         	> h1{ 
         		margin: .1em 0; 
         		font-size: 4em; 
         	}
        }
        section[data-name="workHistory"],
        section[data-name="projects"],
        section[data-name="awards"]{
         	li + li { 
         		margin-top: 1em; 
         	}
         	li {
           		h3{ 
           			border-bottom: 1px solid #999; 
           			padding-bottom: .3em; 
           			margin-bottom: .3em; 
           		}
         	}
       	}
        section[data-name="education"]{
         	li{
           		line-height: 1.5;
         	}
        }
   }
</style>