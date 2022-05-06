//关于插件的一些理解
//------------first
//怎么理解eslint-plugin-vue和vue-eslint-parser的关系呢?
//ESLint 会对我们的代码进行校验，而 parser 的作用是将我们写的代码转换为 ESTree，ESLint 会对 ESTree 进行校验。
//vue-eslint-parser文档上说是vue的模板解析器。vue-eslint-parser的文档中强调<template>标签中的内容进行检查。
//那么我的理解是vue-eslint-parser将vue文件转换成ESTree。然后使用eslint-plugin-vue来检查这个ESTree。查出的结果交给ESLint。

//------------second
//typescript-eslint/eslint-plugin和typescript-eslint/parser类似与“first”

//------------third

//这是eslint的配置文件
module.exports = {
    // ↓默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
    // ↓此项是用来告诉eslint找当前配置文件不能往父级查找
    root: true,
    // ↓指定你想启用的环境
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    // ↓设置解析器
    parser: "vue-eslint-parser",
    // ↓解析器选项
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: "module",
        jsxPragma: "React",
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
    },
    // ↓扩展项
    extends: [
        'plugin:vue/vue3-recommended',
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended"//一个待解决的小问题，reommended有什么用
    ],
    // ↓自定义规则配置
    rules: {},
  };
  