import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  dest:'dist',
  // base: '/',
  title: "前端团队文档库",
  description: "前端团队文档库",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    autoAddCategoryToNavbar: true,
    categoriesText:'分类',
    tagsText:'标签',
    logo: "/favicon.ico",
    lastUpdated: false,
    subSidebar: 'auto',
  }),
  // debug: true,
});
