import React, { useCallback, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import style from './auth.module.scss'

interface IProps {}

export const Auth: React.FC<IProps> = () => {
  const dispatch = useDispatch()
  const { isAuthVisible } = useTypedSelector((state) => state.generalReducer)
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

  const handleSubmit = useCallback((e: any) => {
    console.log('handleSubmit', e.target[0].value, e.target[1].value)
    e.preventDefault()
    dispatch(generalActionCreator.setIsAuthVisible(false))
  }, []) //eslint-disable-line

  return (
    <div className={`${style.auth} ${isAuthVisible ? style.visible : ''}`}>
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
    </div>
  )
}
