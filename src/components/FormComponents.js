import styled from 'styled-components'

const FormButton = styled.button`
  display: inline-block;
  border-radius: 1px;
  padding: 0.1rem 0;
  margin: 0.5em 1rem;
  width: 15rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  font-size: 75%;
`

const FormInput = styled.input`
  display: inline-block;
  border-radius: 1px;
  padding: 0.1rem 0;
  margin: 0.5em 1rem;
  width: 15rem;
  background: white;
  border: 1px solid grey;
  font-size: 50%;
  color: black;
`

export { FormButton, FormInput }