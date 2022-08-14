import React, { useCallback, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { authActionCreator } from '../../store/reducers/auth/action-creators'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import style from './auth.module.scss'

interface IProps {}

export const Auth: React.FC<IProps> = () => {
  const dispatch = useTypedDispatch()
  const { isAuthPopupVisible } = useTypedSelector((state) => state.generalReducer)
  const [phone, setPhone] = useState<string>('+7')

  const handlePhoneChange = useCallback((e: any) => {
    const firstSimbol = e.target.value[0]
    const otherSimbols = e.target.value.substring(1)

    const checkFirstSimbol = !Number.isNaN(Number(firstSimbol)) || firstSimbol === '+' || firstSimbol === undefined
    const checkOtherSimbols = /^[0-9]+$/.test(otherSimbols) || otherSimbols === ''
    const checkMaxLength = firstSimbol === '+' ? otherSimbols.length <= 11 : otherSimbols.length <= 10

    if (checkFirstSimbol && checkOtherSimbols && checkMaxLength) {
      setPhone(e.target.value)
    }
  }, [])

  const handleSubmit = useCallback(async (e: any) => {
    const login: string = e.target[0].value.substring(e.target[0].value.length - 10)
    const password: string = e.target[1].value
    console.log('handleSubmit', login, password)

    e.preventDefault()
    const success = await dispatch(authActionCreator.login(login, password))
    success && dispatch(generalActionCreator.setIsAuthVisible(false))
  }, []) //eslint-disable-line

  const handleClose = useCallback(() => dispatch(generalActionCreator.setIsAuthVisible(false)), [])

  return (
    <Modal show={isAuthPopupVisible} centered={true} onHide={handleClose}>
      <Modal.Body>
        <Form className="w-100 px-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Enter phone" onChange={handlePhoneChange} value={phone} />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
