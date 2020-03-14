// ref: https://umijs.org/config/

const fs = require('fs');
const glob = require('glob');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const PurgeCssPlugin = require('@fullhuman/postcss-purgecss');

export default {
  publicPath: '/',
  autoprefixer: {
    overrideBrowserslist: [
      "iOS >= 6",
      "Android >= 4",
      "IE >= 9"
    ]
  },
  extraPostCSSPlugins:
    process.env.NODE_ENV === 'production'
      ? [
        PurgeCssPlugin({
          content: [
            resolveApp('./**/*.html'),
            ...glob.sync(path.join(resolveApp('src'), '/**/*.{js,jsx}'), {
              nodir: true,
            }),
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
      ]
      : [],
  hash: true,
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [{path: '/', component: '../pages/index'}],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        links:[
          { rel: 'icon', href: ' <%= PUBLIC_PATH %>favicon.ico' },
        ],
        antd: false,
        dva: true,
        dynamicImport: false,
        title: 'umi.tailwind',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
