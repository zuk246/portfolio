import * as React from 'react';
import { Link, HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
    return (
        <Layout>
            <div className='max-w-3xl mx-auto px-4 py-24'>
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                    className='text-6xl font-semibold text-black/80'
                >
                    404 Not Found
                </motion.h1>
                <div className='mt-8'>
                    <p>お探しのページが見つかりませんでした。</p>
                    <Link className='underline mt-2' to='/'>トップに戻る</Link>
                </div>
            </div>
        </Layout>
    );
}

export const Head: HeadFC = () => <title>Not found</title>;
