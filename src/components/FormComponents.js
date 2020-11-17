import styled from 'styled-components'

const FormButton = styled.button`
  display: inline-block;
  padding: 0.1rem 0;
  margin: 0.5em 1rem;
  width: 20rem;
  height: 2.5rem;
  background: black;
  color: white;
  font-size: 0.5em;
  border-style: none;
  border-radius: 5px;
`

const FormInput = styled.input`
  display: inline-block;
  border-radius: 1px;
  padding: 0.1rem 0;
  margin: 0.5em 1rem;
  width: 20rem;
  background: white;
  font-size: 0.5em;
  color: black;
  border-radius: 5px;

`

export { FormButton, FormInput }