
<template> 
  <h1>Vue {{animal}} !!</h1>
  <h2>{{ food }}</h2>
  <input type="text" v-model="food" />
  <div v-html="alertMessage"></div>
  <!-- 주의 v-html을 사용할때는 반드시 확실한 출처에만 사용  subHtml 사용예시  -->
  <!-- <div v-html="subHtml"></div> -->
  <a v-bind:href="UrlSource">dd</a>
  <hr />
  <a :href="UrlSource">업데이트 이후 콜론으로 bind 생략가능 </a>
  <hr />
  <a :href="food">{{food}}</a>
  <hr />
  <!-- 동적으로 class 주는방법  -->
  <!-- Object 형식예제 {클래스 : 참/거짓} -->
  <h2 :class="{ red:food==='apple','not-good':food ==='rice'}">원숭이는 {{food}}</h2>
  <!-- v-if -->
  <h2 v-if="age">{{age}}</h2>
  
</template>

<script>


export default {
  name: 'App',
  data:() => {
    return {
      animal:"Monkey",
      food:"banana",
      alertMessage:"<h1>경고입니다!!<h1>",
      // subHtml:`<button onclick="document.querySelector('body').style.display='none'">구독하기</button>`, 
      UrlSource:`https://www.naver.com`,
      age:10    
    };
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.orange {
  color: orange;
}
.cyan{
  color: cyan;
}
.red{
  color: red;
}
.not-good{
  text-decoration: line-through ;
}
</style>
