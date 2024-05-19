'use client';

import { useState } from 'react';
import { useUserService } from '../_services';

export { Nav };

function Nav() {
    const [loggingOut, setLoggingOut] = useState<boolean>(false);
    const userService = useUserService();

    async function logout() {
        setLoggingOut(true);
        await userService.logout();
    }

    return (
        <div className='flex justify-end mr-5 text-white-50'>
            <button onClick={logout} disabled={loggingOut}>
                {loggingOut
                    ? <span className="spinner-border spinner-border-sm"></span>
                    : <span className='mt-5'>Cerrar Sesión</span>
                }
            </button>
        </div>
    );
}