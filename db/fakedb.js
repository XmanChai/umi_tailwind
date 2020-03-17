/*
* created by xmanchai on 2020/3/17
*                               _           _
*                              | |         (_)
* _   _ ____   ____ ____   ____| | _   ____ _
*( \ / )    \ / _  |  _ \ / ___) || \ / _  | |
* ) X (| | | ( ( | | | | ( (___| | | ( ( | | |
*(_/ \_)_|_|_|\_||_|_| |_|\____)_| |_|\_||_|_|
*
*/
module.exports = () => {
  return {
    user: require('mockjs').mock({
      'user|100': [
        {'id|+1': 1, name: '@cname', password: '@string(6, 10)', avatar: `@image(64x64,@color,#FFF,png,@character('upper')`},
      ],
    }),
    article: require('mockjs').mock({
      'article|50': [
        {'id|+1': 1, title: '@ctitle(5,15)', 'keyword|1-3': ['@cword(3,6)'], avatar: `@image(64x64,@color,#FFF,png,@cword(1)`},
      ],
    })
  }
};
