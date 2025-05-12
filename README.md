
# token-storage


### 描述

用于存储和获取浏览器客户端token


### 安装

```shell
npm i --save @kne/token-storage
```


### 概述

该模块提供了简单的Token存储管理功能，支持两种存储方式：
1. 同域存储（使用localStorage）
2. 跨域存储（使用Cookies）

主要功能包括设置Token、获取Token和移除Token操作，适用于前端身份认证场景。

### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _TokenStorage(@kne/current-lib_token-storage)[import * as _TokenStorage from "@kne/token-storage"],antd(antd)

```jsx
const { default: tokenStorage } = _TokenStorage;
const { Flex, Button, App } = antd;

const BaseExample = () => {
  const { message } = App.useApp();
  return (
    <Flex gap={12}>
      <Button
        onClick={() => {
          tokenStorage.setToken('X-User-Token', '1234567890');
        }}>
        设置token
      </Button>
      <Button
        onClick={() => {
          message.info('token: ' + tokenStorage.getToken());
        }}>
        获取token
      </Button>
      <Button
        onClick={() => {
          tokenStorage.removeToken();
        }}>
        移除token
      </Button>
    </Flex>
  );
};

render(<BaseExample />);

```


### API

| 方法名 | 参数 | 返回值 | 描述 |
|--------|------|--------|------|
| `setToken` | `(tokenValue: string, tokenKey?: string, options?: object)` | `void` | 设置Token到存储系统 |
| `getToken` | `(tokenKey?: string, options?: object)` | `string \| null` | 从存储系统获取Token |
| `removeToken` | `(tokenKey?: string, options?: object)` | `void` | 从存储系统移除Token |

### 参数说明

#### 公共参数
- `tokenKey`: 可选，默认值 `'X-User-Token'`，指定存储的键名
- `options`: 可选配置对象，包含：
    - `sameDomain`: 布尔值，默认`true`，是否使用同域存储

## 注意事项
1. 当`sameDomain`为`true`时使用localStorage API，为`false`时使用Cookies
2. 默认存储键名为`'X-User-Token'`，可通过参数自定义
3. 所有方法都支持可选参数，提供灵活的调用方式
