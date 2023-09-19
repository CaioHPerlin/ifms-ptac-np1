import UserList from '@/app/components/UserList';
import LogoutButton from '@/app/components/LogoutButton';
import Link from 'next/link';
import { getUsers } from '@/app/functions/handlerAcessAPI';
import { Suspense } from 'react';
import Block from '@/app/components/Block';
import Button from '@/app/components/Button';

export default async function Dashboard() {
   
    const users = getUsers();

    return (
        <Block title={'Dashboard'}>
            <Suspense fallback={<p>Loading...</p>}>
                <UserList list={users}/>
            </Suspense>
            <div className='flex justify-end mt-5'>
                {/*
                <Button><Link href={'/pages/dashboard/register'}>Register</Link></Button>
    <Button><Link href={'/pages/dashboard/alter'}>Alter</Link></Button>*/}
                <LogoutButton/>
            </div>
        </Block>
    );
};