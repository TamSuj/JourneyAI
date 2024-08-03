


function CustomizeOptions({show, onClose}){
    if(!show){
        return null
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={onClose}>
            <div
                className="flex bg-white p-6 rounded-lg w-full max-w-3xl h-4/5 overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
                >
                    <div>
                        <p className="text-xl font-bold mb-2">Do you want more personalized plan? Tell us more</p>

                        <div>
                            Budget??
                            0$ - 100000$
                        </div>

                        <div>
                            Accomaodation
                            near any specific place??
                        </div>

                        <div>
                            Special Request.
                            May be an input box
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default CustomizeOptions;
