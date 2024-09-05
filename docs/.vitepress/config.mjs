import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PerfreeBase",
  description: "perfree-base官网",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },
    nav: [
      { text: '首页', link: '/' },
      { text: '插件仓库', link: '/pluginStore/',  activeMatch: '/pluginStore/' },
      { text: '使用文档', link: '/useDoc',  activeMatch: '/useDoc/' },
      { text: '开发文档', link: '/devDoc',  activeMatch: '/devDoc/' },
      { text: '插件开发文档', link: '/pluginDoc',  activeMatch: '/pluginDoc/' }
    ],

    sidebar:{
      '/useDoc/' :  [
        {
          text: '安装',
          items: [
            { text: '📀 DockerCompose部署', link: '/useDoc/dockerCompose' },
            { text: '💽 Docker部署', link: '/useDoc/docker' },
            { text: '🖥️ Jar包部署', link: '/useDoc/jar' },
          ]
        },
        {
          text: '使用文档',
          items: [
            { text: '🏷️ 菜单管理', link: '/useDoc/menu' },
            { text: '🧑‍💻 角色管理', link: '/useDoc/role' },
            { text: '🙋‍♂️ 用户管理', link: '/useDoc/user' },
            { text: '📦 附件相关', link: '/useDoc/attach' },
            { text: '✉️ 邮箱相关', link: '/useDoc/mail' },
            { text: '📝 代码生成', link: '/useDoc/codeGen' },
            { text: '🗄️ 插件相关', link: '/useDoc/plugin' },
            { text: '⚙️ 系统设置相关', link: '/useDoc/setting' },
          ]
        },
      ],
      '/devDoc/' :  [
        {
          text: '后端开发文档',
          items: [
            { text: '源码运行', link: '/devDoc/end' },
            { text: '目录结构', link: '/devDoc/end1' },
            { text: '创建新模块', link: '/devDoc/end1' },
            { text: '实体类转换', link: '/devDoc/end1' },
            { text: '参数校验', link: '/devDoc/end1' },
            { text: '权限控制', link: '/devDoc/end1' },
            { text: '邮件发送', link: '/devDoc/end1' },
            { text: '代码生成', link: '/devDoc/end1' },
            { text: '数据字典', link: '/devDoc/end1' },
            { text: '系统设置', link: '/devDoc/end1' },
            { text: '打包部署', link: '/devDoc/end1' },
          ]
        },
        {
          text: '前端开发文档',
          items: [
            { text: '源码运行', link: '/devDoc/front' },
            { text: '目录接口', link: '/devDoc/front1' },
            { text: '创建新模块', link: '/devDoc/front1' },
            { text: '路由控制', link: '/devDoc/front1' },
            { text: '按钮权限', link: '/devDoc/front1' },
            { text: '全局信息', link: '/devDoc/front1' },
            { text: '打包部署', link: '/devDoc/front1' },
          ]
        }
      ],
      /*'/pluginDoc/' :  [
        {
          text: '插件开发文档',
          items: [
            { text: 'Markdown Examples', link: '/pluginDoc/examples1' },
          ]
        }
      ]*/

    }
  }
})
