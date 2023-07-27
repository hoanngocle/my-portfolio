import React from 'react';

function Layout({ children, className = '' }: { children: React.ReactNode; className: string }) {
    return <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`}>{children}</div>;
}

export default Layout;
