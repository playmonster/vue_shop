<template>
 <div class="login">
    <div class="login_box">
        <div class="login_box1">
            <div class="login_picture">
                <img src="../assets/login_logo.jpg" alt="">
            </div>
            <el-form :model="userForm" :rules="userFormrules" ref="userFormref" label-width="0px">
                <el-form-item  prop="username">
                    <el-input v-model="userForm.username" placeholder="请输入用户名" 
                    prefix-icon="iconfont icon-chongwumao"></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input v-model="userForm.password" type="password" placeholder="请输入密码" 
                    prefix-icon="iconfont icon-password"></el-input>
                </el-form-item>
                <div class="btns">
                    <el-button type="primary" round @click="login">登录</el-button>
                    <el-button type="info" round @click="resetForm">重置</el-button>
                </div>
            </el-form>
        </div>
    </div>
 </div>
</template>
<script>
export default {
    data() {
        return {
            userForm:{
                username:'',
                password:''
            },
            userFormrules:{
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    // { min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ]
            },
        }
    },
    methods: {
        // 重置表单验证数据
        resetForm(){
            console.log(this);//this就是表单的引用
            this.$refs.userFormref.resetFields();
        },
        login(){
            this.$refs.userFormref.validate(async (val)=>{
                if(!val) return;
                const {data:res} = await this.$http.post('login',this.userForm);
                console.log(res);
                if (res.meta.status!=200) {
                    this.$message.error("登录失败");
                }
                window.sessionStorage.setItem("token",res.data.token);
                this.$router.push('/home');
                
            })
           
        }
    },
}
</script>
<style lang="less" scoped>
.login{
    width: 100%;
    height: 720px;
    background: url(../assets/login.jpg);  
    background-size: 100% 720px;
    position: relative;
    .login_box{
        width: 100%;
        height: 720px;
        position: absolute;    
        background: rgba(225, 225, 225, 0.3);  
        .login_box1{
            // border: 1px solid red;
            width: 400px;
            height: 250px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            .login_picture{
                width: 100px;
                height: 100px;
                // margin: 0 auto;
                position: absolute;
                top: -50px;
                left: 150px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .el-form{
                padding: 0 30px;
                width: 100%;
                box-sizing: border-box;
                position: absolute;
                bottom: 10px;
                // display: flex;
                // justify-content: space-between;
                .btns{
                    display: flex;
                    justify-content: flex-end;
                }
            }

        }
    }
}

</style>
