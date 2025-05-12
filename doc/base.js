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
