<template>
  <div class="category-panel" @mouseout="activeCategory = false">
    <!-- 左侧主分类列表 -->
    <div class="main-categories">
      <ul>
        <li
          v-for="category in categories"
          :key="category.id"
          :class="{
            active: activeCategory && activeCategory.id === category.id,
          }"
          @mouseenter="handleCategoryHover(category)"
        >
          {{ category.name }}
        </li>
      </ul>
    </div>

    <!-- 右侧子分类详情 -->
    <div v-if="activeCategory" class="sub-categories-panel">
      <div
        v-for="group in activeCategory.subGroups"
        :key="group.id"
        class="sub-group"
      >
        <div class="sub-group-title">
          <el-link type="primary" :underline="false">{{ group.title }}</el-link>
        </div>
        <div class="sub-group-items">
          <template v-for="(item, index) in group.items" :key="item">
            <el-link :underline="false">{{ item }}</el-link>
            <!-- 在非最后一个元素后面添加分割线 -->
            <el-divider
              v-if="index < group.items.length - 1"
              direction="vertical"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 在你的 <script setup> 中定义这个数据
const categories = ref([
  {
    id: 1,
    name: "计量器具 · 实验器具 · 常规耗材",
    subGroups: [
      {
        id: 101,
        title: "细胞培养",
        items: [
          "细胞培养基",
          "细胞培养皿",
          "细胞培养板",
          "玻璃培养皿",
          "细胞筛网",
        ],
      },
      {
        id: 102,
        title: "微生物学",
        items: ["细菌培养皿", "接种环", "接种针", "涂布棒", "灭菌袋·牛皮纸"],
      },
    ],
  },
  {
    id: 2,
    name: "生物耗材 · 分析耗材 · 特殊耗材",
    subGroups: [
      {
        id: 201,
        title: "分子生物",
        items: ["冻存管", "离心管盒", "PCR封板膜", "PCR板", "离心管"],
      },
      {
        id: 202,
        title: "组织学·生物通用耗材",
        items: ["载玻片·存储盒", "盖玻片", "深孔板", "透析袋", "病理刀片"],
      },
    ],
  },
  // ... 其他主分类数据
]);

// 用一个 ref 来追踪当前鼠标悬停在哪一个主分类上
const activeCategory = ref(categories.value[0]); // 默认显示第一个

// 更新当前激活的分类
const handleCategoryHover = (category) => {
  activeCategory.value = category;
};
</script>
<style scoped lang="scss">
.category-panel {
  display: flex;
  max-width: 1220px;
  min-width: 1210px;
  height: 390px; /* 根据你的设计调整高度 */
  //   border: 1px solid #e0e0e0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", Arial, sans-serif;
}

/* 左侧主分类 */
.main-categories {
  width: 220px; /* 左侧宽度 */
  background-color: #f5f5f5;
  //   padding: 10px 0;
  border-right: 1px solid #e0e0e0;
  height: 100%;
}
.main-categories ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.main-categories li {
  padding: 10px 20px;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.main-categories li:hover {
  background-color: #fff;
  color: #409eff;
}
.main-categories li.active {
  background-color: #fff;
  color: #409eff;
  font-weight: bold;
}

/* 右侧子分类 */
.sub-categories-panel {
  flex: 1;
  //   width: 100%;
  padding: 10px 30px;
  height: 380px;
  background-color: #fff;
  z-index: 999;
  overflow: scroll;
}
.sub-group {
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
  font-size: 14px;
}
.sub-group-title {
  width: 150px; /* 次级分类标题宽度 */
  flex-shrink: 0; /* 防止被压缩 */
  font-weight: bold;
}
.sub-group-title .el-link {
  font-size: 14px;
  font-weight: bold;
}

.sub-group-items {
  flex: 1;
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  align-items: center;
}
.sub-group-items .el-link {
  color: #606266;
  margin: 0 8px; /* 链接之间的间距 */
  line-height: 1.5;
}
.sub-group-items .el-link:hover {
  color: #409eff;
}
.el-divider--vertical {
  height: 12px;
  margin: 0;
}
</style>
