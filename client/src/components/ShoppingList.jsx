import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItems, Button, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';
import { deleteItem, getItems } from './actions/itemActions';
import PropTypes from 'prop-types';

class  ShoppingList extends Component {
      componentDidMount(){
    this.props.getItems();
   }
   handleDelete = (id) => {
    this.props.deleteItem(id);
   }
    render(){
        const {items} = this.props.item;
        return (
            <Container>
              {/* {console.log("inside container",items)} */}
              {/* <Button 
                  color='dark' 
                  className='mb-5'
                  onClick={()=>{
                      console.log(items)
                      const name = prompt("Enter Item");
                      console.log(name);
                      if(name){
                        this.setState(state=>({
                            items: [...state.items, {id: uuidv4(), name}]
                        }))
                        //   setItems([...items, {id: uuidv4(), name: name}])
                      }
                      else{
                          alert("Not an item");
                      }
                      console.log("after add",items)
                  }}
              >
                  Add Item
              </Button> */}
              <ListGroup>
                  <TransitionGroup className='shopping-list'>
                      {items.map(({id, name})=>(
                          <CSSTransition key={id} classNames='fade' timeout={500}>
                          <ListGroupItem>
                              <Button
                              color='danger'
                              className='remove-btn'
                              size='sm'
                              onClick={this.handleDelete.bind(this, id)}>&times;</Button>
                              {name}
                          </ListGroupItem>
                      </CSSTransition>
                      ))}
                  </TransitionGroup>
              </ListGroup>
          </Container>
        )
    }
  
}

// ShoppingList.propTypes = {
//     getItems: PropTypes.func.isRequired,
//     item: PropTypes.object.isRequired
// }
const mapStateToProps = (state) =>({
    item: state.item
})

// export default ShoppingList
export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList)