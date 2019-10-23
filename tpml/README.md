项目结构：
build: webpack构建相关文件
config: 项目配置
src: 项目源码，开发代码都写在此目录下
  -assets 静态资源文件
  -components 公用组件
  -modules 模块，每个页面文件放置于一个modules下的一个子目录
static: 不经过加工，整个目录中的文件拷贝到最终生成的包中
test: e2e和单元测试

项目默认以modules下的第一级目录名为入口js和html模板名，
config配置文件下的entriesMap可以覆盖默认的入口js和html模板名，
entriesMap结构中key值对应模块名，entry对应模块入口js，html
对应模块html,无需后缀

cli命令：
开发环境 npm run dev
产品环境 npm run build
测试环境 npm run test

注意：
js引入同名vue文件（或仅大小写不同），需完整写上文件名后缀.vue
