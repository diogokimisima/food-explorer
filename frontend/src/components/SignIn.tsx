import Logo from '../assets/explorer.svg'

export function SignIn() {
    return (
        <div className="h-lvh flex flex-row justify-center items-center px-28">
            <div className="flex-1 flex justify-center items-center gap-4">
                <img src={Logo} alt="Food Explorer Logo" />
                    <h1 className="text-5xl text-light-100">Food Explorer</h1>
            </div>

            <div className="bg-dark-700 w-[476px] h-[504px] flex flex-col justify-center items-center gap-8 rounded-xl">
                <h2 className="text-4xl">Faça Login</h2>
                <form method="post" className="w-full px-16 flex flex-col items-center">
                    <div className="flex flex-col w-full gap-2">
                        <label className='text-zinc-300'>Usuário</label>
                        <input className="bg-dark-900 rounded-md p-3 border-dark-900 focus:border-light-100" type="text" name="username" placeholder='Exemplo: exemplo@exemplo.com.br' required /><br />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className='text-zinc-300'>Senha</label>
                        <input className="bg-dark-900 rounded-md border border-dark-900 focus:border-light-100 p-3 placeholder:text-light-500" type="password" name="password" placeholder='No mínimo 6 caracteres' required /><br />
                    </div>
                    <button className="bg-tomato-100 hover:bg-tomato-200 text-light-100 w-full py-3 rounded-md transition duration-200 ease-in-out" type="submit">Entrar</button>
                    <a href="{% url 'register' %}" className="mt-4">Criar uma conta</a>
                </form>
            </div>
        </div>
    )
}