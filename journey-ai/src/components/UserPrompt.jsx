function UserPrompt({ show, onClose }) {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white p-6 rounded-lg w-full max-w-lg h-1/2 overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col h-full">
                    <div className="text-xl font-bold mb-2">
                        Tell us more about your style!
                    </div>

                    <div className="flex-grow">
                        <textarea
                            className="w-full h-4/5 p-2 border border-gray-300 rounded-lg"
                            placeholder="Any special thing you want for your travel plan?"
                        ></textarea>
                    </div>

                    <button className="flex justify-center items-center bg-orange-500 rounded-lg text-white">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserPrompt;
