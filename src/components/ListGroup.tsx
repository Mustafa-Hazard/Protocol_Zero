import { Fragment } from "react/jsx-runtime";
function ListGroup() {

    let items =
        [
            "Karachi",
            "Lahore",
            "Islamabad",
            "Queta",
            "Peshawar"
        ]

    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item" key={item}>
                        {item}
                    </li>
                ))}
            </ul >
        </>
    )
}
export default ListGroup;