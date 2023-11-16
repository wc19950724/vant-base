const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const { VantResolver } = require("unplugin-vue-components/resolvers");
const Components = require("unplugin-vue-components/webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        imports: ["vuex", "vue", "vue-router"],
        eslintrc: {
          enabled: false, // 生成 .eslintrc-auto-import.json 文件
        },
      }),
      Components({
        resolvers: VantResolver(),
      }),
    ],
  },
});
