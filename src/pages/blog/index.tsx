import React from 'react';
import Layout from '../../components/Layout';
import HeadTemplate from '../../components/Head';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import dayjs from 'dayjs';

export default function Blog() {
    const data = useStaticQuery(graphql`
        query {
            allFeedZennBlog {
                edges {
                    node {
                        title
                        pubDate
                        isoDate
                        enclosure {
                            url
                        }
                        guid
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <div className='max-w-3xl mx-auto px-4 py-24'>
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                    className='text-6xl font-semibold text-black/80'
                >
                    Blog
                </motion.h1>
                <div className='grid md:grid-cols-2 grid-cols-1 mt-8 gap-y-8'>
                    {data.allFeedZennBlog.edges.map(
                        (
                            d: {
                                node: {
                                    title: string;
                                    isoDate: string;
                                    enclosure: { url: string };
                                    guid: string;
                                };
                            },
                            i: number
                        ) => (
                            <motion.a
                                href={d.node.guid}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='block'
                                key={i}
                                initial={{ y: 25, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    ease: 'easeOut',
                                    duration: 0.3,
                                    delay: i * 0.1,
                                }}
                            >
                                <div className='w-72 h-38 bg-gray-200 rounded-lg shadow-lg overflow-hidden mx-auto'>
                                    <img
                                        src={d.node.enclosure.url}
                                        alt=''
                                        className='w-full h-38 object-cover'
                                    />
                                </div>
                                <div className='mt-4'>
                                    <p className='text-lg font-semibold text-center line-clamp-1 w-full'>
                                        {d.node.title}
                                    </p>
                                    <p className='text-sm text-gray-500 text-center'>
                                        {dayjs(new Date(d.node.isoDate)).format(
                                            'YYYY / MM / DD'
                                        )}
                                    </p>
                                </div>
                            </motion.a>
                        )
                    )}
                </div>
            </div>
        </Layout>
    );
}

export function Head() {
    return (
        <HeadTemplate
            title='BLOG'
            description='iizuka0000のブログ'
            keywords=''
        />
    );
}
