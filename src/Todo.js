import React from 'react';
import { connect } from 'react-redux';

class Todo extends React.Component {
  handleClick = () => {
    this.props.add(this.textName.value);
    
  }

  handleClickRem = (id) => {
    this.props.rem(id);
  }
  handleClickDone = (id) => {
    this.props.done(id);
  }
  

  render(){
    
    return (
      <div>
        <input 
          type='text'
          ref={(input) => (this.textName = input)}
        />
        <input 
          type='button' 
          value='Add'
          onClick={this.handleClick}
        />

        <div>
        {//this.props.todoState}
       this.props.todoState.map(tod => {
           return (
             <div key={tod.id} style={{display: 'flex'}}>
             <div  
             onClick={() => this.handleClickDone(tod.id) }
             style={tod.complete === true ? {
               textDecoration: 'line-through'} : {}}
             > {tod.text}  
             
             </div>
             <div style={{marginLeft: 20}}
             onClick={() => this.handleClickRem(tod.id)}> x </div>
             </div>
           )
            })
    }
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
 console.log(state.todo);
  return {
    todoState: state.todo
  }
}

let nextId = 0;
const mapDispatchToProps = (dispatch) => {
  
  return {
    add: (text) => {
      dispatch({type: 'ADD_TODO', id: nextId++, text, complete: false  })
    },
    rem: (id) => {
      dispatch({ type: 'REM_TODO', id: id})
    },
    done: (id) => {
      dispatch({ type: 'DONE_TODO', id: id })
    }
   
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)