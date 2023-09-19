'use client';
import { useState } from 'react';
import handlerAcessUser from './functions/handlerAcess';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Button from './components/Button';
import Block from './components/Block';
import Form from './components/Form';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if (userAuth.token === undefined) {
        toast.error('E-mail ou senha incorretamente inseridos.');
      }
      push('/pages/dashboard');
    } catch {
      toast.error('Erro na aplicação.');
      refresh();
    }
  };
  return (
    <Block title={'Login'}>
      <Form onSubmit={handlerLogin}>
        <input
          placeholder='E-mail'
          type='email'
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        ></input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        ></input>
        <div className='justify-self-end'>
          <Button type={'reset'} secondary={true}>Limpar</Button>
          <Button>Entrar</Button>
        </div>
      </Form>
      <ToastContainer />
    </Block>
  );
}
