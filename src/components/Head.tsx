import React from 'react';

type Props = {
    title: string;
    description: string;
    keywords: string;
    image?: string;
};

const SITE_URL = 'https://zuk246.github.io/portfolio';
const SITE_NAME = 'zuk246';
const NAME = 'zuk246';
const DEFAULT_IMAGE =
    'https://zuk246.github.io/portfolio/static/icon-65133f33b73bb056ed07d38864093f0d.png';

export default function HeadTemplate(props: Props) {
    const SITE_TITLE = props.title !== '' ? props.title + ` | ${NAME}` : NAME;
    return (
        <>
            <meta charSet='utf-8' />
            <html lang='ja' />
            <body className='bg-neutral-100 dark:bg-stone-700' />
            <meta name='format-detection' content='telephone=no' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

            <title>{SITE_TITLE}</title>
            <meta name='keywords' content={props.keywords} />
            <meta name='description' content={props.description} />
            <meta name='author' content={NAME} />
            <link rel='canonical' href={SITE_URL} />

            <meta property='og:site_name' content={SITE_NAME} />
            <meta property='og:title' content={SITE_TITLE} />
            <meta property='og:description' content={props.description} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={SITE_URL} />
            <meta
                property='og:image'
                content={props.image ? props.image : DEFAULT_IMAGE}
            />

            <meta
                name='google-site-verification'
                content='5BbP6BNOv2G4lXFIJMtjaZ_clLvqmAuN4Qk6O_j0dEw'
            />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:site' content={`@${NAME}`} />
            <meta name='twitter:creator	' content={`@${NAME}`} />
            <meta
                name='twitter:image'
                content={props.image ? props.image : DEFAULT_IMAGE}
            />
        </>
    );
}
