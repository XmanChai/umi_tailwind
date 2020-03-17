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
import {delay} from 'roadhog-api-doc';
import Mock from 'mockjs';

const usersMock = Mock.mock({
  total: 100,
  'list|100': [
    {
      'id|+1': 1,
      name: '@cname',
      password: '@string(6, 10)',
      avatar: `@image(64x64,@color,#FFF,png,@character('upper')`,
    },
  ],
});

export default delay({
  'GET /api/users': (res, req) => {
    req.send(usersMock);
  },
});
