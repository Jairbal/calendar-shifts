import { redirect } from 'next/navigation';

import { auth } from '../../_helpers/server';
import { Alert } from '../../_components';

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    // if logged in redirect to home page
    if (auth.isAuthenticated()) {
        redirect('/');
    }

    return (
        <>
            <Alert />
            <div>
                {children}
            </div>
        </>
    );
}