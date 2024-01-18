import React from 'react';
import Layout from '../../components/Layout';
import HeadTemplate from '../../components/Head';
import { motion } from 'framer-motion';

const introducing = `
こんにちは。zuk246と申します。
2007年生まれで、今は高校生です。

趣味でプログラミングをしています。
最近は、Next.jsやTypeScriptを使ったWebアプリケーションの開発をしています。
Atcoderでは、入緑を目指して日々精進しています。

まだ初心者なので間違いがあったら教えてください。`;

export default function About() {
    return (
        <Layout>
            <div className='max-w-3xl mx-auto px-4 py-24'>
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                    className='text-6xl font-semibold text-black/80'
                >
                    About Me
                </motion.h1>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                    className='text-xl font-semibold text-black/80'
                >
                    自己紹介
                </motion.p>
                <div className='flex flex-col gap-5 mt-8'>
                    {introducing.split('\n').map((d, i) => (
                        <motion.p
                            key={i}
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                ease: 'easeOut',
                                duration: 0.3,
                                delay: i / 10,
                            }}
                            className='text-2xl font-bold w-full text-black/70'
                        >
                            {d}
                        </motion.p>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export function Head() {
    return (
        <HeadTemplate
            title='ABOUT'
            description='zuk246の自己紹介'
            keywords=''
        />
    );
}
