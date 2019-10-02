import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const AuthLayout = ({ children }) => {
  return (
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', textAlign: 'center', padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default AuthLayout;
