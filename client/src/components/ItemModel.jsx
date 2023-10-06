import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, Input} from 'reactstrap';
import {v4 as uuidv4} from 'uuid';
import {addItem} from './actions/itemActions'
import { connect } from 'react-redux';


class ItemModel extends Component {
    state = {
        model: false,
        name: ''
    }

    toggle = ()=>{
        this.setState({
            model: !this.state.model
        });
    }
    handleChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        
        //create new item object
        const newItem = {
            id: uuidv4(),
            name: this.state.name
        }
        // add item 
        this.props.addItem(newItem);

        // close model
        this.toggle();

    }
  render() {
    return (
      <div>
        <Button
            color='dark'
            style={{marginBottom: '2rem'}}
            onClick={this.toggle}
            >Add Item
        </Button>
        <Modal 
            isOpen={this.state.model}
            toggle={this.toggle}
            >
                <ModalHeader
                toggle={this.toggle}
                >Add Item To List
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                    <Input 
                        type='text' 
                        name='name'
                        placeholder='enter item name'
                        onChange={this.handleChange} />
                    <Button
                        color='dark'
                        style={{marginBottom: '2rem', marginTop: '2rem'}}
                        block
                        >Add Item
                    </Button> 
                </Form>
            </ModalBody>
            

        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
    item: state.item
})


export default connect(mapStateToProps, {addItem})(ItemModel)