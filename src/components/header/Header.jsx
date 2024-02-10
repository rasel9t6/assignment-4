import CurrentDate from "./CurrentDate";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  return (
    <nav className='border-b border-black py-6 md:py-8'>
      <div className='container mx-auto flex flex-wrap items-center justify-between gap-6'>
        {/* <!-- date --> */}
        <CurrentDate/>
        {/* <!-- Logo --> */}
        <Logo/>
        {/* <!-- Logo Ends -->
                <!-- --> */}
        <Search/>
      </div>
      {/* <!-- categories --> */}
      <div className='container mx-auto mt-6'>
        <ul className='flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base'>
          <li>
            <a href='#'>General</a>
          </li>
          <li>
            <a href='#'>Business</a>
          </li>
          <li>
            <a href='#'>Entertainment</a>
          </li>
          <li>
            <a href='#'>Health</a>
          </li>
          <li>
            <a href='#'>Science</a>
          </li>
          <li>
            <a href='#'>Sports</a>
          </li>
          <li>
            <a href='#'>Technology</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
