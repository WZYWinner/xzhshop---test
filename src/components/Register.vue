<template>
  <div id="register" class="fillcontain">
    <div id="app">
      <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="40"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="5"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="particles-js"
      >
      </vue-particles>
    </div>
    <div class="info">
      <p style="color:#fff">芯智汇商城</p>
      <div class="registerInput">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
        <el-form-item label="账号" prop="username">
            <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $("#register").css("height", $(document).height());
    $(".particles-js").css("height", $(document).height());
  },
  data() {
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功!');
            this.$router.push('/login')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style>
body {
  margin: 0;
}
.fillcontain {
  /* height: 100%; */
  width: 100%;
  background: #33425a;
}
.particles-js{
  height: 100%;
}
.info {
  /* width: 300px; */
  /* height: 150px; */
  /* background: #409EFF; */
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.info p {
  font-size: 34px;
  color: #fff;
  text-align: center;
}
.registerInput {
  border: 1px solid #fff;
  padding: 20px 60px 0 10px;
  /* width: 320px; */
  /* height: 210px; */
  border-radius: 10px;
  background: rgb(231, 231, 231);
}
</style>