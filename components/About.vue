<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">
        <div class="heading">
          <h1>About this site</h1>
        </div>
        <div class="content-text">
          <p class="d-none d-sm-block">
            このサイトはエンジニアNishi Yutaのポートフォリオサイトです。<br />
            これまでに関わった制作物、身につけたスキルをまとめています。<br />
            私のことをもっと深く知ってほしいと思って作りました。<br />
            少しでも興味を持っていただいたら嬉しく思います。
          </p>
          <div class="d-sm-none">
            <p>
              このサイトはエンジニアNishi Yutaの<br />
              ポートフォリオサイトです。
            </p>
            <p>
              これまでに関わった制作物、<br />
              習得したスキルをまとめています。
            </p>
            <p>
              私のことを少しでも知ってほしいと<br />
              思って作りました。
            </p>
            <p>
              もし興味を持っていただいたら<br />
              嬉しく思います。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  margin: 0 2rem;
  padding: 0 2rem;
}
.heading {
  font-size: clamp(20px, 5vw, 36px);
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}
.content-text {
  text-align: center;
  line-height: 2;
}
</style>