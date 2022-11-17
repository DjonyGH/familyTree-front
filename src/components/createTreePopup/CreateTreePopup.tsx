import React, { useCallback } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { generalActionCreator } from '../../store/reducers/general/action-creators'

interface IProps {}

export const CreateTreePopup: React.FC<IProps> = () => {
  const dispatch = useTypedDispatch()
  const { isCreateTreePopupVisible } = useTypedSelector((state) => state.generalReducer)

  const handleSubmit = useCallback(async (e: any) => {
    const treeName: string = e.target[0].value
    e.preventDefault()
    dispatch(generalActionCreator.setIsCreateTreeVisible(false))
  }, []) //eslint-disable-line

  const handleClose = useCallback(() => dispatch(generalActionCreator.setIsCreateTreeVisible(false)), []) //eslint-disable-line

  return (
    <Modal show={isCreateTreePopupVisible} centered={true} onHide={handleClose}>
      <Modal.Body>
        <Form className="w-100 px-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Name</Form.Label>
            <Form.Control type="phone" placeholder="Enter tree name" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
