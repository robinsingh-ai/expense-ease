"use client"
import React from 'react';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { useUser, UserButton } from "@clerk/nextjs";
import Link from 'next/link';

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <div className="flex items-center cursor-pointer">
        <Image src={'./logo.png'} alt='logo' width={70} height={70} />
        <span className="ml-3 text-xl font-bold text-green-600">ExpenseEase</span>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className='flex gap-3 items-center'>
          <Link href={'/dashboard'}>
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-100 hover:border-green-600">SignIn</Button>
          </Link>
          {/* <Link href={'/sign-in'}>
            <Button className="bg-green-500 hover:bg-green-600">Get Started</Button>
          </Link> */}
        </div>
      )}
    </div>
  );
}

export default Header;
