import React from 'react';

type Props = {
    title: string;
    description: string;
    keywords: string;
    image?: string;
};

// https://cards-dev.twitter.com/validator

const SITE_URL = 'iizuka-0000.github.io';
const INIT_IMAGE = 'src/assets/icon.png';
const SITE_NAME = 'iizuka0000';
const NAME = 'iizuka0000';

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
                content={props.image ? props.image : INIT_IMAGE}
            />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:site' content={`@${NAME}`} />
            <meta name='twitter:creator	' content={`@${NAME}`} />
            <meta
                name='twitter:image'
                content={props.image ? props.image : INIT_IMAGE}
            />
        </>
    );
}
