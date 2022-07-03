<template>
	<div class="login-container">
		<!--引入title -->
		<Title :title="titleText"></Title>

  	<!-- banner区域 -->
		<div class="banner">
			<img src="@/assets/img/logo.png" alt=""> 
			<p class="title-text">交通运输水利培训</p>
		</div>

		<!-- content内容区域 -->
		<div class="content">
			<div class="form-box">
				<div class="form-title">
					 <span>绑定手机号</span>
				</div>

				<div class="form-main">
						<van-field
							v-model="sms"
							center
							clearable
							left-icon="phone-o"
							placeholder="请输入报名手机号"
						>
						</van-field>
						
						<div class="border-color px1">
							<van-field 
								v-model="code"
								center
								clearable
								border="true"
								placeholder="请输入密码"
							>
								<template #left-icon>
									<i class="iconfont">&#xe669;</i>
								</template>
							</van-field>
						</div>
				
				</div>

				<div class="btn-box">
						<van-button 
						 type="primary"
						 size="large"
						 block
						 color="linear-gradient(to right, #00b9ff, #0d92ff)"
						 @click="login"
						 >确定
						</van-button>
						<p class="forget-pwd" @click="forgetPwd">忘记密码？</p>
				</div>

			</div>
		</div>
		<!-- footer底部区域 -->
		 <div class="footer">
			<div class="contact px1">
				<span class="contact-us">联系我们</span>
			</div>
			<p class="tele">(010) 65290551/0552/0550/9392</p>
		 </div>
	</div>
</template>

<script>
import Title from "@/components/title/title.vue";
export default {
  components: {
    Title
  },
  data() {
    return {
      titleText: "登录",
      sms: "",
      code: ""
    };
  },
  methods: {
    login() {
      console.log(111);
    },
    forgetPwd() {
      this.$router.push("/forget");
    }
  }
};
</script>

<style lang="less" scoped>
@ThemeColor: #0082eb;
.login-container {
  .banner {
    padding: 6.9333vw 0 0 0;
    height: 57.8667vw;
    background: #1ba8ff;
    text-align: center;
    img {
      width: 11.8667vw;
      height: 12.1333vw;
    }
    .title-text {
      margin-top: 4.5333vw;
      font-size: 5.3333vw;
      line-height: 5.3333vw;
      color: #fff;
      font-weight: bold;
    }
  }
  .content {
    position: relative;
    height: 74.6667vw;
    .form-box {
      position: absolute;
      top: -21.6vw;
      left: 50%;
      transform: translateX(-50%);
      height: 80vw;
      width: 93.3333vw;
      padding: 5.0667vw 7.4667vw 0;
      text-align: center;
      border-radius: 2.4vw;
      background: #fff;
      box-shadow: 0 0 2vw 0 rgba(36, 157, 254, 0.1);
      .form-title {
        margin-bottom: 4.6667vw;
        font-size: 4vw;
        line-height: 4vw;
        color: @ThemeColor;
        & > span {
          padding-bottom: 2.6667vw;

          border-bottom: 0.2667vw solid @ThemeColor;
        }
      }
      .form-main {
        height: 39.3333vw;
        .border-color {
          &::after {
            background: #ebedf0;
          }
        }
      }
      .btn-box {
        .forget-pwd {
          margin-top: 4.2667vw;
          font-size: 3.7333vw;
          color: @ThemeColor;
        }
      }
    }
  }
  .footer {
    padding: 0 2vw;
    text-align: center;
    .contact {
      position: relative;
      height: 4.6667vw;
      font-size: 4.6667vw;
      line-height: 4.6667vw;
      font-weight: bold;
      &::after {
        bottom: initial;
        top: 50%;
        transform: translateY(-50%) scaleY(0.5);
      }
      .contact-us {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 2.6667vw;
        z-index: 1;
        background: #fff;
      }
    }
    .tele {
      margin-top: 6.9333vw;
      font-size: 3.2vw;
      line-height: 3.2vw;
    }
  }

  .van-cell {
    padding: 4.6667vw 0 2.6667vw;
  }
  .van-button--primary {
    background: @ThemeColor;
    border: none;
  }
}
</style>
