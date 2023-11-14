import * as React from 'react';
import { Link, HeadFC } from 'gatsby';
import Layout from '../components/Layout';

export default function NotFoundPage() {
    return (
        <Layout>
            <h1>404</h1>
            <p>Not Found</p>
        </Layout>
    );
}

export const Head: HeadFC = () => <title>Not found</title>;
