<template>
    <div class="container">
        <!-- <FootLink /> -->
        <FooterLink />
        <div class="center">
            <div v-for="item in 4" :key="item">
                <img src="../assets/images/footer/200.jpg" class="f1">
            </div>
        </div>
        <div class="center">
            <div v-for="item in 6" :key="item">
                <img src="../assets/images/footer/l2.gif" class="f2">
            </div>
        </div>
        <div class="footer-nav   clearfix" title="">
            <a target="_blank"  title="">公司简介</a><span class="sep"
                title="">|</span>
            <a target="_blank"  title="">快递查询</a><span class="sep" title="">|</span>
            <a target="_blank"  title="">联系我们</a><span class="sep"
                title="">|</span>
            <span title="">探索平台隶属于上海泰坦科技股份有限公司</span>

        </div>
        <div class="footer-copyright   clearfix" style="text-align:center;" title="">
            <span title="">Copyright (C) 探索 2011-2025, All Rights Reserved</span><span class="sep" title="">|</span>
            <span title=""><a target="_blank"  title="">沪ICP备07508754号-5</a></span><span class="sep" title="">|</span>公安机关备案号 31010402004248<span
                class="sep" title="">|</span>沪(徐)应急管危经许[2022]201797(QFYS)

        </div>
        <div class="center">
            <div v-for="item in 5" :key="item">
                <img src="../assets/images/footer/bot.jpg" class="f3">
            </div>
        </div>
    </div>
</template>

<script setup>
import FooterLink from './FooterLink.vue'
</script>

<style lang="scss" scoped>
.container {
    margin-top: 40px;
    padding-bottom: 40px;
    font-size: 12px;
    .footer-copyright{
        margin-top: 10px;
        text-align: center;
    }
    .footer-nav{
        text-align: center;
            margin-top: 30px;
           
               
    }
}

.sep{
    margin: 0px 10px;
}
a {
    display: inline-block;
    color: #666666;
    text-decoration: none;
}

.center {
    gap: 25px;
    margin-top: 20px;
    .f1 {
        width: 200px;
        height: 50px;
    }

    .f2 {
        width: 100px;
        height: 30px;
    }

    .f3 {
        width: 100px;
        height: 30px;
    }
}
</style>