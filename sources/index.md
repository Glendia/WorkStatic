# 字体
字体使用方式，下面会给出字体所有的样式，使用方式
## 引用字体{#yinyong}
1. 引用字体css文件

```html
<link rel="stylesheet" href="https://cdn.workstatic.cn/fonts.css">
```
2. 复制上面的css文件到你的项目中  
3. 查看 [字体列表](/sources/#font-list) 寻找合适的字体在你的网站的页面使用
```css
@font-family: font-name;
/*font-name换成字体名字即可，建议在后面加上sans-serif，*/ 
```
### 例子{style}
```css
body {
    font-family: 'PingFang SC',sans-serif;
}
h1 {
    font-family: 'Roboto',sans-serif;
}
```
## 字体样式{#font-style}
1. font-family: 字体名称
2. font-size: 字体大小
3. font-weight: 字体粗细
4. font-style: 字体样式
5. font-variant: 字体变体
6. font-stretch: 字体拉伸
7. font-kerning: 字体kerning
8. font-feature-settings: 字体特性
9. font-language-override: 字体语言覆盖
10. font-synthesis: 字体合成
11. font-optical-sizing: 字体 optical sizing
12. font-variation-settings: 字体变体设置
13. font-size-adjust: 字体大小调整
## 使用字体{#use-font}
或者你可以自己调用远程单字体使用  
字体的链接为
```html
https://cdn.workstatic.cn/font-name/font-name.file format
```
### 例子{style}
```html
https://cdn.workstatic.cn/PingFangSC/PingFangSC-Regular.woff2
https://cdn.workstatic.cn/Roboto/Roboto-Regular.woff2
```
字体列表会给自字体的名字以及样式
```html
https://fonts.workstatic.cn/字体文件夹名字/字体名字-样式.格式
<--文件夹名字改为字体名字，取消字体样式-->
```
比如
```html
https://cdn.workstatic.cn/PingFangSC/PingFangSC-Regular.woff2
```
## 自己写css字体家族{font-family}
### 例子
```css
/*常规体*/
@font-face {
    font-family: 'PingFang SC';
    src: url('https://cdn.workstatic.cn/PingFangSC/PingFangSC-Regular.woff2') format('woff2'),
    url('https://cdn.workstatic.cn/PingFangSC/PingFangSC-Regular.woff') format('woff'),
    url('https://cdn.workstatic.cn/PingFangSC/PingFangSC-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
/*粗体*/
@font-face {
    font-family: 'PingFang SC';
    src: url('https://cdn.workstatic.cn/PingFangSC/PingFangSC-Blod.woff2') format('woff2'),
    url('https://cdn.workstatic.cn/PingFangSC/PingFangSC-Blod.woff') format('woff'),
    url('https://cdn.workstatic.cn/PingFangSC/PingFangSC-Blod.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}
```
## 字体列表{#font-list}

| 字体名称 | 字体样式 |字体名称 | 字体样式 |
 ----------- | ----------- |----------- | ----------- |
| PingFangSC | PingFangSC-Blod.woff2|PingFangSC | PingFangSC-Blod.woff2|