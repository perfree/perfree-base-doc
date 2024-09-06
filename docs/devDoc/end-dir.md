# 目录结构
```bash
perfree-base
├── perfree-core # 核心模块, 包含了项目的核心配置,工具类等
├── perfree-plugins # 插件模块目录, 所有的插件源码应该都是该模块的子模块
      └── perfree-plugin-demo # 官方示例插件,开发插件时可参考
├── perfree-server # 项目入口程序, 里边存放了启动类,配置文件等,启动项目找它就对了
├── perfree-system # 系统模块
      └── perfree-system-api # 系统模块暴漏给其他模块可使用的公共api
      └── perfree-system-biz # 系统模块业务逻辑实现
├── perfree-ui-base # 前端目录
├── sql # 系统初始化sql
├── .gitignore # git忽略配置
├── docker-compose.yml # docker-compose配置
├── LICENSE # 开源协议
├── pom.xml # maven pom
├── README.md # 系统说明
```
