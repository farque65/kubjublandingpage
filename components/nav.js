export default function Nav() {
  return (
    <nav className="relative flex flex-wrap items-center justify-between bg-yellow-500 px-2 py-3 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        {/* <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
            pink Color
          </a>
          <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
            <span class="block relative w-6 h-px rounded-sm bg-white"></span>
            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div> */}
        <div className="flex flex-grow items-center" id="example-navbar-warning">
          <ul className="flex flex-col flex-row list-none ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75" href="#about_section">
                  Learn More
                </a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
