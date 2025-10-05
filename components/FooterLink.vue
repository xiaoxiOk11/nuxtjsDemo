<template>
    <footer class="site-footer">
        <div class="footer-content">
            <!-- 使用 v-for 循环遍历数据，动态生成每个区块 -->
            <div v-for="section in footerSections" :key="section.title" class="footer-column">
                <h4>{{ section.title }}</h4>
                <ul>
                    <li v-for="link in section.links" :key="link.text">
                        <a :href="link.url">{{ link.text }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';
// 将页脚的链接数据结构化，便于维护和管理
const footerSections = ref([
    {
        title: '新手入门',
        links: [
            { text: '会员制度', url: '#' },
            { text: '购物指南', url: '#' },
            { text: '我的探索', url: '#' },
            { text: '交易条款', url: '#' },
        ],
    },
    {
        title: '支付说明',
        links: [
            { text: '付款周期', url: '#' },
            { text: '付款方式', url: '#' },
            { text: '账户管理', url: '#' },
            { text: '发票制度', url: '#' },
        ],
    },
    {
        title: '配送说明',
        links: [
            { text: '配送说明', url: '#' },
            { text: '商品验货', url: '#' },
        ],
    },
    {
        title: '售后服务',
        links: [
            { text: '退换货政策', url: '#' },
            { text: '退换货流程', url: '#' },
        ],
    },
    {
        title: '帮助中心',
        links: [
            { text: '用户注册', url: '#' },
            { text: '找回密码', url: '#' },
            { text: '联系客服', url: '#' },
        ],
    },
    {
        title: '关于探索',
        links: [
            { text: '探索介绍', url: '#' },
            { text: '合作伙伴', url: '#' },
            { text: '探索期刊', url: '#' },
        ],
    },
]);
</script>

<style lang="scss" scoped>
// 定义颜色和尺寸变量，方便统一修改
$color-text-title: #333;
$color-text-link: #666;
$color-border-top: #e0e0e0;
$color-border-separator: #ccc;
$font-size-title: 16px;
$font-size-link: 14px;

.site-footer {
    width: 100%;
    padding: 40px 0;
    border-top: 1px solid $color-border-top;
    background-color: #fff;
    // 使用常见的无衬线字体，优先使用中文字体
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Microsoft YaHei", "Hiragino Sans GB", sans-serif;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center; // 将所有列作为一个整体居中
    align-items: flex-start; // 确保所有列从顶部对齐
}

.footer-column {
    text-align: left;
    padding: 0 45px; // 为每列左右设置内边距，创造出列间距

    // 对除了第一列之外的所有列，添加左边框作为分隔线
    &:not(:first-child) {
        border-left: 1px dotted $color-border-separator;
    }

    h4 {
        margin-top: 0;
        margin-bottom: 25px;
        font-size: $font-size-title;
        font-weight: 600; // 字体加粗
        color: $color-text-title;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            margin-bottom: 15px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    a {
        font-size: $font-size-link;
        color: $color-text-link;
        text-decoration: none;
        transition: color 0.2s ease-in-out;

        // 鼠标悬停时改变颜色并添加下划线
        &:hover {
            color: darken($color-text-link, 20%);
            text-decoration: underline;
        }
    }
}
</style>