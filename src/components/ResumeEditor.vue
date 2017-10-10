<template>
	<div id="resumeEditor">
		<nav>
			<ol>
				<li v-for="(item,index) in resume.config"
					:class="{active:item.field===selected}"
					@click="selected=item.field">
					<svg class="icon">
						<use :xlink:href="`#icon-${item.icon}`"></use>
					</svg>
				</li>
			</ol>
		</nav>
		<ol class="panels">
			<li v-for="item in resume.config"
				v-show="item.field===selected">
				<!-- resume 属性同时支持数组和对象 -->
				<div v-if="resume[item.field] instanceof Array">
					<div class="subitem" v-for="subitem in resume[item.field]">
						<div class="resumeField" v-for="(value,key) in subitem">
							<label for="">{{key}}</label>
							<input type="text" v-model="resume[item.field][key]">
						</div>
						<hr>
					</div>
				</div>
				<div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
		            <label> {{key}} </label>
		            <input type="text" v-model="resume[item.field][key]">
		        </div>
			</li>
		</ol>
	</div>
</template>

<script>
	export default{
		name:"ResumeEditor",
		data(){
			return{
				selected:"profile",
				resume:{
					config:[
						{ field: 'profile', icon: 'id' },
                        { field: 'work history', icon: 'work' },
                        { field: 'education', icon: 'book' },
                        { field: 'projects', icon: 'heart' },
                        { field: 'awards', icon: 'cup' },
                        { field: 'contacts', icon: 'phone' },
					],
					profile:{
						name:'',
						city:'',
						title:'',
					},
					'work history':[
						{company: 'AL', content: '我的第二份工作是'},
            			{company: 'TX', content: '我的第一份工作是'},
					],
					education:[],
					projects:[],
					awards:[],
					contacts:[],
				}
			}
		}

	}
</script>

<style lang="scss" scoped>
	#resumeEditor{
		background: #fff;
		box-shadow: 0 1px 3px 0 rgba(0,0,0,.25);
		display:flex;
		flex-direction:row;
		overflow:auto;
		>nav{
			width:80px;
			background:black;
			color:#fff;
			>ol{
				list-style:none;
				>li{
					height:48px;
					display:flex;
					justify-content:center;
					align-items:center;
					cursor:pointer;
					&.active{
						background:#fff;
						color:#000;
					}
				}
			}
		}
		>.panels{
			flex-grow:1;
			list-style:none;
			>li{
				padding:24px;
			}

		}
		.resumeField{
			>label{
				display:block;
			}
			input[type=text]{
				margin:16px 0;
				border:1px solid #ddd;
				box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.25);
				width:100%;
				height:40px;
				padding:0 8px;
			}
		}
		svg.icon{
			width:24px;
			height:24px;
		}
		hr{
 		   border: none;
 		   border-top: 1px solid #ddd;
 		   margin: 24px 0;
 		}
	}
</style>