import React from 'react';
import MenuBar from './base/MenuBar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <MenuBar />
            {children}
        </div>
    );
}
