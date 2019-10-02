import React from 'react';
import { Button, Checkbox, Form, Icon, Input } from 'antd';

import { ButtonLogin, EsqueciSenha, FormLogin } from '~/pages/Home/styles';

export const Home = props => {
  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <FormLogin onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Informe o nome de usuário' }],
        })(
          <Input
            prefix={
              <Icon
                type="user"
                style={{ color: 'rgba(0, 0, 0, .25)' }}
              />
            }
            placeholder="Usuário"
          />
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Informe sua senha' }],
        })(
          <Input
            prefix={
              <Icon
                type="lock"
                style={{ color: 'rgba(0, 0, 0, .25)' }}
              />
            }
            type="password"
            placeholder="Senha"
          />
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Lembrar-me</Checkbox>)}
        <EsqueciSenha href="" className="login-form-forgot">
          Esqueci a senha
        </EsqueciSenha>
        <ButtonLogin
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Entrar
        </ButtonLogin>
        Ou <a href="">registrar agora!</a>
      </Form.Item>
    </FormLogin>
  );
};

export default Form.create({ name: 'login_form' })(Home);
