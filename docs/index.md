---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Perfree-Base"
  text: "一款支持前后端插件化开发的管理后台模板"
  tagline: ✨每个业务模块都是独立插件,生产环境可动态插拔
  image:
    src: '/logo.png'
    alt: Theme
  actions:
    - theme: brand
      text: 快速开始
      link: /useDoc
    - theme: alt
      text: 在线体验
      link: https://base-demo.perfree.org.cn
    - theme: alt
      text: 插件仓库
      link: /pluginStore

features:
  - icon: 📝
    title: 插件化开发
    details: 每个业务模块都可拆分为独立插件,插件开发方式与普通项目开发体验基本一致,且支持生产环境动态插拔,杜绝加班!
  - icon: 🚀
    title: 代码生成
    details: 支持主系统及插件代码一键生成,包含增删改查、导出、权限控制、参数校验、接口文档等前后端代码,快速开发
  - icon: 👨‍💻
    title: 权限控制
    details: 基于Spring Security实现,支持加载动态权限菜单,按钮级别权限控制,业务插件同样支持
  - icon: 🎐
    title: 主流技术栈
    details: 互联网主流技术选型,JDK17+、Spring Boot、Spring Security、MyBatis Plus、Swagger等技术栈
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  /*--vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);*/
  /*--vp-home-hero-image-filter: blur(44px);*/
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
