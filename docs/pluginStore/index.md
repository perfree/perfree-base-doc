---
layout: home
---

# 插件仓库
<br>
<el-alert title="收录了目前PerfreeBase支持的插件,更多插件持续更新中,插件投递邮箱:perfree@126.com" type="info" :closable="false" center show-icon />
<br>
<el-input
      v-model="input3"
      placeholder="搜索插件"
      class="input-with-select"
    >
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
<br>
<br>
<el-row :gutter="15">
  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
    <el-card class="pluginBox">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="plugin-img" @click="toPlugin(1)"/>
        <el-tag type="primary" class="pluginType">免费</el-tag>
        <div class="plugin-desc">
           <div class="pluginName">Demo</div>
           <div class="pluginDesc">PerfreeBase官方示例插件</div>
           <div class="pluginAuthor">插件作者: Perfree</div>
        </div>
    </el-card>
  </el-col>

   <!-- <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
    <el-card class="pluginBox">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="plugin-img"/>
        <el-tag type="danger" class="pluginType">付费</el-tag>
        <div class="plugin-desc">
           <div class="pluginName">Demo</div>
           <div class="pluginDesc">PerfreeBase官方示例插件</div>
           <div class="pluginAuthor">插件作者: Perfree</div>
        </div>
    </el-card>
  </el-col> -->
</el-row>

<div class="pageBox">
  <el-pagination background layout="prev, pager, next" :total="1" />
</div>


<script setup>
import { Search } from '@element-plus/icons-vue'

function toPlugin(id) {
  location.href= `/pluginStore/${id}.html`;
}
</script>

<style>
.el-card__body{
  padding: 0
}
.plugin-desc{
  padding: 10px
}
.plugin-img{
  width: 100%;
  height:180px;
  cursor: pointer;
}

.pluginBox{
  margin-bottom: 15px;
  position: relative;
}
ul{
  padding: 0!important
}
.pageBox{
    display: flex;
    justify-content: center;
}
.pluginName{
   overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.pluginDesc, .pluginAuthor{
      font-size: 13px;
    color: var(--el-text-color-regular);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.pluginType{
    position: absolute;
    right: 6px;
    top: 150px;
}
</style>
