#!/bin/bash

# 获取当前分支名称
current_branch=$(git rev-parse --abbrev-ref HEAD)

# 确保 dist 目录存在
if [ ! -d "dist" ]; then
  echo "dist 目录不存在，请先构建项目。"
  exit 1
fi

# 切换到 view 分支，如果不存在则创建
if git show-ref --verify --quiet refs/heads/view; then
  git checkout view
else
  git checkout -b view
fi

# 将当前分支的 dist 目录内容检出到 view 分支
 git checkout $current_branch -- dist

# 添加 dist 目录内容
 git add dist

# 提交更改
 git commit -m "Update dist from $current_branch"

# 推送到远程 view 分支
 git push origin view

# 切回原分支
 git checkout $current_branch