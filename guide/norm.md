# 规范
## 命名规范
```
# CDN链接命名规范
https://cdn.workstatic.cn/your_username/path/filename.fileformat
```
cnd链接后面跟你的唯一用户名，用户名是你上传文件的主路径，后面是文件路径，然后是候文件名，最后是文件格式。  
例如:  
```
https://cdn.workstatic.cn/glendia/font/font.ttf
https://cdn.workstatic.cn/glendia/static/css/style.css
```
可以嵌套多层，请勿太深层。
如果你的文件访问量较低，会被cdn其他资源覆盖，导致cdn命中率降低，影响你的访问速度。
## 文件格式
文件格式不限制，但是请勿上传非法资源，启用阿里云安全审查，一经发现，立即删除切后续禁止使用。
## 文件大小
文件最大50MB，如果超过50MB，请使用压缩工具压缩文件，然后上传。