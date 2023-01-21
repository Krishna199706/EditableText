import {Component} from 'react'
import {
  MainContainer,
  Container,
  Heading,
  Button,
  TextContent,
  Input,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {text: '', isEditable: true}

  getText = e => {
    this.setState({text: e.target.value})
  }

  changeStatus = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <MainContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <TextContent>
            {isEditable ? (
              <Input value={text} type="text" onChange={this.getText} />
            ) : (
              <p>{text}</p>
            )}
            {isEditable ? (
              <Button onClick={this.changeStatus}>Save</Button>
            ) : (
              <Button onClick={this.changeStatus}>Edit</Button>
            )}
          </TextContent>
        </Container>
      </MainContainer>
    )
  }
}

export default EditableTextInput
