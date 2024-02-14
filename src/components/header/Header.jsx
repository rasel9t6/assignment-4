import Categories from '../shared/Categories';
import Logo from '../shared/Logo';
import CurrentDate from './CurrentDate';
import Search from './Search';

export default function Header() {
  return (
    <nav className='border-b border-black py-6 md:py-8'>
      <div className='container mx-auto flex flex-wrap items-center justify-between gap-6'>
        <CurrentDate />

        <Logo
          className='max-w-[100px] md:max-w-[165px]'
          src='./assets/logo.png'
          alt='Lws'
        />

        <Search />
      </div>
      <div className='container mx-auto mt-6'>
        <ul className='flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base'>
          
          <Categories />
        </ul>
      </div>
    </nav>
  );
}
