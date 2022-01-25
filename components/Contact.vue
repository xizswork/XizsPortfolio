<template>
  <div class="wrapper">
    <div class="top-line" />
    <div class="container">
      <div class="content">
        <h1 class="contact-heading">
          Contact
        </h1>
        <div class="contact-body">
          <p>
            最後までご覧いただきありがとうございます。<br />
            このサイトや私について何かコメントがありましたら、<br />
            下記フォームをご利用ください。
          </p>
          <div class="text-field-container">
            <div class="text-field">
              <v-text-field label="Name" />
            </div>
            <div class="text-field">
              <v-text-field label="Email" />
            </div>
          </div>
          <div class="text-area-container">
            <v-textarea
              label="Comment"
              rows="3"
            />
          </div>
          <div class="btn-container">
            <v-btn block>
              送信
            </v-btn>
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
}
.container {
  margin: 0 2rem;
  padding: 0 2rem;
}
.contact-heading  {
  position: relative;
  font-family: "ExodusDemo-Sharpen",serif;
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}
.contact-body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  line-height: 2;
}
.contact-body p {
  width: 400px;
}
.text-field-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
}
.text-area-container {
  display: flex;
  align-items: center;
  width: 400px;
  margin-bottom: 24px;
}
.btn-container {
  width: 400px;
}
.top-line {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 100;
  height: 30px;
  width: 2px;
  border-left: 1px solid #221f20;
}
</style>