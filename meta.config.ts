import type { ResumeData } from './src/common/typings/resume'

export const metaData: () => ResumeData = () => {
  return {
    contact: {
      title: '联系方式',
      content: {
        phone: { label: '电话: ', value: '13018414729' },
        email: { label: '邮箱: ', value: 'lhq12230@gmail.com' },
        site: { label: 'Github: ', value: 'github.com/ffxixslh' },
      },
    },
    info: {
      title: '基本信息',
      content: {
        name: { label: '姓名: ', value: '罗浩权' },
        degree: { label: '学历: ', value: '统招本科（2023届）' },
        college: { label: '院校: ', value: '韩山师范学院' },
        major: { label: '专业: ', value: '计算机科学与技术' },
      },
    },
    skills: {
      title: '个人技能',
      content: [
        '能使用 HTML + CSS 结合 TailwindCSS 、 Sass 等前端技术进行设计稿还原',
        '熟悉 JavaScript ，了解 TypeScript ，能运用 ES6 、 ES7 等高级语法开发',
        '常用 React 进行项目开发，了解过其源码，理解其运行原理',
        '经常封装组件、方法和 Hooks ，以提高编程效率和提升代码复用性',
        '了解常见数据结构及常用算法，和基本的网络知识',
        '了解 Node.js ，常用 Express 、 Koa 、 Vite 等技术搭建接口服务器',
        '了解 Git 基本操作，经常将项目代码提交到 Github 等代码托管平台',
      ],
    },
    projects: {
      title: '项目经历',
      content: [
        {
          projectTitle: '基于 WebRTC 的实时音视频通讯项目（个人毕设项目）',
          projectTechnology: [
            'Vite',
            'TypeScript',
            'React',
            'Redux',
            'ReactRouter',
            'NodeJS',
            'SocketIO',
          ],
          projectIntro:
            '该项目是本人的毕业设计，全面使用 React.FC + TypeScript 进行编写，前端样式主要用 UnoCSS 编写，其次用 AntDesign 5 来实现一些弹窗功能等，此外，自己也封装了一些样式组件和 hooks 来复用代码和逻辑。项目主要实现了实时音视频通话、文本信息传输、屏幕共享和用户私聊等功能。',
          projectContent: [
            '1. 全面使用 TypeScript 进行开发，为代码提供静态类型检查，增强代码健壮性和可维护性',
            '2. 前端采用 React 函数式组件开发，使用 memo, useCallback 等函数对项目进行性能优化',
            '3. 使用 Redux-Toolkit 进行状态管理，使用 React-Router v6 进行路由的配置与开发，并用内置的 Hooks 来编写逻辑',
            '4. 封装自定义 Hooks 来复用代码和逻辑，以减少展示型组件与逻辑代码的耦合程度',
            '5. 后端使用 Koa 开发，封装静态核心类来统一管理其他模块',
            '6. 封装多个中间件来处理请求和响应，如对捕获的异常打印到日志上，检查前端发送的请求是否合法等',
          ],
        },
        {
          projectTitle: '仿网易云音乐网页端项目（个人项目）',
          projectTechnology: [
            'Vite',
            'React',
            'Redux',
            'ReactRouter',
            'AntDesign',
            'Sass',
          ],
          projectIntro:
            '该项目是本人学习 React 技术栈而创建开发的，使用 Vite 创建项目来学习模块化等项目的概念和知识，使用 Sass 来学习 CSS 模块化的知识。',
          projectContent: [
            '1. 项目使用类组件和函数组件共同开发，使用 memo 、 useCallback 等函数进行性能优化',
            '2. 采用 React-Redux 进行状态管理，用 React-Router 进行路由开发，封装路由函数，采用懒加载优化性能',
            '3. 样式主要采用 Styled-Components 库进行编写，部分采用 Scss 模块化编写',
            '4. 使用 Vite 快速搭建开发环境和代码管理',
          ],
        },
      ],
    },
    evaluation: {
      title: '自我评价',
      content: [
        '喜欢学习、钻研前端技术，平时有阅读前端书籍，如红宝书、YDNJS 、犀牛书等；',
        '经常去 StackOverflow / Github / 掘金 等平台了解前端趋势、学习编程技术；',
        '喜欢英语，能流利阅读英文文档，有良好的听说读写能力；',
        '在学习过程中会经常做笔记，并在博客分享学习到的知识；',
        '有较好的抗压能力，积极向上，善于交流，刻苦耐劳；',
      ],
    },
  }
}
