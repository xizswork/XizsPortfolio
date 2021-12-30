<template>
  <div class="wrapper">
    <div class="container">
      <div class="heading">
        <h1>Profile</h1>
      </div>
      <div class="content">
        <div class="content-head">
          <v-avatar size="100" class="image d-none d-sm-block">
            <img src="@/assets/image/profile-icon.jpg" />
          </v-avatar>
          <v-avatar class="image d-sm-none">
            <img src="@/assets/image/profile-icon.jpg" />
          </v-avatar>
          <h2 class="name">Nishi Yuta</h2>
        </div>
        <div class="content-body">
          <p class="d-none d-sm-block">
            愛犬と日本酒をこよなく愛するフロントエンドエンジニア。<br />
            IT業界の変化の速さと刺激に惹かれてIT業界へ転職。<br />
            フロントエンドを中心にWeb制作を経験。<br />
            一緒に働きたくなる人間性、美しさを意識したソースコード、<br />
            チームで働く力を磨くために日々精進しています。
          </p>
          <div class="d-sm-none content-text">
            <p>
              愛犬と日本酒をこよなく愛する<br />
              フロントエンドエンジニア。
            </p>
            <p>
              IT業界の変化の速さと刺激に<br />
              惹かれてIT業界へ転職。<br />
              フロントエンドを中心に<br />
              Web制作を経験。
            </p>
            <p>
              一緒に働きたくなる人間性、<br />
              美しさを意識したソースコード、<br />
              チームで働く力を磨くために<br />
              日々精進しています。
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
  margin-bottom: 1.5rem;
}
.content {
  display: flex;
  justify-content: center;
}
.content-head {
  max-width: 240px;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-right: 24px;
}
.image {
  margin: 0 16px 16px 16px;
}
.name {
  font-size: 24px;
  font-weight: bold;
}
.content-body {
  line-height: 2;
}

@media screen and (max-width: 960px) {
  .content {
    flex-flow: column;
    align-items: center;
  }
  .content-head {
    flex-flow: row;
    max-width: none;
    margin-bottom: 16px;
    margin-right: 0;
  }
  .image {
    margin: 0 16px 0px 0px;
  }
  .name {
    font-size: 36px;
  }
  .content-body {
    margin-left: 0;
    text-align: center;
  }
}
</style>