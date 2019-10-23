<template>
  <div class="child-page">
    子页面
    <div class="test"></div>
    <div @click="test">
      <div class="test2"></div>文字标题
    </div>
    <div>
      <img style="width:100px;height:100px;" class="test3" src="http://baiducdn.pig66.com/uploadfile/2017/0511/20170511074941292.jpg"/><!--
      --><span style="display: inline-block;border: 1px solid;">文字标题</span>
    </div>
    <svg viewBox="0,0,100,100" width="100px" height="100px">
      <path d="M50,50 m0,-47 a47,47 0 1 1 0,94 a47,47 0 1 1 0,-94" style="stroke-width: 5px;stroke: #ccc;fill:transparent;"></path>
      <path class="change" d="M50,50 m0,-47 a47,47 0 1 1 0,94 a47,47 0 1 1 0,-94" style="stroke-width: 6px;stroke: blue;stroke-linecap:round;fill:transparent;stroke-dasharray: 282.6px;stroke-dashoffset: 56.4px;"></path>
    </svg>
  </div>
</template>

<script>
import util from '../assets/js/util';

export default {
  name: 'HelloWorld',
  mounted(){
    console.log(util.formateDate('2019.09.11','yyyy.MM.dd'));
    document.body.webkitRequestFullscreen()
    document.body.requestFullscreen()
  },
  methods:{
    test(){
      window.location.href='./friend.html';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/scss/mixin/index';
  .test{
    @include square(99,20);
    background: #ccc;
    @include border-thin(bottom,red);
    margin-bottom: torem(20);
  }
  .test2{
    @include triangle(right,20);
  }
  .change{
    animation: a 5s linear forwards;
  }
  @keyframes a {
    0%{
      stroke-dashoffset:282.6px;
    }
    100%{
      stroke-dashoffset:56px;
    }
  }
</style>
