import React from 'react';
import Layout from '../../components/Layout';
import HeadTemplate from '../../components/Head';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';

export default function Skill() {
    const data: {
        allFile: {
            nodes: { name: string; publicURL: string }[];
        };
    } = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "logo" } }) {
                nodes {
                    name
                    publicURL
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
                    My Skill
                </motion.h1>
                <div className='grid md:grid-cols-4 grid-cols-2 py-16 gap-y-16'>
                    {data.allFile.nodes.map((node, i) => (
                        <motion.div
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                ease: 'easeOut',
                                duration: 0.3,
                                delay: i * 0.1,
                            }}
                            key={node.name}
                            className='flex justify-center flex-col items-center gap-3'
                        >
                            <img
                                src={node.publicURL}
                                alt=''
                                className='w-24 h-24'
                            />
                            <p className='text-md font-medium'>{node.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export function Head() {
    return (
        <HeadTemplate
            title='SKILL'
            description='iizuka0000のスキル'
            keywords=''
        />
    );
}
