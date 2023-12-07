## 使用

这是在网页中使用编译好的 wasm 模块的一个示例。本仓库是 [这个仓库](https://github.com/XIYU11864/regular-language) 的子模块，克隆它就能连带本仓库一起克隆到本地。

要调试或打包，你需要先安装 npm 。

### 导入依赖包

1. 找到 www/package.json 
2. 剪切29行~31行的内容。
3. 运行 `npm install` 
4. 将剪切的三行代码粘贴到原位
5. 运行 `npm install` 

我也不知道为什么需要这么做。可能是npm不能同时导入本地依赖和远程依赖吧。

### 启动本地服务器

运行 `npm run start` 即可从 http://localhost:8080/ 看到网页。

### 打包

运行 `npm run build` 会在 www/disc 目录生成打包好的网页项目文件，将这些文件复制到你的web服务器的相应目录下即可部署。

## Based on this template

[create-wasm-app](https://github.com/rustwasm/create-wasm-app)

Some readme contents of the original project below.

## 🔋 Batteries Included

- `.gitignore`: ignores `node_modules`
- `LICENSE-APACHE` and `LICENSE-MIT`: most Rust projects are licensed this way, so these are included for you
- `README.md`: the file you are reading now!
- `index.html`: a bare bones html document that includes the webpack bundle
- `index.js`: example js file with a comment showing how to import and use a wasm pkg
- `package.json` and `package-lock.json`:
  - pulls in devDependencies for using webpack:
      - [`webpack`](https://www.npmjs.com/package/webpack)
      - [`webpack-cli`](https://www.npmjs.com/package/webpack-cli)
      - [`webpack-dev-server`](https://www.npmjs.com/package/webpack-dev-server)
  - defines a `start` script to run `webpack-dev-server`
- `webpack.config.js`: configuration file for bundling your js with webpack

## License

Licensed under either of

* Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
* MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be dual licensed as above, without any additional terms or
conditions.
