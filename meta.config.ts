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
        degree: { label: '学历: ', value: '统招本科' },
        college: { label: '院校: ', value: '韩山师范学院' },
        major: { label: '专业: ', value: '计算机科学与技术' },
      },
    },
    skills: {
      title: '个人技能',
      content: [
        '能使用 HTML + CSS 结合 TailwindCSS 、 UnoCSS 等前端技术进行设计稿还原',
        '熟悉 JavaScript ，了解 TypeScript ，能运用 ES6 、 ES7 等高级语法开发',
        '常用 React 进行项目开发，了解其源码，理解其运行原理',
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
          projectTitle: '项目1',
          projectIntro: '项目1是。。。',
          projectContent: ['解决了...', '解决了。。。', '解决了'],
        },
      ],
    },
    evaluation: {
      title: '自我评价',
      content: ['im good', 'im good', 'im good', 'im good'],
    },
  }
}
