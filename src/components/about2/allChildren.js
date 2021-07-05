import React, { useState } from 'react';


export default function AllChildren(props) {
    const [currentPage, setCurrentPage] = useState(0)
    const numbersOfPage = React.Children.count(props.children)

    return (
        <>
            <button
                disabled={currentPage === 0}
                onClick={(e) => setCurrentPage(p => p - 1)}>הקודם</button>
            <button disabled={currentPage === numbersOfPage - 1}
                onClick={(e) => setCurrentPage(p => p + 1)}>הבא</button>

            {props.children[currentPage]}

        </>
    )
}