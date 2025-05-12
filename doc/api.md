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