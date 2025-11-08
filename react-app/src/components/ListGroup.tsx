import {MouseEvent} from 'react';

function ListGroup() {
  let items = ["Uvindu", "Ravindu", "Kavindu", "Samindu", "Chamindu"];

//   items = [];

const HandleEvent=(event:MouseEvent)=>console.log(event.screenX)

  function getMessage() {
    if (items.length === 0) return <p>No items found</p>;
    return items.map((item,index) => (
      <li key={item} className="list-group-item" onClick={HandleEvent}>
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
