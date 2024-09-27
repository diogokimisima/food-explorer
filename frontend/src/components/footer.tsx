import Icon from '../assets/explorer-footer.svg'

export function Footer() {
    return (
        <footer className="flex h-[77px] bg-dark-600 items-center px-32">
            <div className='flex items-center gap-2.5 flex-1 px-'>
                <img className='w-8 h-8' src={Icon} alt="icon" />
                <p className='text-light-700 font-bold text-2xl'>Food explorer</p>
            </div>
            <p className='text-light-200'>© 2023 - Todos os direitos reservados.</p>
        </footer>
    )
}