import React, { useState } from 'react'
import { Container, ListGroup, ListGroupItems, Button, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

function ShoppingList() {
    const [items, setItems] = useState(()=>
        [
            {id: uuidv4(), name: 'Milk'},
            {id: uuidv4(), name: 'Bread'},
            {id: uuidv4(), name: 'Potatos'},
            {id: uuidv4(), name: 'Carrot'}
        
        ]);
  return (
      <Container>
        {/* {console.log("inside container",items)} */}
        <Button 
            color='dark' 
            className='mb-5'
            onClick={()=>{
                // console.log(items)
                const name = prompt("Enter Item");
                console.log(name);
                if(name){
                    setItems([...items, {id: uuidv4(), name: name}])
                }
                else{
                    alert("Not an item");
                }
                console.log("after add",items)
            }}
        >
            Add Item
        </Button>
        <ListGroup>
            <TransitionGroup className='shopping-list'>
                {items.map(({id, name})=>(
                    <CSSTransition key={id} classNames='fade' timeout={500}>
                    <ListGroupItem>
                        <Button
                        color='danger'
                        className='remove-btn'
                        size='sm'
                        onClick={()=>{
                            setItems(items.filter( item => item.id !== id ))
                            console.log("item removed")
                        }}>&times;</Button>
                        {name}
                    </ListGroupItem>
                </CSSTransition>
                ))}
            </TransitionGroup>
        </ListGroup>
    </Container>
  )
}

export default ShoppingList