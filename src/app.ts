// 运行时配置

import { ProTokenType } from '@ant-design/pro-components';
import { RunTimeLayoutConfig } from '@umijs/max';
import React from 'react';
import { Global } from './GlobalContext';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name: string;
  token: ProTokenType['layout'];
}> {
  const token: ProTokenType['layout'] = {};
  return { name: '@umijs/max', token };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    token: initialState?.token,
  };
};

export const rootContainer = (container: any) => {
  return React.createElement(Global, {}, container);
};
