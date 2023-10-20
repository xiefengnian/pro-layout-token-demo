import { globalContext } from '@/GlobalContext';
import { PageContainer, ProCard, ProTable } from '@ant-design/pro-components';
import { Button, ColorPicker, Divider, Menu, Slider, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';

const HomePage: React.FC = () => {
  const {
    appearance,
    setAppearance,
    setColorPrimary,
    colorPrimary,
    borderRadius,
    setBorderRadius,
    setMenuToken,
  } = React.useContext(globalContext);
  return (
    <PageContainer ghost>
      <Title>Global</Title>
      <Space>
        <Button onClick={() => setAppearance('dark')}>dark</Button>
        <Button onClick={() => setAppearance('light')}>light</Button>
        <ColorPicker
          value={colorPrimary}
          onChange={(e) => {
            setColorPrimary(e.toHexString());
          }}
        ></ColorPicker>
        <Slider
          value={borderRadius}
          style={{ width: 100 }}
          min={1}
          max={20}
          step={1}
          onChange={(e) => {
            setBorderRadius(e);
          }}
        ></Slider>
      </Space>
      <Divider></Divider>
      <Title>Menu</Title>
      <Space>
        <Menu
          style={{ width: 234 }}
          mode="inline"
          items={[
            {
              key: '1',
              label: 'test',
              children: [
                {
                  key: '1-1',
                  label: 'test ',
                },
              ],
            },
          ]}
        ></Menu>
        <ProCard title="menu token"></ProCard>
      </Space>

      <Divider></Divider>
      <ProTable></ProTable>
    </PageContainer>
  );
};

export default HomePage;
