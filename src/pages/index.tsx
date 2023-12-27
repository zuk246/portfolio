import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import {
    AiFillFire,
    AiOutlineContacts,
    AiOutlineCopyrightCircle,
    AiOutlineGithub,
    AiOutlineRise,
    AiOutlineTwitter,
} from 'react-icons/ai';
import ZennLogo from '../assets/third/zenn-logo';
import AtcoderLogo from '../assets/third/atcoder-logo';
import { StaticImage } from 'gatsby-plugin-image';
import HeadTemplate from '../components/Head';
import { motion } from 'framer-motion';
import NoteLogo from '../assets/third/note-logo';
import MarshmallowLogo from '../assets/third/marshmallow-logo';
import BuyMeACoffeeLogo from '../assets/third/butmeacoffee-logo';

const card =
    'bg-indigo-200 hover:scale-[1.005] duration-300 shadow-inner relative rounded-3xl overflow-hidden';

export default function Home() {
    return (
        <Layout>
            <div className='pb-8 md:block hidden'></div>
            <div className='relative w-full h-[100svh] md:w-[calc(100%-4rem)] md:h-[calc(100svh-4rem)] mx-auto md:rounded-[2.6rem] shadow-sm shadow-inset bg-gradient-to-br from-stone-500 to-zinc-500'>
                <svg
                    viewBox='0 0 260 260'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='none'
                    className='w-full h-full absolute mix-blend-lighten bg-cover md:rounded-[2.6rem]'
                >
                    <filter id='noiseFilter'>
                        <feTurbulence
                            type='fractalNoise'
                            baseFrequency='4'
                            numOctaves='6'
                            stitchTiles='stitch'
                        />
                    </filter>
                    <rect
                        width='100%'
                        height='100%'
                        filter='url(#noiseFilter)'
                    />
                </svg>
                <div className='absolute mix-blend-lighten opacity-70 top-0 left-0 w-full h-full block md:rounded-[2.6rem] bg-custom-gradient contrast-125 brightness-110 blur'></div>
                <div className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 flex flex-col gap-6 justify-center text-center'>
                    <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 0.4 }}
                        className='md:text-4xl text-2xl font-semibold'
                    >
                        hey, I am
                    </motion.p>
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: 'easeOut',
                            duration: 0.4,
                            delay: 0.4,
                        }}
                        className='md:text-8xl text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-indigo-600 to-fuchsia-600'
                    >
                        iizuka0000
                    </motion.h1>
                    <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 1, delay: 1 }}
                        className='md:text-2xl text-lg font-semibold text-black/60'
                    >
                        I'm a Japanese high school student.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.8, delay: 1 }}
                    className='absolute sm:right-10 sm:w-auto w-full sm:justify-normal justify-center bottom-10 flex sm:gap-4 gap-3'
                >
                    <a
                        href='https://twitter.com/iizuka0000'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <AiOutlineTwitter size={30} className='fill-black/70' />
                    </a>
                    <a
                        href='https://github.com/iizuka-0000'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <AiOutlineGithub size={30} className='fill-black/70' />
                    </a>
                    <a
                        href='https://zenn.dev/iizuka0000'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <ZennLogo size={30} className='fill-black/70' />
                    </a>
                    <a
                        href='https://atcoder.jp/users/iizuka0000'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <AtcoderLogo size={30} className='fill-black/70' />
                    </a>
                    <a
                        href='https://note.com/iizuka0000'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <NoteLogo size={30} className='fill-black/70' />
                    </a>
                    <a
                        href='https://marshmallow-qa.com/rva7l77i8ivn1g0?t=jza8R4&utm_medium=url_text&utm_source=promotion'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <MarshmallowLogo size={30} className='fill-black/70' />
                    </a>
                    <a
                        href='https://www.buymeacoffee.com/iizuka0000'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <BuyMeACoffeeLogo size={30} className='fill-black/70' />
                    </a>
                </motion.div>
            </div>
            <div className='pt-8'></div>
            <div className='w-[calc(100%-4rem)] mx-auto'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                    <Link
                        to='/about'
                        className={`${card} hover:brightness-110 aspect-square md:row-span-2`}
                    >
                        <StaticImage
                            src='../assets/img/gradient1.webp'
                            alt=''
                            className='h-full bg-cover brightness-90-0 left-0 rounded-3xl z-0 blur'
                        />
                        <div className='absolute bottom-0 left-0 w-full p-8'>
                            <AiOutlineContacts
                                size={40}
                                className='fill-white'
                            />
                            <p className='text-2xl font-semibold text-white'>
                                ABOUT
                            </p>
                            <p className='text-md text-white/90'>自己紹介</p>
                        </div>
                    </Link>
                    <Link
                        to='/blog'
                        className={`${card} hover:brightness-110 md:col-span-2 md:aspect-auto aspect-square`}
                    >
                        <StaticImage
                            src='../assets/img/gradient2.webp'
                            alt=''
                            className='h-full w-full bg-cover brightness-90 absolute top-0 left-0 rounded-3xl z-0 blur'
                        />
                        <div className='absolute bottom-0 left-0 w-full p-6'>
                            <div className='flex items-center gap-2'>
                                <AiOutlineRise
                                    size={40}
                                    className='fill-white'
                                />
                                <p className='text-2xl font-semibold text-white'>
                                    BLOG
                                </p>
                            </div>
                            <p className='text-md text-white/90'>
                                過去に投稿したブログ
                            </p>
                        </div>
                    </Link>
                    <Link
                        to='/skill'
                        className={`${card} hover:brightness-110 md:col-span-2 md:aspect-auto aspect-square`}
                    >
                        <StaticImage
                            src='../assets/img/gradient3.webp'
                            alt=''
                            className='h-full w-full bg-cover brightness-90 absolute top-0 left-0 rounded-3xl z-0 blur'
                        />
                        <div className='absolute bottom-0 left-0 w-full p-6'>
                            <div className='flex items-center gap-2'>
                                <AiFillFire size={40} className='fill-white' />
                                <p className='text-2xl font-semibold text-white'>
                                    SKILL
                                </p>
                            </div>
                            <p className='text-md text-white/90'>
                                過去に利用したことがある技術一覧
                            </p>
                        </div>
                    </Link>
                    <div
                        className={`${card} md:col-span-2 h-32 md:block hidden`}
                    >
                        <StaticImage
                            src='../assets/img/gradient5.webp'
                            alt=''
                            className='h-full w-full bg-cover brightness-90 absolute top-0 left-0 rounded-3xl z-0 blur'
                        />
                    </div>
                    <div className={`${card} md:col-span-1 h-32`}>
                        <StaticImage
                            src='../assets/img/gradient4.webp'
                            alt=''
                            className='h-full w-full bg-cover brightness-90 absolute top-0 left-0 rounded-3xl z-0 blur'
                        />
                        <div className='absolute bottom-1/2 translate-y-1/2 left-0 w-full pl-10'>
                            <div className='flex items-center gap-1'>
                                <AiOutlineCopyrightCircle
                                    size={14}
                                    className='fill-white'
                                />
                                <p className='text-sm font-semibold text-white'>
                                    {new Date().getFullYear()} iizuka0000
                                </p>
                            </div>
                            <Link
                                to='/privacy'
                                className='text-white underline'
                            >
                                プライバシーポリシー
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-8'></div>
        </Layout>
    );
}

export function Head() {
    return (
        <HeadTemplate
            title=''
            description='iizuka0000のポートフォリオサイト'
            keywords=''
        />
    );
}
