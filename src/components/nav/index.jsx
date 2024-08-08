import PropTypes from "prop-types";

function Nav({ toggleNav }) {
  return (
    <nav
      className="relative flex w-full flex-nowrap items-center justify-between bg-[#3A3A55] py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4"
      data-twe-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="mx-2">
          <a className="text-xl text-[#FFFFFF]" href="#">Isactes Template</a>
        </div>
        {/* <!-- Hamburger button for mobile view --> */}
        <button
          className="block border-0 bg-transparent px-2 text-[#FFFFFF] hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent10"
          aria-controls="navbarSupportedContent10"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNav}>
          {/* <!-- Hamburger icon --> */}
          <span className="[&>svg]:w-7 [&>svg]:stroke-[#FFFFFF]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd" />
            </svg>
          </span>
        </button>

        {/* <!-- Collapsible navbar container --> */}
        <div
          className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent10"
          data-twe-collapse-item>
          {/* <!-- Left links --> */}
          <ul
            className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
            data-twe-navbar-nav-ref>
            {/* <!-- Home link --> */}
            <li
              className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
              data-twe-nav-item-ref>
              <a
                className="text-[#FFFFFF] transition duration-200 hover:text-[#FF69B4] focus:text-[#FF69B4] active:text-black/80 motion-reduce:transition-none lg:px-2"
                aria-current="page"
                href="#"
                data-twe-nav-link-ref
              >Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  toggleNav: PropTypes.func.isRequired,
};

export default Nav;