import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';
import HeadTemplate from '../../components/Head';
import { graphql, useStaticQuery } from 'gatsby';
import 'github-markdown-css/github-markdown-light.css';

export default function Privacy() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: { id: { eq: "2cf98577-7f79-55bf-a5d0-53c7eee0b13b" } }
            ) {
                edges {
                    node {
                        id
                        html
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
                    Privacy Policy
                </motion.h1>
                <div className='mt-8'>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.allMarkdownRemark.edges[0].node.html,
                        }}
                        className='markdown-body py-10 px-6 rounded-lg'
                    />
                </div>
            </div>
        </Layout>
    );
}

export function Head() {
    return (
        <HeadTemplate
            title='PRIVACY POLICY'
            description='プライバシーポリシー - iizuka0000'
            keywords=''
        />
    );
}
