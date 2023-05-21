import SelectCategories from "./SelectCategories"

function EditManga(props) {

    const {
        cat,
        title,
        desc,
        photo,
        category,
        onConfirm,
        onCancel,
    } = props

    const classInput = "text-white text-sm px-[3px] outline-none focus:outline-none focus:ring-none border-b-[2px] border-[#4338CA] bg-[#131313] placeholder:font-montserrat placeholder:font-[500] placeholder:text-white"

    return (
        <>
            <div className="bg-[#000000c0] absolute flex justify-center z-20 h-[114vw] w-full">
                <div className="bg-[#131313] mt-6 lg:w-[25rem] top-28 lg:h-[33rem] flex flex-col justify-evenly fixed rounded-xl">
                    <h2 className="text-white font-bold text-xl text-center">Edit Manga</h2>
                    <div className="flex flex-col items-center w-full justify-center gap-4">
                        <div className='flex-col flex w-[15rem] gap-5 text-white border-b-[2px] border-[#4338CA] outline-none focus:outline-none'>
                            <input
                                onChange={title}
                                className={classInput}
                                type="text"
                                name="insert"
                                autoComplete="off"
                                placeholder="title of manga"
                                id="insertTitle"
                            />

                            <input
                                onChange={desc}
                                className={classInput}
                                type="text"
                                name="insert"
                                autoComplete="off"
                                placeholder="insert description"
                                id="insertDescription"
                            />

                            <input
                                onChange={photo}
                                className={classInput}
                                type="text"
                                name="insert"
                                autoComplete="off"
                                placeholder="insert url image of manga"
                                id="insertPhoto"
                            />
                            <SelectCategories cat={cat} category={category} />
                        </div>
                    </div>
                        <div className="flex flex-col items-center w-full justify-center gap-3 mt-4">
                            <button onClick={onConfirm} className="hover:bg-[#131313] bg-[#4338CA] hover:text-[#4338CA] w-[15rem] text-white transition-colors h-10 border-[2px] rounded-xl border-[#4338CA] rounded-[4px font-montserrat font-extrabold cursor-pointer">
                                Send
                            </button>
                            <button onClick={onCancel} className="hover:bg-[#131313] bg-[#EE8380] hover:text-[#EE8380] w-[15rem] transition-colors h-10 border-[2px] rounded-xl border-[#EE8380] font-montserrat font-extrabold">
                                cancel
                            </button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default EditManga

