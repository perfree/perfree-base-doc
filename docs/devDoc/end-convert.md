# 实体类转换
项目使用mapstruct进行实体类间的转换,以下是使用示例
## convert转换类
在com.perfree.convert包中创建convert类,写法如下
```java
@Mapper(componentModel = "spring")
public interface UserConvert {

    UserConvert INSTANCE = Mappers.getMapper(UserConvert.class);

    /**
     * User转UserRespVO
     * @param bean user实体类
     * @return UserRespVO
     */
    UserRespVO convertRespVO(User user);
}
```
使用方法
```java
UserConvert.INSTANCE.convertRespVO(byId);
```

