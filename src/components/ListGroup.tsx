import { useState } from 'react';

interface ListGroupProps {
    items: string[];
    header?: string;
}


function ListGroup(props: ListGroupProps) {
    const items: string[] = [
        "Karachi",
        "Lahore",
        "Islamabad",
        "Quetta",
        "Peshawar"
    ];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;