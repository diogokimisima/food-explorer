import Logo from '../assets/explorer.svg'

export function SignIn() {
    return (
        <div className="bg-gray-950 h-lvh flex flex-row justify-center items-center px-28">
            <div className="flex-1 flex justify-center items-center gap-4">
                <img src={Logo} alt="Food Explorer Logo" />
                    <h1 className="text-5xl">Food Explorer</h1>
            </div>

            <div className="bg-[#001119] w-[476px] h-[504px] flex flex-col justify-center items-center gap-8 rounded-md">
                <h2 className="text-4xl">Faça Login</h2>
                <form method="post" className="w-full px-16 flex flex-col items-center gap-3">
                    <div className="flex flex-col w-full gap-2">
                        <label className='text-zinc-300'>Usuário:</label>
                        <input className="rounded-md bg-transparent border border-white focus:outline-none p-3" type="text" name="username" placeholder='Exemplo: exemplo@exemplo.com.br' required /><br />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className='text-zinc-300'>Senha:</label>
                        <input className="rounded-md bg-transparent border border-white focus:outline-none p-3" type="password" name="password" placeholder='No mínimo 6 caracteres' required /><br />
                    </div>
                    <button className="bg-[#750310] w-full py-3 rounded-md" type="submit">Entrar</button>
                    <a href="{% url 'register' %}" className="mt-4">Criar uma conta</a>
                </form>
            </div>
        </div>
    )
}