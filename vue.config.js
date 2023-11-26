const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const { VantResolver } = require("@vant/auto-import-resolver");
const Components = require("unplugin-vue-components/webpack");
module.exports = defineConfig({
  publicPath: "./",
  configureWebpack: {
    plugins: [
      AutoImport({
        imports: ["vuex", "vue", "vue-router"],
        eslintrc: {
          enabled: false, // 生成 .eslintrc-auto-import.json 文件
        },
      }),
      Components({
        resolvers: VantResolver({ importStyle: "css" }),
      }),
    ],
  },
});
