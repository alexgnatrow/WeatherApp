import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import Yup from 'yup'

import { Modal, Icon, Button, Input, Label } from 'Components/UI'

import {
  Container,
  TabRow,
  Form,
  TabRowButton,
  TabRowButtonActive,
  StyledDropzone,
  DropzoneLabel,
  ResLibContainer,
  ResLibRow,
  ResLibRowTitle,
  ResLibRowDescription,
} from './styles'

const TAB_UPLOAD = 'upload'
const TAB_LINK = 'link'
const TAB_RESOURCE_LIB = 'resource_library'

const RESOURCES = [
  {
    id: 0,
    title: 'Resource Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    id: 1,
    title: 'Resource Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    id: 2,
    title: 'Resource Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    id: 3,
    title: 'Resource Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    id: 4,
    title: 'Resource Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    id: 5,
    title: 'Resource Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    id: 6,
    title: 'Resource Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    id: 7,
    title: 'Resource Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    id: 8,
    title: 'Resource Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    id: 9,
    title: 'Resource Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    id: 10,
    title: 'Resource Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
  {
    id: 11,
    title: 'Resource Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
  },
]

class AddResourceModal extends PureComponent {
  state = {
    currentTab: TAB_UPLOAD,
    resourceList: RESOURCES,
    activeResourceId: -1,
  }

  onSwitchTab = tab => {
    const validationSchema =
      tab === TAB_LINK
        ? Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
            URL: Yup.string()
              .required()
              .url(),
          })
        : Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
          })

    this.setState({ currentTab: tab, validationSchema })
  }

  handleSwitchTabUpload = () => this.onSwitchTab(TAB_UPLOAD)
  handleSwitchTabLink = () => this.onSwitchTab(TAB_LINK)
  handleSwitchTabResLib = () => this.onSwitchTab(TAB_RESOURCE_LIB)

  handleActiveResourceChange = ({ target }) => {
    this.setState({ activeResourceId: target.id })
  }

  handleSubmit = () => {
    this.props.onClose()
  }

  handleShare = () => {
    this.props.onClose()
  }

  handleFileDrop = () => {}

  validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
  })

  innerForm = ({
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    handleSubmit,
  }) => {
    const { currentTab } = this.state

    return (
      <Form onSubmit={handleSubmit}>
        <Label title="title">
          <Input
            error={touched.title && errors.title}
            light
            name="title"
            placeholder="Awesome title here"
            value={values.title}
            width={1}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Label>
        <Label title="Description">
          <Input
            error={touched.description && errors.description}
            light
            name="description"
            placeholder="Description"
            value={values.description}
            width={1}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Label>
        {currentTab === TAB_UPLOAD && (
          <StyledDropzone multiple onDrop={this.handleFileDrop}>
            <Icon glyph={{ id: 'arrow_up' }} size={50} />
            <DropzoneLabel>Click or drop files here to upload</DropzoneLabel>
          </StyledDropzone>
        )}
        {currentTab === TAB_LINK && (
          <Label title="URL">
            <Input
              error={touched.URL && errors.URL}
              light
              name="URL"
              placeholder="URL"
              value={values.URL}
              width={1}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Label>
        )}
        <Modal.Footer justify="flex-end">
          <Button outline onClick={this.props.onClose}>
            Cancel
          </Button>
          <Button ml={10} type="submit" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    )
  }

  renderResLibTab = (resourceList, activeResourceId) =>
    resourceList.map(item => (
      <ResLibRow
        active={activeResourceId.toString() === item.id.toString()}
        id={item.id}
        key={item.id}
        onClick={this.handleActiveResourceChange}
      >
        <ResLibRowTitle id={item.id}>{item.title}</ResLibRowTitle>
        <ResLibRowDescription id={item.id}>
          {item.description}
        </ResLibRowDescription>
      </ResLibRow>
    ))

  render() {
    const { isOpen, onClose } = this.props
    const { currentTab, resourceList, activeResourceId } = this.state

    const FileButton =
      currentTab === TAB_UPLOAD ? TabRowButtonActive : TabRowButton
    const LinkButton =
      currentTab === TAB_LINK ? TabRowButtonActive : TabRowButton
    const LibButton =
      currentTab === TAB_RESOURCE_LIB ? TabRowButtonActive : TabRowButton

    return (
      <Modal
        isOpen={isOpen}
        padding="0"
        title="Add a resource"
        onClose={onClose}
      >
        <Container>
          <TabRow>
            <LibButton onClick={this.handleSwitchTabResLib}>
              Resource Library
            </LibButton>
            <FileButton onClick={this.handleSwitchTabUpload}>
              File upload
            </FileButton>
            <LinkButton onClick={this.handleSwitchTabLink}>Link</LinkButton>
          </TabRow>
          {currentTab !== TAB_RESOURCE_LIB && (
            <Formik
              render={this.innerForm}
              validateOnBlur
              validateOnChange={false}
              validationSchema={this.validationSchema}
              onSubmit={this.handleSubmit}
            />
          )}
          {currentTab === TAB_RESOURCE_LIB && (
            <ResLibContainer>
              {this.renderResLibTab(resourceList, activeResourceId)}
              <Modal.Footer justify="flex-end">
                <Button outline onClick={this.props.onClose}>
                  Cancel
                </Button>
                <Button ml={10} type="submit" onClick={this.handleShare}>
                  Share
                </Button>
              </Modal.Footer>
            </ResLibContainer>
          )}
        </Container>
      </Modal>
    )
  }
}

AddResourceModal.defaultProps = {
  isOpen: false,
}

AddResourceModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
}

export default AddResourceModal
