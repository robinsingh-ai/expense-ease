import React, { useEffect } from 'react'
import Image from "next/image";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideNav() {
    const menuList=[
        {
            id:1,
            name:'Dashboard',
            icon:LayoutGrid,
            path:'/dashboard'
        },
        {
            id:2,
            name:'Budgets',
            icon:PiggyBank,
            path:'/dashboard/budgets'
        },
        {
            id:3,
            name:'Expenses',
            icon:ReceiptText,
            path:'/dashboard/expenses'
        },
    ]
    
    const path=usePathname();

    useEffect(()=>{
        console.log(path)
    },[path])

    return (
        <div className='h-screen p-5 border shadow-sm'>
            <div className="flex items-center cursor-pointer">
                <Image src={'./logo.png'} alt='logo' width={80} height={80} />
                <span className="ml-3 text-xl font-bold text-green-600">ExpenseEase</span>
            </div>
            <div className='mt-5'>
                {menuList.map((menu,index)=>(
                    <Link href={menu.path} key={index}>
                        <h2 className={`flex gap-2 items-center
                            text-green-600 font-medium
                            mb-2
                            p-5 cursor-pointer rounded-md
                            hover:text-green-700 hover:bg-green-100
                            ${path==menu.path&&'text-green bg-green-100'}
                        `}>
                            <menu.icon/>
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>
            <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
                <UserButton/>
                Profile
            </div>
        </div>
    )
}

export default SideNav
