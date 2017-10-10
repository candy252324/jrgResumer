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

  export default {
    name: 'app',
    data: function(){
      return {
       
      }
    },
    components:{Topbar,ResumePreview,ResumeEditor},
  }
</script>

<style>
  .page{
    min-width:1024px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #eaebec;
  }
  .page>main{
    flex-grow: 1;
  }
  .page>main{
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

  #resumeEditor{
    width:35%;  
    background: #444;
  }
  #resumePreview{
    flex-grow: 1;
    margin-left: 16px;
    background: #777;
  }
</style>
