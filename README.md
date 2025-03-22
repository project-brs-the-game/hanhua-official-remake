<p align="center">
  <a href="https://brstg.org" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/project-brs-the-game/hanhua-official-remake/refs/heads/main/.github/logo-light.png">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/project-brs-the-game/hanhua-official-remake/refs/heads/main/.github/logo-dark.png">
      <img alt="Black Rock Shooter - The Game" src="https://raw.githubusercontent.com/project-brs-the-game/hanhua-official-remake/refs/heads/main/.github/logo-dark.png" width="250" height="130" style="max-width: 100%;">
    </picture>
  </a>
</p>

<p align="center">
  黑岩射手The Game - 非官方汉化网站
</p>

<p align="center" style="font-size: 12px">
  本项目是基于<a href="https://hysshh.github.io/" target="_blank">黑岩射手 The Game - 汉化组官方网站</a>的重制版，使用 <a href="https://svelte.dev/" target="_blank">svelte</a> 开发，还原BRS-TG菜单的设计UI。
</p>

---

## ⭐开发

- 环境需求

  - [Node.js](https://nodejs.org/)

  - [pnpm](https://pnpm.io/installation#using-corepack) - 推荐使用 `corepack` 安装

  - (可选) 支持 [prettier](https://prettier.io/) 和 [eslint](https://eslint.org/) 插件的编辑器，比如 [VS Code](https://code.visualstudio.com/) 或者 [neovim](https://neovim.io/)

- 项目核心框架

  - [svelte](https://svelte.dev/) (前端框架) / [svelte kit](https://svelte.dev/docs/kit/introduction) (svelte的meta框架)

  - [tailwindcss](https://tailwindcss.com/) (CSS框架)

  - [mdsvex](https://mdsvex.pngwn.io/) (支持svelte组件的markdown库)

### 项目运行

#### 安装依赖

```console
pnpm i --frozen-lockfile
```

#### 启动项目

```console
pnpm dev
```

> 项目默认使用 `3000` 端口，项目启动后打开 [http://localhost:3000](http://localhost:3000) 即可。

#### 项目部署

##### 编译打包

```console
pnpm build
```

> 会在项目根目录生成 `build` 文件夹，包含编译好的文件。

##### 预览生产版本

```console
pnpm preview
```

##### 部署

编译后的 `build` 是纯静态网站，编译时已经把全部页面预渲染了。理论上应该可以直接把 `build` 文件夹上传到任何支持静态网页平台就完成部署了。

## ⭐参与项目

如果你有优化的意见，或者找到bug了。欢迎提交 [PR](https://github.com/project-brs-the-game/hanhua-official-remake/pulls) 或者 [issue](https://github.com/project-brs-the-game/hanhua-official-remake/issues/new) 。

## ⭐开源证书

本项目使用 [Unlicense协议](https://github.com/project-brs-the-game/hanhua-official-remake/blob/main/LICENSE)，除图片资源外，源码可无条件随意使用。
