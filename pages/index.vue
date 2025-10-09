<template>
    <div @click="showSelectHandle = false">
        <!-- top 开始-->
        <div class="nav-shortcut">
            <div class="clearfix shortcut-bar">
                <div class="floatLeft left-links">
                    <ul>
                        <li class="link-url link-phone"><img src="/images/contect.png" height="22"></li>
                    </ul>
                </div>

                <div class="floatRight right-links">
                    <ul class="clearfix">
                        <li class="link-url" style="width:auto;min-width:390px;text-align:right;padding-right:10px;">
                            <input id="logname" value="" type="hidden">
                            <span id="loginNameInfo" style="display: none;">&nbsp;</span>
                            <span id="loginInfo" style="display: none;"><span id="showNameSpan"
                                    class="login-name-s"></span>：欢迎来到探索网！<a
                                    href="/login/exitLogin.htm">[退出登录]</a></span>

                            <span id="isLogin">
                                <span id="newRegist">
                                    <a id="registerConnection" href="/reg/toReg.htm" class="regist">注册有惊喜</a>

                                </span>
                                <a href="/login/toLogin.htm"><span style="display:inline-block;height:30px;width:5px;"
                                        class="line">&nbsp;</span>[登录]</a>
                            </span>
                        </li>

                        <li class="link-url"><a href="/basket/toBasketList.htm">报价单</a></li>
                        <li class="link-url url-child" id="myTansoole"><a href="/user/userCenter.htm">用户中心</a>
                            <ul class="child-box">
                                <li class="child-list-item"><a class="list-btn" href="" id="myOrder"
                                        target="_blank">我的订单</a></li>
                                <li class="child-list-item" id="myUserCouponUlLi"><a class="list-btn" href=""
                                        id="myUserCoupon" target="_blank">我的评价</a></li>
                                <li class="child-list-item" id="myPendingUlLi"><a class="list-btn" href=""
                                        id="myPending" target="_blank">心愿单</a></li>
                                <li class="child-list-item" id="myIntegralUlLi"><a class="list-btn" href=""
                                        id="myIntegral" target="_blank">收货地址</a></li>
                                <li class="child-list-item"><a class="list-btn" href="" id="myQuote"
                                        target="_blank">浏览历史</a></li>

                            </ul>
                            <i class="arrow-icon"></i>
                        </li>
                        <li class="link-url"><a href="">帮助中心</a></li>

                        <li class="link-url link-app">
                            <i class="mobile-icon"></i>
                            <a href="">手机版探索</a>
                            <div class="clearfix app-code">
                                <span class="top-line"></span>
                                <div class="floatLeft tansoole-code">
                                    <div class="tansoole-code-img"><img src="/images/app-wechat-applet.jpg"></div>
                                    <p>微信小程序</p>
                                </div>
                            </div>
                        </li>
                        <li class="link-url link-lang link-app">
                            <img src="../public/images/lang.png" style="width: 14px;height: 14px;margin-right: 3px;">
                            <a href="">ZH</a>
                            <div class="clearfix app-code">
                                <span class="top-line"></span>
                                <div class="floatLeft ">
                                    <p class="toPointer text_center">ZH</p>
                                    <p class="toPointer text_center">EN</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>


        <div class="search-box-wrap">
            <div class="clearfix search-box">
                <a class="logo" href="">
                    <img src="/images/logo.gif">
                </a>

                <div class="clearfix search-form">

                    <div class="rowFirst">
                        <div class=" search-input">
                            <div style="position: relative; padding-right: 12px;"
                                @click.stop="showSelectHandle = !showSelectHandle">
                                {{ selectVal }}
                                <i class="arrow-icon" style="right: 0;"></i>
                                <!--  -->
                                <ul v-if="showSelectHandle" class="selectContent">
                                    <li @click="selectVal = '产品'" :class="{'activeSelectEl': selectVal == '产品'}">产品</li>
                                    <li @click="selectVal = '百科'" :class="{'activeSelectEl': selectVal == '百科'}">百科</li>
                                </ul>
                            </div>
                            <div class="tooltip">
                                <input class="" type="text" id="demandName1" autocomplete="off"
                                    placeholder="探索编号、原始编号、中文名、分子式、CAS号、MDL号、型号" style="color:#000">
                                <div class="tooltiptext">多个关键词中间加空格隔开，搜索效果更准更快！</div>
                            </div>

                        </div>

                        <a href="javascript:void(0);" class="search-btn" id="sBtn" name="sBtn">搜索</a>
                        <a class="structural-form-btn" href=""><i class="structural-icon"></i>一键报价</a>

                    </div>
                    <div class="hot-search" id="hotSearchDivId">
                        <strong>热门搜索:</strong>
                        <a href="" target="_blank" style="color:red;">聚乙二醇衍生物</a>
                        <a href="" target="_blank" style="color:red;">Adamas/不对称催化系列产品</a>
                        <a href="" target="_blank">Titan/抗化学腐蚀隔膜泵</a>
                        <a href="" target="_blank">Adamas life WB实验蛋白样品制备</a>

                    </div>


                </div>
            </div>
        </div>

        <div class="page-nav">
            <div class="menu">
                <div class="nav fl">
                    <div class="allsort">
                        <div class="mt"><a href="javascript:void(0)">全部商品分类</a></div>
                    </div>


                </div>

                <ul>
                    <li class="topclass321 home" id="indexId"><a href="javascript:void(0)">首 页</a></li>
                    <li class="topclass321" id="indexId2" style="position:relative;"><a
                            href="javascript:void(0)">化学词典</a>
                        <span class="nav-promo-sup">HOT</span>
                    </li>

                    <li class="topclass321" id="indexId3"><a href="javascript:void(0)">行业资讯</a></li>
                    <li class="topclass321" id="indexId5"><a href="javascript:void(0)">技术文档</a>
                        <span class="nav-promo-sup">BOOM</span>
                    </li>
                    <li class="topclass321" id="indexId7">
                        <a href="javascript:void(0)">专家定制</a>
                    </li>
                    <li class="topclass321" id="indexId10"><a href="javascript:void(0)">独立实验室</a>
                        <span class="nav-promo-sup">NEW</span>
                    </li>
                    <li class="topclass321" id="indexId4"><a href="javascript:void(0)">关于我们</a></li>
                </ul>

                <div class="mycar  floatRight">
                    <i class="mycar-icon"></i>
                    <a href="" id="head_shoppingcar">我的购物车<span class="textRed">0</span></a>
                </div>

            </div>
        </div>


        <!-- 全屏图片幻灯 开始 -->
        <div class="hero-banner" id="heroBanner">
            <div class="banner-slides">
                <div class="banner-slide active">
                    <img src="/images/banner/1.jpg" alt="轮播图1" />
                </div>
                <div class="banner-slide">
                    <img src="/images/banner/2.jpg" alt="轮播图2" />
                </div>
                <div class="banner-slide">
                    <img src="/images/banner/1.jpg" alt="轮播图3" />
                </div>
                <div class="banner-slide">
                    <img src="/images/banner/2.jpg" alt="轮播图4" />
                </div>
            </div>
            <button class="banner-arrow banner-arrow-left" type="button" aria-label="上一张"></button>
            <button class="banner-arrow banner-arrow-right" type="button" aria-label="下一张"></button>
            <!-- <div class="banner-indicators">
			<button class="banner-indicator active" type="button" aria-label="第1张"></button>
			<button class="banner-indicator" type="button" aria-label="第2张"></button>
			<button class="banner-indicator" type="button" aria-label="第3张"></button>
			<button class="banner-indicator" type="button" aria-label="第4张"></button>
		</div> -->
        </div>


        <!-- 全屏图片幻灯 结束 -->
        <div class="main-nav">
            <div class="main-left marR10" style="position: relative;">
                <div class="mc" style="border:2px #ededed solid;border-top:0">
                    <div class="sidebar">
                        <div class="navgatorClass1 sidelist" index="0">
                            <span><a>计量器具・实验器具・常规耗材</a></span>
                            <div class="i-list" id="scbr20" style="display:none;">

                                <div class="fenlei">

                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">量器</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1105&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">烧杯</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1108&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">量筒</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1101&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">三角烧瓶/锥形瓶</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1107&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">量杯</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1104&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">容量瓶</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1106&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">胖肚移液管</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1102&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">刻度吸管</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1103&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">千分尺·游标卡尺</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>
                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1149&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">容器·收纳·周转</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1149&gloabSearchVo.branchId=1162&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">试管</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1149&gloabSearchVo.branchId=1160&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">搪瓷盘·桶</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1149&gloabSearchVo.branchId=1150&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">不锈钢方盘</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1149&gloabSearchVo.branchId=1157&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">塑料盒</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1149&gloabSearchVo.branchId=1152&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">不锈钢筐篮</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1149&gloabSearchVo.branchId=1165&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">铝盒·铝瓶</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1149&gloabSearchVo.branchId=1156&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">塑料托盘</a>
                                                </li>
                                            </ul>


                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>
                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1001&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">样品储存·样品管理</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1001&gloabSearchVo.branchId=1019&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">试剂瓶</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1001&gloabSearchVo.branchId=1018&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">自封袋</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1001&gloabSearchVo.branchId=1008&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">样品瓶及盖垫</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1001&gloabSearchVo.branchId=1004&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">小口瓶/窄口瓶</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1001&gloabSearchVo.branchId=1003&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">大口瓶/广口瓶</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1001&gloabSearchVo.branchId=1011&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">氟化瓶·氟化桶</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1001&gloabSearchVo.branchId=1017&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">种子瓶</a>
                                                </li>
                                            </ul>


                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>
                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1057&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">反应·连接·冷凝</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1057&gloabSearchVo.branchId=1073&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">烧瓶</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1057&gloabSearchVo.branchId=1060&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">冷凝管·分馏柱</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1057&gloabSearchVo.branchId=1074&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">烧瓶托</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1057&gloabSearchVo.branchId=1071&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">橡胶管</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1057&gloabSearchVo.branchId=1059&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">乳胶管</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1057&gloabSearchVo.branchId=1075&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">硅胶管·四氟管</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1057&gloabSearchVo.branchId=1061&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">分馏头</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>
                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1081&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">称量·取样·加样</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1081&gloabSearchVo.branchId=1085&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">巴斯德吸管/一次性吸管</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1081&gloabSearchVo.branchId=1096&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">采样杯</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1081&gloabSearchVo.branchId=1095&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">采样拭子</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1081&gloabSearchVo.branchId=1086&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">毛细管</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1081&gloabSearchVo.branchId=1098&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">铝称量盘/铝盘</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1081&gloabSearchVo.branchId=1087&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">洗耳球·大容量手动移液器</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>
                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1031&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">移液·分液</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1031&gloabSearchVo.branchId=1039&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">移液器</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1031&gloabSearchVo.branchId=1034&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">吸头</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1031&gloabSearchVo.branchId=1038&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">瓶口分液器</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1031&gloabSearchVo.branchId=1036&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">塑料移液管</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1031&gloabSearchVo.branchId=1037&gloabSearchVo.rootId=1000&gloabSearchVo.type=1">滴定器</a>
                                                </li>
                                            </ul>


                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>
                                </div>
                            </div>
                        </div>




                        <div class="navgatorClass1 sidelist" index="1">
                            <span><a>生物耗材・分析耗材・特殊耗材</a></span>
                            <div class="i-list" id="scbr21" style="display:none;">

                                <div class="fenlei">

                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1197&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">细胞培养</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1197&gloabSearchVo.branchId=1209&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">细胞培养皿</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1197&gloabSearchVo.branchId=1207&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">细胞培养板</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1197&gloabSearchVo.branchId=1208&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">细胞培养瓶·细胞培养袋</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1197&gloabSearchVo.branchId=1204&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">玻璃培养皿</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1197&gloabSearchVo.branchId=1205&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">细胞刮刀/刮铲</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1197&gloabSearchVo.branchId=1211&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">细胞筛网</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1197&gloabSearchVo.branchId=1200&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">培养皿消毒桶</a>
                                                </li>
                                            </ul>


                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>
                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1286&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">微生物学</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1286&gloabSearchVo.branchId=1294&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">细菌培养皿</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1286&gloabSearchVo.branchId=1289&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">接种环</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1286&gloabSearchVo.branchId=1290&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">接种针</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1286&gloabSearchVo.branchId=1292&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">涂布棒</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1286&gloabSearchVo.branchId=1288&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">接种棒</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1286&gloabSearchVo.branchId=1291&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">接种针·接种环消毒器</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1286&gloabSearchVo.branchId=1293&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">灭菌袋·牛皮纸</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1286&gloabSearchVo.branchId=1287&gloabSearchVo.rootId=1178&gloabSearchVo.type=1">厌氧产气袋</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>

                                </div>
                            </div>
                        </div>




                        <div class="navgatorClass1 sidelist" index="2">
                            <span><a>安全防护・办公用品・装修设备</a></span>
                            <div class="i-list" id="scbr22" style="display:none;">

                                <div class="fenlei">

                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1370&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">个人防护</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1370&gloabSearchVo.branchId=1371&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">一次性手套</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1370&gloabSearchVo.branchId=1392&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">高低温·防化·劳保手套</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1370&gloabSearchVo.branchId=1389&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">隔离器手套</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1370&gloabSearchVo.branchId=1372&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">口罩</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1370&gloabSearchVo.branchId=1387&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">防护面具及配件·滤毒盒</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1370&gloabSearchVo.branchId=1382&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">空呼·长管·电动送风装置</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1370&gloabSearchVo.branchId=1377&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">实验衣·工作服·雨衣</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>
                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1424&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">安全应急·除尘</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1424&gloabSearchVo.branchId=1431&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">急救箱包</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1424&gloabSearchVo.branchId=1434&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">擦镜纸</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1424&gloabSearchVo.branchId=1433&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">擦拭纸</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1424&gloabSearchVo.branchId=1432&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">擦拭布</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1424&gloabSearchVo.branchId=1427&gloabSearchVo.rootId=1327&gloabSearchVo.type=1">吸液棉</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>



                                </div>
                            </div>
                        </div>




                        <div class="navgatorClass1 sidelist" index="3">
                            <span><a>化学合成・催化反应・分子砌块</a></span>
                            <div class="i-list" id="scbr23" style="display:none;">

                                <div class="fenlei">

                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1458&gloabSearchVo.rootId=1455&gloabSearchVo.type=1">基础原料及溶剂</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1458&gloabSearchVo.branchId=1467&gloabSearchVo.rootId=1455&gloabSearchVo.type=1">酸・碱・盐</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1458&gloabSearchVo.branchId=1463&gloabSearchVo.rootId=1455&gloabSearchVo.type=1">桶装・瓶装溶剂</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1458&gloabSearchVo.branchId=1460&gloabSearchVo.rootId=1455&gloabSearchVo.type=1">无水溶剂</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1458&gloabSearchVo.branchId=1462&gloabSearchVo.rootId=1455&gloabSearchVo.type=1">格氏试剂</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1458&gloabSearchVo.branchId=1461&gloabSearchVo.rootId=1455&gloabSearchVo.type=1">有机金属试剂</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1458&gloabSearchVo.branchId=1465&gloabSearchVo.rootId=1455&gloabSearchVo.type=1">氘代试剂</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1458&gloabSearchVo.branchId=1466&gloabSearchVo.rootId=1455&gloabSearchVo.type=1">离子液体</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1458&gloabSearchVo.branchId=1464&gloabSearchVo.rootId=1455&gloabSearchVo.type=1">气体溶液</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1458&gloabSearchVo.branchId=1459&gloabSearchVo.rootId=1455&gloabSearchVo.type=1">大包装（现货）</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>

                                </div>
                            </div>
                        </div>




                        <div class="navgatorClass1 sidelist" index="4">
                            <span><a>生命科学・生物制药・体外诊断</a></span>
                            <div class="i-list" id="scbr24" style="display:none;">

                                <div class="fenlei">

                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1761&gloabSearchVo.rootId=1712&gloabSearchVo.type=1">生化试剂·IVD原料</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1761&gloabSearchVo.branchId=1767&gloabSearchVo.rootId=1712&gloabSearchVo.type=1">核糖·核苷</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1761&gloabSearchVo.branchId=1771&gloabSearchVo.rootId=1712&gloabSearchVo.type=1">生化酶·辅酶·底物</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1761&gloabSearchVo.branchId=1768&gloabSearchVo.rootId=1712&gloabSearchVo.type=1">氨基酸</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1761&gloabSearchVo.branchId=1763&gloabSearchVo.rootId=1712&gloabSearchVo.type=1">多肽·蛋白</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1761&gloabSearchVo.branchId=1770&gloabSearchVo.rootId=1712&gloabSearchVo.type=1">生化缓冲剂</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1761&gloabSearchVo.branchId=1772&gloabSearchVo.rootId=1712&gloabSearchVo.type=1">碳水化合物</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1761&gloabSearchVo.branchId=1765&gloabSearchVo.rootId=1712&gloabSearchVo.type=1">抗生素</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1761&gloabSearchVo.branchId=1762&gloabSearchVo.rootId=1712&gloabSearchVo.type=1">其他生化试剂</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>

                                </div>
                            </div>
                        </div>




                        <div class="navgatorClass1 sidelist" index="5">
                            <span><a>高纯试剂・材料制备・电池储能</a></span>
                            <div class="i-list" id="scbr25" style="display:none;">

                                <div class="fenlei">

                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=1888&gloabSearchVo.rootId=1887&gloabSearchVo.type=1">高纯金属・非金属材料</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1888&gloabSearchVo.branchId=1893&gloabSearchVo.rootId=1887&gloabSearchVo.type=1">高纯金属单质</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1888&gloabSearchVo.branchId=1894&gloabSearchVo.rootId=1887&gloabSearchVo.type=1">高纯非金属单质</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1888&gloabSearchVo.branchId=1889&gloabSearchVo.rootId=1887&gloabSearchVo.type=1">合金</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1888&gloabSearchVo.branchId=1891&gloabSearchVo.rootId=1887&gloabSearchVo.type=1">高纯度盐</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1888&gloabSearchVo.branchId=1892&gloabSearchVo.rootId=1887&gloabSearchVo.type=1">高纯溶剂</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=1888&gloabSearchVo.branchId=1890&gloabSearchVo.rootId=1887&gloabSearchVo.type=1">溅射靶材</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>

                                </div>
                            </div>
                        </div>




                        <div class="navgatorClass1 sidelist" index="6">
                            <span><a>分析检测・标准物质・管制试剂</a></span>
                            <div class="i-list" id="scbr26" style="display:none;">

                                <div class="fenlei">

                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=2094&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">仪器检测通用试剂</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2094&gloabSearchVo.branchId=2100&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">液相色谱溶剂</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2094&gloabSearchVo.branchId=2095&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">LCMS级溶剂</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2094&gloabSearchVo.branchId=2097&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">农残级溶剂</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2094&gloabSearchVo.branchId=2098&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">制备级溶剂</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2094&gloabSearchVo.branchId=2099&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">流动相缓冲剂</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2094&gloabSearchVo.branchId=2101&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">离子对</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2094&gloabSearchVo.branchId=2096&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">光谱纯</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2094&gloabSearchVo.branchId=4012&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">离子对试剂</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>
                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=2155&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">管制类试剂</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2155&gloabSearchVo.branchId=2158&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">第二类易制毒化学品</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2155&gloabSearchVo.branchId=2157&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">第三类易制毒化学品</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2155&gloabSearchVo.branchId=2156&gloabSearchVo.rootId=2071&gloabSearchVo.type=1">易制爆危险化学品</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>

                                </div>
                            </div>
                        </div>




                        <div class="navgatorClass1 sidelist" index="7">
                            <span><a>通用仪器・称量仪器・生物仪器</a></span>
                            <div class="i-list" id="scbr27" style="display:none;">

                                <div class="fenlei">

                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=2302&gloabSearchVo.rootId=2244&gloabSearchVo.type=1">天平及关联产品</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2302&gloabSearchVo.branchId=2309&gloabSearchVo.rootId=2244&gloabSearchVo.type=1">精密天平</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2302&gloabSearchVo.branchId=2303&gloabSearchVo.rootId=2244&gloabSearchVo.type=1">分析天平</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2302&gloabSearchVo.branchId=2307&gloabSearchVo.rootId=2244&gloabSearchVo.type=1">微量天平</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2302&gloabSearchVo.branchId=2304&gloabSearchVo.rootId=2244&gloabSearchVo.type=1">工业秤</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2302&gloabSearchVo.branchId=2308&gloabSearchVo.rootId=2244&gloabSearchVo.type=1">砝码</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2302&gloabSearchVo.branchId=2305&gloabSearchVo.rootId=2244&gloabSearchVo.type=1">天平相关配件</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>

                                </div>
                            </div>
                        </div>




                        <div class="navgatorClass1 sidelist" index="8">
                            <span><a>检测仪器・分析仪器・特种装置</a></span>
                            <div class="i-list" id="scbr28" style="display:none;">

                                <div class="fenlei">

                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=2417&gloabSearchVo.rootId=2345&gloabSearchVo.type=1">电化学</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2417&gloabSearchVo.branchId=2421&gloabSearchVo.rootId=2345&gloabSearchVo.type=1">电位滴定仪</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2417&gloabSearchVo.branchId=2418&gloabSearchVo.rootId=2345&gloabSearchVo.type=1">pH计</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2417&gloabSearchVo.branchId=2424&gloabSearchVo.rootId=2345&gloabSearchVo.type=1">电导率仪</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2417&gloabSearchVo.branchId=2426&gloabSearchVo.rootId=2345&gloabSearchVo.type=1">离子计</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2417&gloabSearchVo.branchId=4100&gloabSearchVo.rootId=2345&gloabSearchVo.type=1">多参数测试仪</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2417&gloabSearchVo.branchId=2422&gloabSearchVo.rootId=2345&gloabSearchVo.type=1">电化学工作站</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2417&gloabSearchVo.branchId=2423&gloabSearchVo.rootId=2345&gloabSearchVo.type=1">电化学相关配件</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2417&gloabSearchVo.branchId=2425&gloabSearchVo.rootId=2345&gloabSearchVo.type=1">电极</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2417&gloabSearchVo.branchId=2420&gloabSearchVo.rootId=2345&gloabSearchVo.type=1">梅特勒试剂</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>

                                </div>
                            </div>
                        </div>
                        <div class="navgatorClass1 sidelist" index="9">
                            <span><a>电子实验记录本（ELN）· ChemDraw化学结构式绘图软件</a></span>
                            <div class="i-list" id="scbr29" style="display:none;">

                                <div class="fenlei">

                                    <dl class="tx_non">
                                        <dt><a
                                                href="/search/search.htm?gloabSearchVo.segamentId=2461&gloabSearchVo.rootId=2456&gloabSearchVo.type=1">管理信息系统</a>
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2461&gloabSearchVo.branchId=2465&gloabSearchVo.rootId=2456&gloabSearchVo.type=1">研发综合管理</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2461&gloabSearchVo.branchId=2463&gloabSearchVo.rootId=2456&gloabSearchVo.type=1">库存采购管理</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2461&gloabSearchVo.branchId=2462&gloabSearchVo.rootId=2456&gloabSearchVo.type=1">危险品管理</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2461&gloabSearchVo.branchId=2464&gloabSearchVo.rootId=2456&gloabSearchVo.type=1">文档管理</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2461&gloabSearchVo.branchId=2466&gloabSearchVo.rootId=2456&gloabSearchVo.type=1">经费管理</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2461&gloabSearchVo.branchId=2468&gloabSearchVo.rootId=2456&gloabSearchVo.type=1">设备管理</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2461&gloabSearchVo.branchId=2469&gloabSearchVo.rootId=2456&gloabSearchVo.type=1">质量管理</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2461&gloabSearchVo.branchId=2470&gloabSearchVo.rootId=2456&gloabSearchVo.type=1">高校实验室综合管理</a>
                                                </li>
                                                <li><a
                                                        href="/search/search.htm?gloabSearchVo.segamentId=2461&gloabSearchVo.branchId=2467&gloabSearchVo.rootId=2456&gloabSearchVo.type=1">经销商进销存管理</a>
                                                </li>
                                            </ul>

                                        </dd>
                                    </dl>
                                    <div style="clear:both"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="clearboth"></div>
        </div>
        <!-- 全屏幻灯-->
        <FeaturedContent />


        <!-- 促销产品开始-->
        <div class="pro-promotion">
            <div id="divide-title0-0" floor="1F-01" style="height:auto" request-url="api/api.php?floor=1F-01">
                <div class="">
                    <div class="divide-title">
                        <div class="title-a">1F-01 量器</div>
                        <span class="title-b">
                            <label>
                                <a target='_blank'
                                    href='/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1105&gloabSearchVo.rootId=1000'>
                                    烧杯</a></label>
                            <label>
                                <a target='_blank'
                                    href='/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1108&gloabSearchVo.rootId=1000'>
                                    量筒</a></label>
                            <label>
                                <a target='_blank'
                                    href='/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1101&gloabSearchVo.rootId=1000'>
                                    三角烧瓶/锥形瓶</a></label>
                            <label>
                                <a target='_blank'
                                    href='/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1107&gloabSearchVo.rootId=1000'>
                                    量杯</a></label>
                            <label>
                                <a target='_blank'
                                    href='/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1104&gloabSearchVo.rootId=1000'>
                                    容量瓶</a></label>
                            <label>
                                <a target='_blank'
                                    href='/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1106&gloabSearchVo.rootId=1000'>
                                    胖肚移液管</a></label>
                        </span>
                        <div class="clearboth"></div>
                        <div class="line"></div>
                    </div>
                    <ul>
                        <li>
                            <a target='_blank'
                                href='/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1105&gloabSearchVo.rootId=1000'>
                                <img src='/upload/images/catalogImg/1575357035071.jpg'
                                    ondragstart="window.event.returnValue=false" onerror='nofind();'
                                    oncontextmenu="window.event.returnValue=false"
                                    onselectstart="event.returnValue=false">
                                <div class="divide-cbname-icon">
                                </div>
                                <div class="divide-cbname-box">
                                    <div class="divide-cbname-f">
                                        <div class="divide-cbname">烧杯</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a target='_blank'
                                href='/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1108&gloabSearchVo.rootId=1000'>
                                <img src='/upload/images/catalogImg/1575357109488.jpg'
                                    ondragstart="window.event.returnValue=false" onerror='nofind();'
                                    oncontextmenu="window.event.returnValue=false"
                                    onselectstart="event.returnValue=false">
                                <div class="divide-cbname-icon">
                                </div>
                                <div class="divide-cbname-box">
                                    <div class="divide-cbname-f">
                                        <div class="divide-cbname">量筒</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a target='_blank'
                                href='/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1101&gloabSearchVo.rootId=1000'>
                                <img src='/upload/images/catalogImg/1575356941590.jpg'
                                    ondragstart="window.event.returnValue=false" onerror='nofind();'
                                    oncontextmenu="window.event.returnValue=false"
                                    onselectstart="event.returnValue=false">
                                <div class="divide-cbname-icon">
                                </div>
                                <div class="divide-cbname-box">
                                    <div class="divide-cbname-f">
                                        <div class="divide-cbname">三角烧瓶/锥形瓶</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a target='_blank'
                                href='/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1107&gloabSearchVo.rootId=1000'>
                                <img src='/upload/images/catalogImg/1575357078030.jpg'
                                    ondragstart="window.event.returnValue=false" onerror='nofind();'
                                    oncontextmenu="window.event.returnValue=false"
                                    onselectstart="event.returnValue=false">
                                <div class="divide-cbname-icon">
                                </div>
                                <div class="divide-cbname-box">
                                    <div class="divide-cbname-f">
                                        <div class="divide-cbname">量杯</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a target='_blank'
                                href='/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1104&gloabSearchVo.rootId=1000'>
                                <img src='/upload/images/catalogImg/1575357014959.jpg'
                                    ondragstart="window.event.returnValue=false" onerror='nofind();'
                                    oncontextmenu="window.event.returnValue=false"
                                    onselectstart="event.returnValue=false">
                                <div class="divide-cbname-icon">
                                </div>
                                <div class="divide-cbname-box">
                                    <div class="divide-cbname-f">
                                        <div class="divide-cbname">容量瓶</div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a target='_blank'
                                href='/search/search.htm?gloabSearchVo.segamentId=1100&gloabSearchVo.branchId=1106&gloabSearchVo.rootId=1000'>
                                <img src='/upload/images/catalogImg/1575357058309.jpg'
                                    ondragstart="window.event.returnValue=false" onerror='nofind();'
                                    oncontextmenu="window.event.returnValue=false"
                                    onselectstart="event.returnValue=false">
                                <div class="divide-cbname-icon">
                                </div>
                                <div class="divide-cbname-box">
                                    <div class="divide-cbname-f">
                                        <div class="divide-cbname">胖肚移液管</div>
                                    </div>
                                </div>
                            </a>
                        </li>

                    </ul>
                    <div class="clearboth"></div>
                </div>
            </div>
            <div id="divide-title0-1" floor="1F-02" class="loading" style="height:300px"
                request-url="api/api.php?floor=1F-02">
            </div>
            <div id="divide-title0-2" floor="1F-03" class="loading" style="height:300px"
                request-url="api/api.php?floor=1F-03">
            </div>
            <div id="divide-title1-0" floor="2F-01" class="loading" style="height:300px"
                request-url="api/api.php?floor=2F-01">
            </div>
            <div id="divide-title1-1" floor="2F-02" class="loading" style="height:300px"
                request-url="api/api.php?floor=2F-02">
            </div>
            <div id="divide-title1-2" floor="2F-03" class="loading" style="height:300px"
                request-url="api/api.php?floor=2F-03">
            </div>
            <div id="divide-title2-0" floor="3F-01" class="loading" style="height:300px"
                request-url="api/api.php?floor=3F-01">
            </div>
            <div id="divide-title2-1" floor="3F-02" class="loading" style="height:300px"
                request-url="api/api.php?floor=3F-02">
            </div>
            <div id="divide-title2-2" floor="3F-03" class="loading" style="height:300px"
                request-url="api/api.php?floor=3F-03">
            </div>
            <div id="divide-title3-0" floor="4F-01" class="loading" style="height:300px"
                request-url="api/api.php?floor=4F-01">
            </div>
            <div id="divide-title3-1" floor="4F-02" class="loading" style="height:300px"
                request-url="api/api.php?floor=4F-02">
            </div>
            <div id="divide-title3-2" floor="4F-03" class="loading" style="height:300px"
                request-url="api/api.php?floor=4F-03">
            </div>
        </div>
        <!-- 促销产品结束-->

    </div>

    <!-- 电梯导航-->
    <div class="elevator" id="elevator" style="display:none;">


        <div class="item-s btnone">
            <div class="product-elevator">
                <h3><a href="javascript:floor_navigation('1F-01');">1F常规耗材</a></h3>
                <s></s>
            </div>

            <div class="product-wrap pos01">
                <div class="cf">
                    <div class="fl wd252 pr20">
                        <h2><a href="javascript:floor_navigation('1F-01');">计量器具・实验器具・常规耗材</a></h2>
                        <ul class="cf">
                            <li><a href="javascript:floor_navigation('1F-01');">量器</a></li>
                            <li><a href="javascript:floor_navigation('1F-02');">容器·收纳·周转</a></li>
                            <li><a href="javascript:floor_navigation('1F-03');">样品储存·样品管理</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="item-s ">
            <div class="product-elevator">
                <h3><a href="javascript:floor_navigation('2F-01');">2F仪器耗材</a></h3>
                <s></s>
            </div>

            <div class="product-wrap pos02">
                <div class="cf">
                    <div class="fl wd252 pr20">
                        <h2><a href="javascript:floor_navigation('2F-01');">生物耗材・分析耗材・特殊耗材</a></h2>
                        <ul class="cf">
                            <li><a href="javascript:floor_navigation('2F-01');">细胞培养</a></li>
                            <li><a href="javascript:floor_navigation('2F-02');">微生物学</a></li>
                            <li><a href="javascript:floor_navigation('2F-03');">分子生物</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>


        <div class="item-s ">
            <div class="product-elevator">
                <h3><a href="javascript:floor_navigation('3F-01');">3F安全防护</a></h3>
                <s></s>
            </div>

            <div class="product-wrap pos03">
                <div class="cf">
                    <div class="fl wd252 pr20">
                        <h2><a href="javascript:floor_navigation('3F-01');">安全防护・办公用品・装修设备</a></h2>
                        <ul class="cf">
                            <li><a href="javascript:floor_navigation('3F-01');">个人防护</a></li>
                            <li><a href="javascript:floor_navigation('3F-02');">安全应急·除尘</a></li>
                            <li><a href="javascript:floor_navigation('3F-03');">无尘环境·防静电用品</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="item-s ">
            <div class="product-elevator">
                <h3><a href="javascript:floor_navigation('4F-01');">4F化学合成</a></h3>
                <s></s>
            </div>

            <div class="product-wrap pos04">
                <div class="cf">
                    <div class="fl wd252 pr20">
                        <h2><a href="javascript:floor_navigation('4F-01');">化学合成・催化反应・分子砌块</a></h2>
                        <ul class="cf">
                            <li><a href="javascript:floor_navigation('4F-01');">基础原料及溶剂</a></li>
                            <li><a href="javascript:floor_navigation('4F-02');">合成功能试剂</a></li>
                            <li><a href="javascript:floor_navigation('4F-03');">合成原料</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="clearboth"></div>
    <div class="footer-box-wrap">

        <div class="footer-box clearfix">
            <div class="service  clearfix">
                <div class="service-dl">
                    <dl class="br-r">
                        <dt>新手入门</dt>
                        <dd>
                            <ul>
                                <li class=""><a target="_blank" href="/help/hyzd.html">会员制度</a></li>
                                <li class=""><a target="_blank" href="/help/gwzn.html">购物指南</a></li>
                                <li class=""><a target="_blank" href="/help/wdts.html">我的探索</a></li>
                                <li class=""><a target="_blank" href="/help/jytk.html">交易条款</a></li>
                            </ul>
                        </dd>
                    </dl>
                    <dl class="br-r">
                        <dt>支付说明</dt>
                        <dd>
                            <ul>
                                <li class=""><a target="_blank" href="/help/fkzq.html">付款周期</a></li>
                                <li class=""><a target="_blank" href="/help/fkfs.html">付款方式</a></li>
                                <li class=""><a target="_blank" href="/help/zhgl.html">账户管理</a></li>
                                <li class=""><a target="_blank" href="/help/fpzd.html">发票制度</a></li>
                            </ul>
                        </dd>
                    </dl>
                    <dl class="br-r">
                        <dt>配送说明</dt>
                        <dd>
                            <ul>
                                <li class=""><a target="_blank" href="/trans/to-cal.htm">配送说明</a></li>
                                <li class=""><a target="_blank" href="/help/spyh.html">商品验货</a></li>
                            </ul>
                        </dd>
                    </dl>
                    <dl class="br-r">
                        <dt>售后服务</dt>
                        <dd>
                            <ul>
                                <li class=""><a target="_blank" href="/help/thhzc.html">退换货政策</a></li>
                                <li class=""><a target="_blank" href="/help/thhlc.html">退换货流程</a></li>

                            </ul>
                        </dd>
                    </dl>
                    <dl class="br-r">
                        <dt>帮助中心</dt>
                        <dd>
                            <ul>
                                <li class=""><a target="_blank" href="/help/yhzc.html">用户注册</a></li>
                                <li class=""><a target="_blank" href="/help/zhmm.html">找回密码</a></li>
                                <li class=""><a target="_blank" href="/help/lxkh.html">联系客服</a></li>
                                <!--<li class=""><a target="_blank" href="/help/zmjxs.html">招商合作</a></li>-->
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>关于探索</dt>
                        <dd>
                            <ul>
                                <li class=""><a target="_blank" href="/show/gsgk.html">探索介绍</a></li>
                                <li class=""><a target="_blank" href="/show/rzpp.html">合作伙伴</a></li>
                                <li class=""><a target="_blank" href="/show/tansooleqk.html">探索期刊</a></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>

        <div class="footer-service">
            <a href="/help/zpbz.html" target="_black"><img src="/images/service_footer_one.jpg"></a>
            <a href="/help/zpbz.html" target="_black"><img src="/images/service_footer_one.jpg"></a>
            <a href="/help/thhzc.html" target="_black"><img src="/images/service_footer_thr.jpg"></a>
            <a href="/help/zywl.html" target="_black"><img src="/images/service_footer_for.jpg"></a>
        </div>
        <div class="footer-partner  clearfix">
            <ul>

                <li><a href="https://www.micrott.com/" target="_black"><img src="/images/footer_partner_01.gif"></a>
                </li>
                <li><a href="https://www.titanchem.com/index/index.dhtml" target="_black"><img
                            src="/images/footer_partner_02.gif"></a></li>
                <li><a href="http://www.tedia.com.cn/" target="_black"><img src="/images/footer_partner_03.gif"></a>
                </li>
                <li><a href="https://www.titansci.com/" target="_black"><img src="/images/footer_partner_04.gif"></a>
                </li>
                <li><a href="https://www.titansci-group.com/" target="_black"><img
                            src="/images/footer_partner_05.gif"></a></li>
                <li><a href="http://www.radobio.com/" target="_black"><img src="/images/footer_partner_06.gif"></a></li>
                <li><a href="http://www.magal.cn/" target="_black"><img src="/images/footer_partner_07.gif"></a></li>
                <li><a href="https://www.clinx.cn/" target="_black"><img src="/images/footer_partner_08.gif"></a></li>
                <li><a href="https://www.enormicro.com/" target="_black"><img src="/images/footer_partner_09.gif"></a>
                </li>


            </ul>


        </div>
        <div class="footer-nav   clearfix">
            <a target="_blank" href="/show/gsgk.html">公司简介</a><span class="sep">|</span>
            <a target="_blank" href="https://www.ickd.cn">快递查询</a><span class="sep">|</span>
            <a target="_blank" href="http://www.titansci.com/contact.jsp">联系我们</a><span class="sep">|</span>
            <span>探索平台隶属于上海泰坦科技股份有限公司</span>

        </div>

        <div class="footer-copyright   clearfix" style="text-align:center;">
            <span>Copyright (C) 探索 2011-2025, All Rights Reserved</span><span class="sep">|</span>
            <span><a target="_blank" href="https://beian.miit.gov.cn/">沪ICP备07508754号-5</a></span><span
                class="sep">|</span>公安机关备案号 31010402004248<span class="sep">|</span>沪(徐)应急管危经许[2022]201797(QFYS)

        </div>

        <div class="footer-partner-credibility  clearfix">
            <ul>
                <li><img src="/images/footer_partner_one.jpg"></li>
                <li><img src="/images/footer_partner_one.jpg"></li>
                <li><img src="/images/footer_partner_two.jpg"></li>
                <li><img src="/images/footer_partner_thr.jpg"></li>
                <li><img src="/images/footer_partner_for.jpg"></li>
                <li><a target="_blank"
                        href="https://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&amp;serial=9031000020200317104858000005630579-SAIC_SHOW_310000-20121214094238600561&amp;signData=MEYCIQDnqr6to22dd1LG3YFpm2+k6J/4bXo//E40Z/QSiAb66gIhALrDYvB1TgGxHbnSetymND0xVVA+W4j1PF3F7NNhmaY5"><img
                            src="/images/footer_partner_eleven.jpg"></a></li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import FeaturedContent from '@/components/FeaturedContent.vue'
// 使用 useHead 设置页面 meta 信息
useHead({
	title: '',
	script: [
		{ src: '/js/index/index.js' }
	]
})
const selectVal = ref("产品")
const showSelectHandle = ref(false)

</script>


<style  scoped>
.selectContent{
	position: absolute;
	background: #fff;
	border-radius: 5px;
	box-shadow:  0 0 1px 1px #ccc;
	z-index: 999;
	left: -40px;
	top:0;
	width: 40px;
	padding: 1px 0;
	font-size: 13px;
}
.selectContent li{
	cursor: pointer;
}
.activeSelectEl{
    color: #666;
}
</style>