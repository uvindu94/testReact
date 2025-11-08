import {MouseEvent} from 'react';

function ListGroup() {
  let items = ["Uvindu", "Ravindu", "Kavindu", "Samindu", "Chamindu"];

//   items = [];

const handleClick = (e:MouseEvent)=>console.log(e.clientX, e.clientY);

  function getMessage() {
    if (items.length === 0) return <p>No items found</p>;
    return items.map((item) => (
      <li key={item} className="list-group-item" onClick={handleClick}>
        {item}
      </li>
    ));
  }

  return (
    <>
      <h1>Hellow This is a List</h1>
      <ul className="list-group">{getMessage()};</ul>
    </>
  );
}

export default ListGroup;
