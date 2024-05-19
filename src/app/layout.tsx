import React from 'react';
import './globals.css';

export const metadata = {
    title: 'Agendamiento de turnos'
}

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className='bg-black text-white w-full h-full'>
                {children}
            </body>
        </html>
    );
}
