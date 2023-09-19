'use client';

export default function Button({children, method}) {
    return(
        <button onClick={method}>
            {children}
        </button>
    )
}