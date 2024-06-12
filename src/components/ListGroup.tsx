import { useState } from "react";


// {items: [], heading: string}
interface ListGroupProps {
    items: string[];
    heading: string;
    // (item: string) => void
    onSelectItem: (item: string) => void;
} 


function ListGroup({items, heading, onSelectItem}: ListGroupProps) {

    // Hook
    const [selectedIdx, setSelectedIdx] = useState(-1);
    // arr[0] // variable (selected Idx)
    // arr[1] // Updater function


    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p> No item Found</p>}
            <ul className="list-group">
                {items.map((item, idx) => (
                    <li className={selectedIdx === idx ? 'list-group-item active': 'list-group-item'}
                    key={item}
                     onClick={()=>{
                        setSelectedIdx(idx);
                        onSelectItem(item);
                    }}
                     >{item}
                     </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;