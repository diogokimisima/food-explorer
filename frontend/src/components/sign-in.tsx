import Logo from '../assets/explorer.svg'
import Eye from '../assets/eye.svg'
import EyeOff from '../assets/eye-off.svg'
import { useState } from 'react';

export function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleTogglePasswordVisibility = () => {
        const passwordInput = document.querySelector('input[name="password"]');
        if (passwordInput) {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
        }
    };

    return (
        <div className="h-lvh flex justify-center lg:flex-row flex-col items-center mx-10 md:mx-28 gap-y-10">
            <div className="flex justify-center items-center gap-4 w-1/2">
                <img src={Logo} alt="Food Explorer Logo" />
                <h1 className="lg:text-[42px] text-[35px] font-bold text-light-100 text-nowrap">Food Explorer</h1>
            </div>

            <div className="lg:bg-dark-700 w-full h-auto lg:w-[476px] lg:h-[504px] flex flex-col justify-center items-center gap-8 rounded-xl">
                <h2 className="text-[32px] font-poppins hidden lg:block">Faça Login</h2>
                <form method="post" className="w-full lg:px-16 flex flex-col items-center gap-2">
                    <div className="flex flex-col w-full gap-2">
                        <label className='text-light-400'>Email</label>
                        <input className="bg-dark-900 w-30 lg:w-full rounded-md p-3 border-dark-900 focus:border-light-100" type="text" name="username" placeholder='Exemplo: exemplo@exemplo.com.br' required /><br />
                    </div>
                    <div className="flex flex-col w-full gap-2 mb-8">
                        <label className='text-light-400'>Senha</label>
                        <div className="relative">
                            <input
                                className="bg-dark-900 rounded-md border border-dark-900 focus:border-light-100 p-3 placeholder:text-light-500 w-full pr-10"
                                type="password"
                                name="password"
                                placeholder='No mínimo 6 caracteres'
                                required
                            />
                            <button type='button' onClick={handleTogglePasswordVisibility}>
                                <img src={showPassword ? Eye : EyeOff} alt="Eye" className="absolute top-1/2 right-3 transform -translate-y-1/2" onClick={togglePasswordVisibility} />
                            </button>
                        </div>
                    </div>
                    <button className="bg-tomato-100 hover:bg-tomato-200 text-light-100 w-full py-3 rounded-md" type="submit">Entrar</button>
                    <a href="" className="mt-8">Criar uma conta</a>
                </form>
            </div>
        </div>
    )
}