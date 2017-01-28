import React, { Component } from 'react'
import {connect} from 'react-redux'

class ReduxTestContainer extends Component {
  constructor(props){
    super(props)
    this.state = { }
  }
  render(){
    const {foo, bar} = this.props
    return(
      <div>
        <h1>Testing for Store Connection </h1>
        <h3> Foo Value: {foo}</h3>
        <h3> Bar Value: {bar}</h3>
      </div>
    )
  }
}

const mapStateToReduxTestContainerProps = (state) => {
  return {
    foo: state.foo,
    bar: state.bar
  }
}

const ReduxTestComponent = connect(mapStateToReduxTestContainerProps)(ReduxTestContainer)

export default ReduxTestComponent
