import React,{useState} from 'react'

export default function AllChild(props){
    const [currentPage, setCurrentPage] = useState(0);
    const numberOfPages = React.Children.count(props.children);
    
    return (
        <div className="app">
            <button
                disabled={currentPage === 0}
                onClick={(e) => setCurrentPage(v => v - 1)}
            >&lt; הקודם
        </button>

            <button
                disabled={currentPage >= numberOfPages - 1}
                onClick={(e) => setCurrentPage(v => v + 1)}
            >הבא &gt;</button>
            {props.children[currentPage]}
        </div>
    );
}