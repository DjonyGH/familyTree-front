import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
// import style from './notification.module.scss'

interface IProps {}

export const Notification: React.FC<IProps> = () => {
  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast>
        <Toast.Header>
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>
          Hello, world! This is a toast message. Hello, world! This is a toast message. Hello, world! This is a toast
          message. Hello, world! This is a toast message.{' '}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}
