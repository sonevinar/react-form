import React from "react"
import styled from 'styled-components'

const StyleInput = styled.input`
    padding: 13px 31px;
    outline: none;

`

const StyleButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    outline: none;
    &:hover{
        background-color: #653399;
    }
`

const StyleLabel = styled.label`
    
`

export default class Form extends React.Component {
  state = {
    firstName: ""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName}!`)
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <StyleLabel>
                First name
                <StyleInput type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                />
                </StyleLabel>
            <StyleButton>Send</StyleButton>
        </form>
    )
  }
}