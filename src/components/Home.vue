<template>
    <div>
        <el-button type="info" round @click="logout">退出</el-button>
    </div>
</template>
<script>
export default {
    methods: {
        logout(){
            window.sessionStorage.setItem("token","");
            this.$router.push('/login');
        }
    },
}
</script>
<style lang="less" scoped>
    
</style>