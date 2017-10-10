<template>
  <div class=page>
      <header>
        <Topbar/>
      </header>
      <main>
        <ResumeEditor/>
        <ResumePreview/>
      </main>
  </div>
</template>

<script>

  import './assets/reset.css';
  // import 'normalize.css/normalize.css';
  import Topbar from './components/Topbar';
  import ResumeEditor from './components/ResumeEditor';
  import ResumePreview from './components/ResumePreview';
  import icons from './assets/icons'

  export default {
    name: 'app',
    data: function(){
      return {
       
      }
    },
    components:{Topbar,ResumePreview,ResumeEditor},
    created(){
      // 在<body>后插入svg标签
      document.body.insertAdjacentHTML('afterbegin',icons);   
      //insertHtml(where,el,html),在指定的地方插入html标签语句
      //where：插入位置。包括beforeBegin,beforeEnd,afterBegin,afterEnd。
      //el：用于参照插入位置的html元素对象
      //html：要插入的html代码

    }
  }
</script>

<style lang="scss">
  .page{
    min-width:1024px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #eaebec;
    >main{
      flex-grow: 1;
    }
    >main{
      min-width: 1024px;
      max-width: 1440px;
      margin-top: 16px;
      margin-bottom: 16px;
      display: flex;
      width:100%;   /*不加的话，main虽然居中了，但是宽度变成1024，而非1440*/
      align-self: center;
      justify-content: space-between;
      padding:0 16px;
      }
  }
 

  #resumeEditor{
    width:35%;  
    background: #444;
  }
  #resumePreview{
    flex-grow: 1;
    margin-left: 16px;
    background: #777;
  }
  svg.icon{
    height:1em;
    width:1em;
    fill:currentColor;   //常规的HTML-CSS中，是没有fill属性的。fill属性只在XML-SVG格式中存在
    vertical-align:-0.1em;
    font-size:16px;
  }
</style>
