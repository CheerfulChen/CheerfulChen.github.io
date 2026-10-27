# 迟然 · 网上小天地

独立的静态导航页。旧 Hexo 源文件保留在仓库原处；此目录无需 Node.js 或 Hexo 即可部署。

本地预览：`python3 -m http.server 4173 --directory navigation`。

部署：GitHub 仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。
将 `feat/navigation-hub` 分支加入 `github-pages` 环境的允许部署分支，然后推送此分支，或在 Actions 的 “Deploy navigation to GitHub Pages” 中选此分支运行。

所有导航内容在 `index.html`；样式在 `style.css`。按照站点所有者的选择，保留 `chiran.top` 域名绑定，并用 `CNAME` 记录此配置；新博客入口为 `https://blog.chiran.top`。
