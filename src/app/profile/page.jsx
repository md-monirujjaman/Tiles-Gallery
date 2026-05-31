'use client'
import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    
    // console.log(user, "user")
    return (
        <div className='mt-10'>
            <Card className='max-w-96 mx-auto'>
                <div className="items-center gap-3 p-8 flex flex-col text-center">
                    {user?.image ? (
                        <Image
                            src={user.image}
                            alt="user"
                            width={80}
                            height={80}
                            className="rounded-full justify-center"
                        />
                    ) : (
                        <FaUserCircle size={40} />
                    )}

                    <div className='space-y-2'>
                        <p className='font-bold text-[#5a00ff] text-xl'>{user?.name || 'Guest User'}</p>
                        <p className="text-sm text-gray-500 mb-4">
                            {user?.email || 'No email'}
                        </p>
                        <UpdateUserModal></UpdateUserModal>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;