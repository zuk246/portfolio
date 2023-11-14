import { Link } from 'gatsby';
import React, { useState } from 'react';
import {
    AiOutlineClose,
    AiOutlineContacts,
    AiOutlineFire,
    AiOutlineHome,
    AiOutlineMenu,
    AiOutlineRise,
} from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function MenuBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div className='md:block hidden fixed bottom-14 right-1/2 translate-x-1/2 z-50'>
                <div className='flex gap-6 bg-white/40 backdrop-blur-2xl py-5 px-6 rounded-2xl border-2 border-neutral-300/50'>
                    <Link to='/' className='flex gap-1 items-center'>
                        <AiOutlineHome size={20} />
                        <p>HOME</p>
                    </Link>
                    <Link to='/about' className='flex gap-1 items-center'>
                        <AiOutlineContacts size={20} />
                        <p>ABOUT</p>
                    </Link>
                    <Link to='/blog' className='flex gap-1 items-center'>
                        <AiOutlineRise size={20} />
                        <p>BLOG</p>
                    </Link>
                    <Link to='/skill' className='flex gap-1 items-center'>
                        <AiOutlineFire size={20} />
                        <p>SKILL</p>
                    </Link>
                </div>
            </div>
            <div className='md:hidden fixed top-0 left-0 w-full h-16 px-6 shadow flex bg-white/30 backdrop-blur-lg justify-between items-center z-50'>
                <div></div>
                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileTap={{ rotate: 60, scale: 1.2 }}
                >
                    {isMenuOpen ? (
                        <AiOutlineClose size={26} />
                    ) : (
                        <AiOutlineMenu size={26} />
                    )}
                </motion.button>
                <motion.div
                    initial={{ x: 200, y: -500, opacity: 0 }}
                    animate={
                        isMenuOpen
                            ? { x: 0, y: 0, opacity: 1 }
                            : { x: 200, y: -500, opacity: 0 }
                    }
                    transition={{ type: 'spring', duration: 0.5 }}
                    className='fixed right-6 top-20 flex flex-col gap-4 backdrop-blur-xl bg-white/30 shadow py-6 pr-16 pl-6 rounded-lg z-40'
                >
                    <Link to='/' className='flex gap-2 items-center'>
                        <AiOutlineHome size={24} />
                        <p>HOME</p>
                    </Link>
                    <Link to='/about' className='flex gap-2 items-center'>
                        <AiOutlineContacts size={24} />
                        <p>ABOUT</p>
                    </Link>
                    <Link to='/blog' className='flex gap-2 items-center'>
                        <AiOutlineRise size={24} />
                        <p>BLOG</p>
                    </Link>
                    <Link to='/skill' className='flex gap-2 items-center'>
                        <AiOutlineFire size={24} />
                        <p>SKILL</p>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
