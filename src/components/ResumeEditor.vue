<template>
	<div id="resumeEditor">
		<nav>
			<ol>
				<li v-for="(item,index) in resumeConfig"
					:class="{active:item.field===selected}"
					@click="selected=item.field">
					<svg class="icon">
						<use :xlink:href="`#icon-${item.icon}`"></use>
					</svg>
				</li>
			</ol>
		</nav>
		<ol class="panels">
			<li v-for="(item,i) in resumeConfig"
				v-show="item.field===selected">
				<!-- resume 属性同时支持数组和对象 -->
				<div v-if="item.type === 'array'">
					<div class="subitem" v-for="(subitem,i) in resume[item.field]">
						<div class="resumeField" v-for="(value,key) in subitem">
							<label for="">{{$t(`resume.${item.field}.${key}`)}}</label>
							<!-- <input type="text" v-model="subitem[key]"> -->
							<!-- <input type="text" :value=value @input="changeResumeField2( item.field, i, key, $event.target.value)"> -->
							<input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)">
						</div>
						<el-button type="danger" class="delItem" @click="delItem(`${item.field}.${i}`)">{{$t(`resume.del`)}}</el-button>
						<hr>
					</div>
					<el-button type="success" class="addItem" @click="addItem(item.field)">{{$t(`resume.add`)}}</el-button>
				</div>
				<div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
		            <label> {{$t(`resume.${item.field}.${key}`)}}</label>
		            <!-- v-model 不允许使用，因为这是双向绑定语法 -->
		            <!-- <input type="text" v-model="resume[item.field][key]"> -->
		            <!-- <input type="text" :value="value" @input="changeResumeField1(item.field, key, $event.target.value)"> -->
		            <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`, $event.target.value)">
		        </div>

			</li>
		</ol>
	</div>
</template>

<script>
	export default{
		name:"ResumeEditor",
		computed:{
			count(){
				return this.$store.state.count;
			},
			//tab无法切换，因为默认 computed 只能用于读数据，需要使用setter改变store里的selected值
			// selected(){
			// 	return this.$store.state.selected;
			// },
			selected:{
				get(){
					return this.$store.state.selected;
				},
				//将新的selected值提交给store,通知其更改selected
				set(value){
					return this.$store.commit('switchTab', value);
				}
			},
			resume(){
				return this.$store.state.resume;
			},
			resumeConfig(){
				return this.$store.state.resumeConfig;
			},
		},
		methods:{
			// changeResumeField1(field, subfield, value){
			// 	this.$store.commit('updateResume1',{
			// 		field,
			// 		subfield,
			// 		value
			// 	})
			// },
			// changeResumeField2(field,i, subfield, value){

			// 	this.$store.commit('updateResume2',{
			// 		field,
			// 		i,
			// 		subfield,
			// 		value
			// 	})
			// },
			changeResumeField(path, value){
		        this.$store.commit('updateResume',{
		          	path,
		           	value
	            })
			},
			addItem(field){
				this.$store.commit('addItem',{field})
			},
			delItem(path){
				this.$store.commit('delItem',{path})
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
			.addItem{
				width:100%;
				text-align:center;
			}
			.subitem{
				position:relative;
				.delItem{
					position:absolute;
					right:0;
					top:0;
					padding:3px 5px;
				}
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