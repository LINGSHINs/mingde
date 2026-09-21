# 明德｜运营岗位资质题库

跨平台刷题 PWA，已内置 2957 道题。网站不需要数据库，学习记录保存在每台设备的浏览器中。

## 部署到 GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `mingde`。
2. 将本压缩包中的**全部文件和文件夹**上传到仓库根目录，提交到 `main` 分支。
3. 打开仓库的 `Settings → Pages`。
4. 在 `Build and deployment` 下，将 `Source` 设为 `GitHub Actions`。
5. 打开仓库的 `Actions` 页面，等待 `Deploy Mingde to GitHub Pages` 变为绿色。
6. 部署地址通常为 `https://你的用户名.github.io/mingde/`。

如果仓库名是 `你的用户名.github.io`，地址则是 `https://你的用户名.github.io/`。

## 更新现有部署

将压缩包中的全部文件覆盖上传到仓库根目录，等待 Pages 更新完成，然后强制刷新浏览器。版本 3 修复了专注模式退出、连续导航、部门内题序和答案提示，并重新设计了桌面与移动端界面。旧版使用了会跨部门重复的题号，版本 3 会重新建立准确的学习统计。

## 本地检查

由于离线缓存需要 HTTPS 或本地服务器，不建议直接双击 `index.html` 测试完整功能。可以在当前目录运行：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。
