'use client';
import Block from '@/app/components/Block';
import Button from '@/app/components/Button';
import Form from '@/app/components/Form';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Alter(){
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        if(user.name == '' || user.email == '' || user.password == ''){
            console.log('a')
            return toast.error('Há campos não preenchidos!');
        }

        toast.success('Usuário atualizado!')
    }

    return (
        <Block title={'Atualizar'}>
            <Form onSubmit={handleUpdate}>
                <input
                placeholder='Nome'
                type='text'
                onChange={(e) => {
                    setUser({ ...user, name: e.target.value });
                }}/>
                <input
                placeholder='E-mail'
                type='email'
                onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                }}/>
                <input
                placeholder='Senha'
                type='password'
                onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                }}/>
                <div className='justify-self-end'>
                  <Button type={'reset'} secondary={true}>Limpar</Button>
                  <Button>Alterar</Button>
                </div>
            </Form>
            <ToastContainer/>
        </Block>
    )
}