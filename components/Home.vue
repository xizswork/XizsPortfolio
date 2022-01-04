<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <div class="heading">
          <h1>Nishi Yuta</h1>
        </div>
        <div class="subHeading">
          <p>I'm Front-end engineer</p>
        </div>
      </div>
    </div>
    <div class="background">
      <div
        v-for="i in 10"
        :key="i"
        class="bubbles">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #f0f0f0, #ffffff); 
  position: relative;
}
.container {
  width: 90%;
}
.heading {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}
.subHeading {
  font-size: 2.5vw;
  font-weight: lighter;
  text-align: center;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.background div{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: #dfdfdf80;
  animation: floating 25s linear infinite;
  bottom: -150px;    
}
.background div:nth-child(1){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}
.background div:nth-child(2){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}
.background div:nth-child(3){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}
.background div:nth-child(4){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}
.background div:nth-child(5){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}
.background div:nth-child(6){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}
.background div:nth-child(7){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}
.background div:nth-child(8){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}
.background div:nth-child(9){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}
.background div:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}
@keyframes floating {
  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 30%;
  }
  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>