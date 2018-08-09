import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import Todo from './Todo';


/*
const add = () => ({
  type: 'INCREMENT'
});
const min = () => ({
  type: 'DEC'
});
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //  ht: 0
    }
  }
 
  handelClick = () => {
    this.props.add();
  }
  handelClickP = () => {
    this.props.min();
  }

render() {
  return(
    <div>
    <input type='button' value='+' 
    onClick={this.handelClick}/>
    <input type='button' value='-'
      onClick={this.handelClickP} />
    <div> {this.props.testState } </div>

<Todo/>

    </div>
  )
}
}

const mapStateToProps = (state) => {
 // console.log(state.counter);
  return{
    testState: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      add: (tr) => {
        dispatch({ type: 'INCREMENT' })
      },
      min: (tr) => {
        dispatch({ type: 'DEC' });
      }
    //bindActionCreators(min, dispatch),
    // how without bindActionCreators?
  }
}

export default connect (
  mapStateToProps, 
 mapDispatchToProps
)(App)

/*
export default connect(
  state => ({
    testState: state
  }),
  dispatch => ({
    add: (tr) => {
      dispatch({ type: 'INCREMENT'});
    },
    min: (tr) => {
      dispatch({ type: 'DEC' });
    }
  })
)(App)
*/
