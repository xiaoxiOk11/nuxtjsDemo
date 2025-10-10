<template>

    <div>
        <el-button @click="handleMessage">
            button
        </el-button>
   
        <div>
            <img src="https://v1.imgstoragebobo.com/storage/hanhan/1.jpg" alt="">

        </div>
    </div>
</template>


<script setup>
const handleMessage = () => {
    ElMessage({
        message: '这是一条消息提示',
        type: 'success',
    });
};
useSeoMeta({
    title: '注册',
    description: '注册页面',
    ogTitle: '注册',
    ogDescription: '注册页面123123',
    ogImage: 'https://v1.imgstoragebobo.com/storage/hanhan/1.jpg', // 替换为实际图片路径
    twitterTitle: '注册',
    twitterDescription: '注册页面',
    twitterImage: 'https://v1.imgstoragebobo.com/storage/hanhan/1.jpg' // 替换为实际图片路径
})
</script>