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
            { text: '目录结构', link: '/devDoc/end-dir' },
            { text: '创建新模块', link: '/devDoc/end-createModule' },
            { text: '权限控制', link: '/devDoc/end-auth' },
            { text: '实体类转换', link: '/devDoc/end-convert' },
            { text: '参数校验', link: '/devDoc/end1' },
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

    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/perfree/perfree-base' },
      { icon: { svg: `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M57 153 c-16 -15 -5 -23 33 -23 22 0 40 -4 40 -10 0 -5 -18 -10 -40 -10 -38 0 -40 -2 -40 -30 0 -27 3 -30 30 -30 17 0 30 5 30 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6 14 10 31 10 27 0 30 -3 27 -27 -3 -26 -7 -28 -50 -31 l-48 -3 0 40 c0 41 -15 55 -26 26 -10 -26 16 -73 47 -85 63 -26 125 36 100 99 -16 37 -74 65 -94 44z"/>
</g>
</svg>` }, link: 'https://gitee.com/perfree/perfree-base' }
    ]
  }
})
