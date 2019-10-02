import React from 'react';
import { Form, Icon, Input } from 'antd';

import { FormLogin } from '~/pages/Home/styles';

export const Home = (props) => {

  const handleSubmit = e => {
    e.preventDefault();
  };

  const {getFieldDecorator} = props.form;

  return (
    <FormLogin onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Preencha o nome de usuário' }]
        })(
          <Input prefix={<Icon type="user" placeholder="Usuário" style={{color: 'rgba(0, 0, 0, .25)'}} />}/>
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Preencha o nome de usuário' }]
        })(
          <Input prefix={<Icon type="user" placeholder="Usuário" style={{color: 'rgba(0, 0, 0, .25)'}} />}/>
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Preencha o nome de usuário' }]
        })(
          <Input prefix={<Icon type="user" placeholder="Usuário" style={{color: 'rgba(0, 0, 0, .25)'}} />}/>
        )}
      </Form.Item>

    </FormLogin>
  );
};

export default Form.create({name: 'login_form'})(Home);
