import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '../_helpers/server';
import { Alert, Nav } from '../_components';

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    // if not logged in redirect to login page
    if (!auth.isAuthenticated()) {
        const returnUrl = encodeURIComponent(headers().get('x-invoke-path') || '/');
        redirect(`/account/login?returnUrl=${returnUrl}`);
    }

    return (
        <div className="bg-skyBlue-100">
            <Alert />
            <div className="p-4 flex justify-between">
                <div className="container w-[50%]">
                    {children}
                </div>
                <Nav />
            </div>
        </div>
    );
}
