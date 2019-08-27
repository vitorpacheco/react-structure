import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import { Container } from './styles';
import AvatarInput from '~/pages/Profile/AvatarInput';

export const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const handleSubmit = (data) => dispatch(updateProfileRequest(data));
  const handleSignOut = () => dispatch(signOut());

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id"/>

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input name="oldPassword" type="password" placeholer="Sua senha atual" />
        <Input name="password" type="password" placeholer="Nova senha" />
        <Input name="confirmPassword" type="password" placeholer="Confirme sua senha" />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>Sair do GoBarber</button>
    </Container>
  );
};

export default Profile;
