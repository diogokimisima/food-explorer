import Icon from '../assets/explorer-footer.svg'

export function Footer() {
    return (
        <footer className="flex h-[77px] bg-dark-600 items-center px-2 sm:px-5 md:px-32">
            <div className='flex items-center gap-1 md:gap-2.5 flex-1 px-'>
                <img className='w-7 h-7 md:w-8 md:h-8' src={Icon} alt="icon" />
                <p className='text-light-700 font-bold text-base md:text-2xl text-nowrap'>Food explorer</p>
            </div>
            <p className='text-light-200 text-[12px] md:text-lg'>© 2023 - Todos os direitos reservados.</p>
        </footer>
    )
}