import styled from 'styled-components'

const FormButton = styled.button`
  display: inline-block;
  padding: 0.1rem 0;
  margin: 0.5em 1rem;
  width: 20rem;
  height: 3rem;
  background: #467599;
  color: white;
  font-size: 0.65em;
  border-style: none;
box-shadow: 1px 2px #253F52;

`

const FormInput = styled.input`
  display: inline-block;
  border-radius: 1px;
  padding: 0.1rem 0;
  margin: 0.5em 1rem;
  width: 20rem;
  background: white;
  font-size: 0.65em;
  color: black;
`

export { FormButton, FormInput }