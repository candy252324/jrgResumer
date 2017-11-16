//组装模块并导出 store 的地方
import Vue from 'vue'
import Vuex from 'vuex'
import objectPath from "object-path"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	selected:"profile",
    user: {
      	id: '',
      	username: ''
    },
		resumeConfig:[
      { field: 'profile', icon: 'id', keys: ['name','city', 'job', 'birthday']},
      { field: 'workHistory', icon: 'work', type: 'array', keys: ['company', 'details'] },
      { field: 'education', icon: 'book',type: 'array',  keys: ['school', 'details'] },
      { field: 'projects', icon: 'heart',type: 'array',  keys: ['name', 'details']  },
      { field: 'awards', icon: 'cup' ,type: 'array',  keys: ['name', 'details'] },
      { field: 'contacts', icon: 'phone' ,type: 'array',  keys: ['contact', 'content'] },
		],
  	resume:{}
  },
  mutations: {
    switchTab(state,payload){
    	state.selected=payload;
    	localStorage.setItem('state', JSON.stringify(state))
    },
    // updateResume1(state, {field, subfield, value}){
    //    state.resume[field][subfield] = value
    // },
    // updateResume2(state, {field, i,subfield, value}){
    //     state.resume[field][parseInt(i)][subfield] = value
    // },
    updateResume(state, {path, value}){
      	objectPath.set(state.resume, path, value)
      	localStorage.setItem('state', JSON.stringify(state))
    },
    initState(state, payload){
        state.resumeConfig.map((item)=>{
          if(item.type === 'array'){
            //state.resume[item.field] = [] // 这样写 Vue 无法监听属性变化
            Vue.set(state.resume, item.field, [])
          }else{
            //state.resume[item.field] = {} // 这样写 Vue 无法监听属性变化
            Vue.set(state.resume, item.field, {})
            item.keys.map((key)=>{
              //state.resume[item.field][key] = '' // 这样写 Vue 无法监听属性变化
              Vue.set(state.resume[item.field], key, '')
            })
          }
        })
    	//state=payload;  //直接赋值state虽然变了，但是不会触发视图更新？
        Object.assign(state, payload)
    },
    setUser(state, payload){
    	Object.assign(state.user, payload)
    },
    removeUser(state){
      state.user.id = null;
    },
    addItem(state,{field}){
      let empty = {}
      state.resume[field].push(empty)
      state.resumeConfig.filter((i) => i.field === field)[0].keys.map((key) => {
          Vue.set(empty, key, '')
      })
    },
    delItem(state,{path}){
      objectPath.del(state.resume, path);
    },
  }
})    