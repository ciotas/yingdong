module.exports = {
  // presets: [
  //   '@vue/cli-plugin-babel/preset',
  // ],
  // 配合babel-plugin-component、babel-preset-env使用，来按需加载element组件库
  presets: ["@vue/app"],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}