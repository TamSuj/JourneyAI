function ThemeOption() {
    return (

        // <div id="theme-options">
        //     <input type="checkbox" name="Adventure" value="adventure"/>
        //     <label htmlFor="Adventure">Adventure</label><br/>
        //
        //     <input type="checkbox" name="Cultural" value="cultural"/>
        //     <label htmlFor="Cultural">Cultural</label><br/>
        //
        //     <input type="checkbox" name="Beach" value="beach"/>
        //     <label htmlFor="Beach">Beach</label><br/>
        //
        //     <input type="checkbox" name="City" value="city"/>
        //     <label htmlFor="City">City</label><br/>
        //
        //     <input type="checkbox" name="Nature" value="nature"/>
        //     <label htmlFor="Nature">Nature</label><br/>
        // </div>
        <div>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button">Theme <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                                       xmlns="http://www.w3.org/2000/svg" fill="none"
                                                       viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 4 4 4-4"/>
            </svg>
            </button>

            <div id="dropdown"
                 class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#"
                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Culture</a>
                    </li>
                    <li>
                        <a href="#"
                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Beach</a>
                    </li>
                    <li>
                        <a href="#"
                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">City
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Nature
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ThemeOption;
