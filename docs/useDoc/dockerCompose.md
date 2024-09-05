---
outline: deep
---

# DockerCompose安装
在操作之前,您应先检查是否已经安装了Docker及Docker Compose环境, 如未安装,可参考以下文档进行安装
- Docker 安装文档： [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
- Docker Compose 安装文档：[https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

> **💡提示**<br>
> 我们推荐按照 Docker 官方文档安装 Docker 和 Docker Compose，因为部分 Linux 发行版软件仓库中的 Docker 版本可能过旧。

## 安装
下载项目中的[docker-compose.yml](https://github.com/perfree/perfree-base/blob/main/docker-compose.yml) 及 [sql](https://github.com/perfree/perfree-base/tree/main/sql)文件夹,
并上传至服务器,如下图所示

![目录结构](./images/docker-compose-dir.png)

之后执行如下命令
```bash
docker-compose up -d
```
启动成功之后访问ip:8066即可, 默认账户admin, 密码123456

## 修改默认配置
如需修改默认配置,可直接编辑docker-compose.yml文件中的内容
1. 端口默认为8066,您可修改为需要使用的端口号
2. 镜像仓库地址默认为阿里云,如您自己打包镜像后使用,可直接进行修改

以下是docker-compose.yml示例
```yaml
version: '1.0.0'
services:
  # MySQL容器配置
  mysql-container:
    image: registry.cn-hangzhou.aliyuncs.com/perfree/perfree_mysql:8.0
    restart: always
    environment:
      # 设置MySQL的root用户密码
      MYSQL_ROOT_PASSWORD: 123456
      # 设置时区为亚洲/上海
      TZ: Asia/Shanghai
      # 创建名为reggie的数据库
      MYSQL_DATABASE: perfree_base
      # 设置MySQL字符集为utf8mb4
      MYSQL_CHARSET: utf8mb4
      # 设置MySQL排序规则为utf8mb4_unicode_ci
      MYSQL_COLLATION: utf8mb4_unicode_ci
    volumes:
      - ./perfree_base/mysql/data:/var/lib/mysql
      - ./sql/perfree_base.sql:/docker-entrypoint-initdb.d/init.sql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 10s
      retries: 3
      start_period: 40s
  # perfree-base容器配置
  perfree-base-container:
    image: 后端镜像地址:版本号
    restart: always
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://mysql-container:3306/perfree_base?useSSL=false&allowPublicKeyRetrieval=true&useUnicode=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true
      SPRING_DATASOURCE_USERNAME: root
      SPRING_DATASOURCE_PASSWORD: 123456
    depends_on:
      mysql-container:
        condition: service_healthy  # 等待MySQL容器健康检查通过
    volumes:
      - ./perfree_base/plugins:/perfree-server/resources/plugins
      - ./perfree_base/upload:/perfree-server/resources/upload

  # perfree-base-ui容器配置
  perfree-base-ui-container:
    image: 前端镜像地址:版本号
    restart: always
    ports:
      # 将主机的80端口映射到容器的80端口
      - 8066:80
    environment:
      SERVER_ADDR_IP: perfree-base-container
      SERVER_ADDR_PORT: 8080
    depends_on:
      - perfree-base-container
```
## 更新

```bash
docker-compose down
```
然后修改docker-compose.yml文件中的镜像版本号,之后重新启动即可
```bash
docker-compose up -d
```
