<template>
  <div class="background-wrapper">
    <div class="background-inner">
      <div class="background-animationA" />
      <div class="background-animationB" />
      <div class="background-animationC" />
      <div class="background-animationD" />
      <div class="background-animationE" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-wrapper {
  position: fixed;
  top: 0;
  z-index: 0;
  height: 100vh;
  width: 100%;
}
.background-inner {
  position: relative;
  height: 100%;
  width: 100%;
}
.background-animationA {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  background-color: #dfdfdf;
  opacity: 0.4;
  animation: animationA 60s ease-in infinite
}
.background-animationB {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  clip-path: polygon(0 100%, 50% 100%, 100% 100%, 0 100%, 0 100%);
  background-color: #dfdfdf;
  opacity: 0.4;
  animation: animationB 30s ease-in infinite
}
.background-animationC {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  clip-path: polygon(0 0, 50% 0, 100% 100%, 80% 100%);
  background-color: #dfdfdf;
  opacity: 0.4;
  animation: animationC 20s ease-in infinite
}
.background-animationD {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  clip-path: polygon(100% 100%, 100% 100%, 0 100%, 0 100%, 100% 100%);
  background-color: #dfdfdf;
  opacity: 0.4;
  animation: animationD 20s ease-in infinite
}
.background-animationE {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  clip-path: polygon(100% 100%, 100% 100%, 0 100%, 0 100%, 100% 100%);
  background-color: #dfdfdf;
  opacity: 0.4;
  animation: animationE 120s ease-in infinite
}
@keyframes animationA {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%, 0 100%);
  }
  10% {
    clip-path: polygon(0 0, 100% 0, 100% 70%, 40% 100%, 0 100%);
  }
  20% {
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 100%, 0 100%);
  }
  30% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 60%, 0 60%);
  }
  40% {
    clip-path: polygon(0 0, 30% 0, 30% 0, 0 60%, 0 60%);
  }
  50% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0, 0 0);
  }
  60% {
    clip-path: polygon(0 0, 30% 0, 30% 0, 0 60%, 0 60%);
  }
  70% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 60%, 0 60%);
  }
  80% {
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 100%, 0 100%);
  }
  90% {
    clip-path: polygon(0 0, 100% 0, 100% 70%, 40% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%, 0 100%);
  }
}
@keyframes animationB {
  0% {
    clip-path: polygon(0 100%, 50% 100%, 100% 100%, 0 100%, 0 100%);
  }
  10% {
    clip-path: polygon(0 80%, 50% 100%, 100% 100%, 0 100%, 0 100%);
  }
  20% {
    clip-path: polygon(0 80%, 100% 100%, 100% 100%, 0 100%, 0 100%);
  }
  30% {
    clip-path: polygon(0 80%, 100% 50%, 100% 100%, 0 100%, 0 80%);
  }
  40% {
    clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%, 0 0);
  }
  45% {
    clip-path: polygon(70% 0, 100% 50%, 100% 100%, 0 100%, 0 0);
  }
  50% {
    clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%, 0 0);
  }
  55% {
    clip-path: polygon(70% 0, 100% 50%, 100% 100%, 0 100%, 0 0);
  }
  60% {
    clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%, 0 0);
  }
  70% {
    clip-path: polygon(0 80%, 100% 50%, 100% 100%, 0 100%, 0 80%);
  }
  80% {
    clip-path: polygon(0 80%, 100% 100%, 100% 100%, 0 100%, 0 100%);
  }
  90% {
    clip-path: polygon(0 80%, 50% 100%, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 100%, 50% 100%, 100% 100%, 0 100%, 0 100%);
  }
}
@keyframes animationC {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 50%);
  }
  10% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 50%);
  }
  20% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 0);
  }
  30% {
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 20% 100%, 0 0);
  }
  40% {
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 0);
  }
  50% {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 50% 100%, 80% 0);
  }
  60% {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%, 80% 0);
  }
  70% {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%, 100% 0);
  }
  80% {
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 100% 100%, 50% 0);
  }
  90% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 0);
  }
  95% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 50%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%);
  }
}
@keyframes animationD {
  0% {
    clip-path: polygon(100% 100%, 100% 100%, 70% 100%, 0 100%, 100% 100%);
  }
  10% {
    clip-path: polygon(100% 100%, 100% 50%, 70% 100%, 0 100%, 100% 100%);
  }
  20% {
    clip-path: polygon(100% 100%, 100% 50%, 0 100%, 0 100%, 100% 100%);
  }
  30% {
    clip-path: polygon(100% 100%, 100% 0, 0 80%, 0 100%, 100% 100%);
  }
  40% {
    clip-path: polygon(100% 100%, 100% 0, 0 30%, 0 100%, 100% 100%);
  }
  50% {
    clip-path: polygon(100% 100%, 100% 0, 0 0, 0 100%, 100% 100%);
  }
  60% {
    clip-path: polygon(100% 100%, 100% 0, 0 30%, 0 100%, 100% 100%);
  }
  70% {
    clip-path: polygon(100% 100%, 100% 0, 0 80%, 0 100%, 100% 100%);
  }
  80% {
    clip-path: polygon(100% 100%, 100% 50%, 0 100%, 0 100%, 100% 100%);
  }
  90% {
    clip-path: polygon(100% 100%, 100% 50%, 60% 100%, 63% 100%, 100% 100%);
  }
  100% {
    clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%);
  }
}
</style>