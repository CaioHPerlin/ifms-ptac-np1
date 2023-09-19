'use client';

export default function Button({children, method, secondary, type}) {

    let classes = "w-fit mt-4 px-5 ml-3 py-2 rounded-lg text-white border-slate-400 border-4 bg-slate-400"

    if(secondary){
        classes = "w-fit mt-4 px-5 ml-3 py-2 rounded-lg text-slate-400 border-slate-400 border-4 bg-white"
    }

    return(
        <button type={type} className={classes} onClick={method}>
            {children}
        </button>
    )
}