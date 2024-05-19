'use client';

import { useForm } from 'react-hook-form';
import { useUserService } from '../../../_services';

export default Login;

function Login() {
    const userService = useUserService();

    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const fields = {
        username: register('username', { required: 'Username is required' }),
        password: register('password', { required: 'Password is required' })
    };

    async function onSubmit({ username, password }: any) {
        await userService.login(username, password);
    }

    return (
        <div className='w-full h-dvh  flex items-center justify-center'>
            <div className="flex flex-col items-center justify-center text-dark-100 bg-white-100 h-96 w-96 rounded shadow-lg p-8">
                <h4 className="text-xl mb-4">Iniciar Sesión</h4>
                <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 flex flex-col">
                        <label className="">Usuario</label>
                        <input {...fields.username} type="text" className={`h-10 w-full rounded bg-transparent border border-white text-white outline-double bg-white-50 outline-none px-3 ${errors.username ? 'is-invalid' : ''}`} />
                        <div className="text-red-100">{errors.username?.message?.toString()}</div>
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label className="form-label">Contraseña</label>
                        <input {...fields.password} type="password" className={`h-10 w-full rounded bg-transparent border border-white text-white outline-double bg-white-50 outline-none px-3 ${errors.username ? 'is-invalid' : ''}`} />
                        <div className="text-red-100">{errors.password?.message?.toString()}</div>
                    </div>
                    <button disabled={formState.isSubmitting} className="bg-green-100 opacity-70 w-full rounded h-10 hover:opacity-100">
                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}
