<template>
  <div class="category-panel">
    <div class="main-categories">
      <ul>
        <li v-for="category in categories" :key="category.id" :class="{
          active: activeCategory && activeCategory.id === category.id,
        }" @mouseenter="handleCategoryHover(category)">
          <a :href="category.id">
            {{ category.name }}
          </a>
        </li>
      </ul>
    </div>

    <!--  -->
    <!-- 右侧子分类详情 -->
    <div v-if="activeCategory" class="sub-categories-panel">

      <div class="sub-group">
        <div class="sub-group-title">
          <div>{{ activeCategory.subGroups.title }}</div>
        </div>
        <div class="sub-group-items">
          <div v-for="item in activeCategory.subGroups.items" :key="item">
            <div class="linkEl" :underline="false">
              <a :href="activeCategory.id">
                {{ item }}
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// 在你的 <script setup> 中定义这个数据
const categories = ref([
  {
    id: '#c2F',
    name: "2F仪器耗材",
    subGroups:
    {
      id: 101,
      title: "2F仪器耗材",
      items: [
        "生化试剂·IVD原料",
        "生化试剂·IVD原料",
        "细胞培养·分析",
        "工具酶·分子生物学",
        "抗体·抗原·重组蛋白",
        "蛋白表达·纯化·分析",
        "微生物培养·鉴定",
        "药物研发·工艺开发",
        "抑制剂·激动剂·拮抗剂"
      ],
    },
  },
  {
    id: '#c3F',

    name: "3F安全防护",
    subGroups:
    {
      id: 101,
      title: "3F安全防护",
      items: [
        "生化试剂·IVD原料",
        "生化试剂·IVD原料",
        "细胞培养·分析",
        "工具酶·分子生物学",
        "抗体·抗原·重组蛋白",
        "蛋白表达·纯化·分析",
        "微生物培养·鉴定",
        "药物研发·工艺开发",
        "抑制剂·激动剂·拮抗剂"
      ],
    },
  },

  {
    id: '#c4F',

    name: "4F化学合成",
    subGroups:
    {
      id: 101,
      title: "4F化学合成",
      items: [
        "生化试剂·IVD原料",
        "生化试剂·IVD原料",
        "细胞培养·分析",
        "工具酶·分子生物学",
        "抗体·抗原·重组蛋白",
        "蛋白表达·纯化·分析",
        "微生物培养·鉴定",
        "药物研发·工艺开发",
        "抑制剂·激动剂·拮抗剂"
      ],
    },
  },
  {
    id: '#c5F',

    name: "5F生命科学",
    subGroups:
    {
      id: 101,
      title: "5F生命科学",
      items: [
        "生化试剂·IVD原料",
        "生化试剂·IVD原料",
        "细胞培养·分析",
        "工具酶·分子生物学",
        "抗体·抗原·重组蛋白",
        "蛋白表达·纯化·分析",
        "微生物培养·鉴定",
        "药物研发·工艺开发",
        "抑制剂·激动剂·拮抗剂"
      ],
    },
  },
  {
    id: '#c6F',

    name: "6F高纯材料",
    subGroups:
    {
      id: 101,
      title: "6F高纯材料",
      items: [
        "生化试剂·IVD原料",
        "生化试剂·IVD原料",
        "细胞培养·分析",
        "工具酶·分子生物学",
        "抗体·抗原·重组蛋白",
        "蛋白表达·纯化·分析",
        "微生物培养·鉴定",
        "药物研发·工艺开发",
        "抑制剂·激动剂·拮抗剂"
      ],
    },
  },
  {
    id: '#c7F',

    name: "7F分析标物",
    subGroups:
    {
      id: 101,
      title: "7F分析标物",
      items: [
        "生化试剂·IVD原料",
        "生化试剂·IVD原料",
        "细胞培养·分析",
        "工具酶·分子生物学",
        "抗体·抗原·重组蛋白",
        "蛋白表达·纯化·分析",
        "微生物培养·鉴定",
        "药物研发·工艺开发",
        "抑制剂·激动剂·拮抗剂"
      ],
    },
  },
  {
    id: '#c8F',

    name: "8F通用仪器",
    subGroups:
    {
      id: 101,
      title: "8F通用仪器",
      items: [
        "生化试剂·IVD原料",
        "生化试剂·IVD原料",
        "细胞培养·分析",
        "工具酶·分子生物学",
        "抗体·抗原·重组蛋白",
        "蛋白表达·纯化·分析",
        "微生物培养·鉴定",
        "药物研发·工艺开发",
        "抑制剂·激动剂·拮抗剂"
      ],
    },
  },
  {
    id: '#c9F',

    name: "9F分析仪器",
    subGroups:
    {
      id: 101,
      title: "9F分析仪器",
      items: [
        "生化试剂·IVD原料",
        "生化试剂·IVD原料",
        "细胞培养·分析",
        "工具酶·分子生物学",
        "抗体·抗原·重组蛋白",
        "蛋白表达·纯化·分析",
        "微生物培养·鉴定",
        "药物研发·工艺开发",
        "抑制剂·激动剂·拮抗剂"
      ],
    },
  },
  {
    id: '#c10F',

    name: "10F科研软件",
    subGroups:
    {
      id: 101,
      title: "10F科研软件",
      items: [
        "生化试剂·IVD原料",
        "生化试剂·IVD原料",
        "细胞培养·分析",
        "工具酶·分子生物学",
        "抗体·抗原·重组蛋白",
        "蛋白表达·纯化·分析",
        "微生物培养·鉴定",
        "药物研发·工艺开发",
        "抑制剂·激动剂·拮抗剂"
      ],
    },
  },

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
  position: fixed;
  top: 190px;
  left: 0;
  // min-width: 1210px;
  // height: 400px; /* 根据你的设计调整高度 */
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", Arial, sans-serif;
}

/* 左侧主分类 */
.main-categories {

  width: 120px;
  background-color: #006ecd;
  // border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      border-bottom: 1px solid #fff;

      &:last-child {
        border-bottom: none;
      }

      a {
        display: block;
        padding: 10px;
        color: #fff;
        text-decoration: none;
        text-align: center;
        font-size: 14px;

        &:hover {
          background-color: #0056b3;
        }
      }
    }
  }
}


/* 右侧子分类 */
.sub-categories-panel {
  flex: 1;
  //   width: 100%;
  padding: 10px 30px;
  // height: 380px;
  background-color: #fff;

  z-index: 999;
  width: 200px;
  border: 1px solid #006ecd;
  border-left: none;
  overflow: scroll;

}

.sub-group {
  // display: flex;
  // align-items: baseline;
  margin-bottom: 20px;
  font-size: 14px;
}

.sub-group-title {
  flex-shrink: 0;
  /* 防止被压缩 */
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  color: #006ecd;
}

.sub-group-items {
  // flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;

  ul {
    list-style: none;
  }
}

.sub-group-items .linkEl {
  text-align: left;
  a {
    color: #9b9c9f;
  }
  a:hover {
    color: #409eff;
  }

  line-height: 2;
  font-size: 12px;
}
</style>
