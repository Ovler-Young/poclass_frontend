# 剖课 前端

## 快速开始

目前Web端尚未接入后端接口，访问内容目前直接在/public目录下进行修改。

成功之后准备开发环境。开发环境要求安装Node.js，包管理器推荐使用pnpm. npm和yarn的lockfile不是最新，可能会出现问题。

教程如下，请根据自己的情况选择：

<details>
  <summary>PNPM</summary>
  
  > 安装pnpm的方法可以参考 [pnpm 官网](https://pnpm.io/zh/installation)，或者使用 `npm install -g pnpm`。

  随后在Code的集成终端中执行：
  
    ```sh
    pnpm install # 安装依赖
    pnpm makeOcta && pnpm octa # 生成元数据文件
    pnpm dev # 启动开发服务器
    ```

</details>

<details>
  <summary>npm</summary>

  > 安装npm的方法应该不用教……吧……

  随后在Code的集成终端中执行：
  
    ```sh
    npm install # 安装依赖
    npm makeOcta && pnpm octa # 生成元数据文件
    npm dev # 启动开发服务器
    ```

</details>

<details>
  <summary>yarn</summary>
  
  > 安装yarn的方式为：`npm install yarn -g`，注意如果使用Windows Powershell作为执行环境的话，请首先使用管理员权限运行Powershell并执行 `Set-ExecutionPolicy RemoteSigned`。

  随后在Code的集成终端中执行：
  
    ```sh
    # 安装依赖项目和开发工具
    yarn # 若使用npm，则运行npm install
    # 将内容元数据生成脚本编译为JavaScript
    yarn makeOcta # npm run makeOcta
    # 生成元数据文件
    yarn octa # npm run octa
    # 启动开发环境
    yarn dev # npm run dev
    ```

</details>

第一次启动开发环境的时间会稍微长一些，它会将依赖的外部库编译打包，启动成功之后，可以在 `http://localhost:3000/`访问到页面。如果3000端口已经占用，开发环境会使用其他端口，应该在终端输出中寻找。

## 开发工作

### 创建新分支

创建分支可以让多项工作同时推进而不受干扰。

在开发开始前，首先创建一个新的分支，例如要对导航栏添加动画功能，可以创建分支 `nav_anim`。

```sh
git checkout -b nav_anim
```

该命令会创建并切换到新的分支，之后就可以在此处修改代码了。

### 暂存和提交

当完成了一部分代码的修改时，就可以对这些代码涉及的文件进行暂存。为了添加导航栏动画，有以下文件进行了修改：

- 实现导航按钮动画：
  - `src/layout/navibar/button.tsx`
  - `src/layout/navibar/button.css`
- 实现搜索框动画：
  - `src/layout/navibar/search.tsx`
  - `src/layout/navibar/search.css`

此时，可能已经完成了导航按钮动画，但还没有完成搜索框动画，那么我们要进行的操作是：

```sh
# 添加文件
git add src/layout/navibar/button.tsx
git add src/layout/navibar/button.css
# 提交
git commit -m "实现导航按钮动画"
```

这些操作在命令行中是麻烦的，因此也可以在VSCode左侧的Git面板中进行。

如果要一次性添加某一个目录中的所有改变到暂存区，例如新建了一个目录位于 `src/dm`，并在其下创建了若干文件，并不需要逐一对文件进行 `git add`，只需要 `git add src/dm`即可。

若要一次性将所有改变的文件都添加到暂存区，执行 `git add .`，其中 `.`是当前目录的意思。

需要注意的是，虽然有上面的这些例子，但在开发过程中应该尽量专注于一项任务的进行，例如上面导航栏按钮和搜索框动画的开发，其牵涉的文件实际上更有可能是这样：

- 实现导航按钮动画：
  - `src/layout/navibar/button.tsx`
  - `src/layout/navibar/button.css`
  - `src/layout/navibar/navibar.css`
- 实现搜索框动画：
  - `src/layout/navibar/search.tsx`
  - `src/layout/navibar/search.css`
  - `src/layout/navibar/navibar.css`

这两个任务都牵涉到了 `navibar.css`，如果我们将它和导航按钮动画一并提交，则之后如果要退回到没有搜索框动画的版本时，搜索框的原始样式被破坏了；如果和搜索框动画一起提交，退回到这个提交之前则会使得导航栏按钮的代码完整性被破坏。如果将两个任务合并提交，之后则无法对这两个功能进行拆解。

正确的做法是，只专注与导航栏按钮的开发，而 `navibar.css`中有关搜索框的样式不受影响；提交之后，再进行搜索框的开发。

在涉及多人合作的时候，确实有可能两个功能修改一个文件，这个时候就会产生冲突，git工具又非常好的处理冲突的方式，可以[点击这里](https://git-scm.com/book/zh/v2/Git-工具-高级合并)学习相关内容。

### 推送和合并

依旧以 `navi_anim`分支为例，要将这个分支的内容推送到服务器上，应该在使用 `git push origin navi_anim`，其中 `origin`是克隆仓库后，对远程仓库的默认代称。

对于Gitee和Github来说，仓库管理员可以在网页端进行合并，也可以单独获取分支后在本地合并然后推送。

对于为了功能创建的分支来说，一般功能开发完成后就不再使用，因此不用考虑 `rebase`之类的操作，此处也不再介绍。一般的后续操作是：

```sh
# 回到主分支
git checkout main
# 获取主分支上的更新内容
git pull
# 顺便更新一下子模块的内容
git submodule update
# 创建下一个功能分支
git checkout -b another_feature
```