function ThemeOption() {
    return (
        <div>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                    className={"text-white bg-orange-500 p-3 ring-orange-500 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-white"}
                    type="button">Theme
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 4 4 4-4"/>
                </svg>
            </button>

            <div id="dropdown"
                 class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul class="py-2 text-sm text-black dark:text-black" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <div className="inline-flex items-center pl-1">
                            <label className="relative flex items-center p-3 rounded-full cursor-pointer"
                                   htmlFor="beach">
                                <input type="checkbox" name="Beach" value="beach"
                                       className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                       id="beach"/>
                                <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20"
                                       fill="currentColor"
                                       stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                  </svg>
                                </span>
                            </label>
                            <label className="mt-px cursor-pointer select-none"
                                   htmlFor="City">
                                Beach
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="inline-flex items-center pl-1">
                            <label className="relative flex items-center p-3 rounded-full cursor-pointer"
                                   htmlFor="culture">
                                <input type="checkbox" name="Culture" value="culture"
                                       className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                       id="culture"/>
                                <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20"
                                       fill="currentColor"
                                       stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                  </svg>
                                </span>
                            </label>
                            <label className="mt-px cursor-pointer select-none"
                                   htmlFor="Beach">
                                Culture
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="inline-flex items-center pl-1">
                            <label className="relative flex items-center p-3 rounded-full cursor-pointer"
                                   htmlFor="city">
                                <input type="checkbox" name="City" value="city"
                                       className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                       id="city"/>
                                <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20"
                                       fill="currentColor"
                                       stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                  </svg>
                                </span>
                            </label>
                            <label className="mt-px cursor-pointer select-none" htmlFor="City">City</label>
                        </div>
                    </li>
                    <li>
                        <div className="inline-flex items-center pl-1">
                            <label className="relative flex items-center p-3 rounded-full cursor-pointer"
                                   htmlFor="nature">
                                <input type="checkbox" name="Nature" value="nature"
                                       className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                       id="nature"/>
                                <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20"
                                       fill="currentColor"
                                       stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                  </svg>
                                </span>
                            </label>
                            <label className="mt-px cursor-pointer select-none"
                                   htmlFor="Nature">
                                Nature
                            </label>
                        </div>
                    </li>
                </ul>
            </div>


        </div>
    );
}

export default ThemeOption;


