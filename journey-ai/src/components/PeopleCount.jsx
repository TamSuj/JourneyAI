import { useState, useEffect } from "react";

function PeopleCount({ setNumOfPeople }) {
    const [inputPeople, setCount] = useState(2);

    useEffect(() => {
        setNumOfPeople(Math.max(1, inputPeople));
    }, [inputPeople, setNumOfPeople]);

    const handleChange = (event) => {
        const value = Math.max(1, parseInt(event.target.value) || 1);
        setCount(value);
    };

    const handleDecrement = () => {
        setCount((prevState) => Math.max(1, prevState - 1));
    };

    const handleIncrement = () => {
        setCount((prevState) => prevState + 1);
    };

    return (
        <div className="flex items-center justify-between md:order-3 md:justify-end my-5">
            <label htmlFor="counter-input" className="sr-only">
                Choose quantity:
            </label>
            <label>Number of people</label>
            <div className="flex items-center sm:ml-4">
                <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    onClick={handleDecrement}
                >
                    <svg
                        className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                        />
                    </svg>
                </button>
                <input
                    type="number"
                    id="counter-input"
                    data-input-counter
                    className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-black focus:outline-none focus:ring-0 dark:text-black"
                    placeholder=""
                    value={inputPeople}
                    required
                    onChange={handleChange}
                />
                <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    onClick={handleIncrement}
                >
                    <svg
                        className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default PeopleCount
