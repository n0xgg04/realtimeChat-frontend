import React from 'react';

interface IChatContainerProps {
    children: React.ReactNode;
}
export default React.memo(function({children}: IChatContainerProps) : JSX.Element {
    return (
        <section className="messenger" style={{
            overflow: "hidden",
        }}>
            {children}
        </section>
    )
})