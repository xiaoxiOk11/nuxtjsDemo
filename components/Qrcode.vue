<template>
    <div class="my-qrcode-container">
        <!-- 我们将把二维码渲染到一个 canvas 或 img 元素上 -->
        <canvas v-if="renderAs === 'canvas'" ref="canvasEl"></canvas>
        <img v-if="renderAs === 'img'" :src="imgSrc" alt="QR Code" />
        <div v-if="!value" class="placeholder">
            <p>No value provided for QR Code.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import QRCode from 'qrcode';

// 定义组件接收的 props
const props = defineProps({
    value: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        default: 200,
    },
    // 可以选择渲染成 canvas 还是 img (img 兼容性更好)
    renderAs: {
        type: String as () => 'canvas' | 'img',
        default: 'img',
    }
});

const canvasEl = ref<HTMLCanvasElement | null>(null);
const imgSrc = ref<string>('');

// 定义一个生成二维码的函数
const generateQR = async () => {
    if (!props.value) {
        imgSrc.value = '';
        return;
    }

    try {
        const options = {
            width: props.size,
            margin: 1, // 边距
            errorCorrectionLevel: 'H' as 'H',
        };

        if (props.renderAs === 'canvas' && canvasEl.value) {
            await QRCode.toCanvas(canvasEl.value, props.value, options);
        } else {
            // toDataURL 返回一个 base64 编码的图片字符串
            imgSrc.value = await QRCode.toDataURL(props.value, options);
        }
    } catch (err) {
        console.error('Failed to generate QR code:', err);
    }
};

// 关键：只在客户端挂载后才执行生成操作
onMounted(() => {
    generateQR();
});

// 监听 value 的变化，动态更新二维码
watch(() => props.value, () => {
    generateQR();
});
</script>

<style scoped>
.my-qrcode-container {
    display: inline-block;
}

.placeholder {
    width: 200px;
    height: 200px;
    border: 1px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #999;
}
</style>