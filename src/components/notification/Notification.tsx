import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import { ENotificationType } from '../../store/reducers/general/types'
// import style from './notification.module.scss'

interface IProps {}

export const Notification: React.FC<IProps> = () => {
  const dispatch = useTypedDispatch()
  const { notification } = useTypedSelector((state) => state.generalReducer)
  const header = {
    [ENotificationType.SUCCESS]: 'Успешно',
    [ENotificationType.ERROR]: 'Ошибка',
    [ENotificationType.PRIMARY]: 'Внимание'
  }

  const handleClose = () => dispatch(generalActionCreator.hideNotification())

  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast
        bg={notification.type}
        show={notification.visible}
        autohide={true}
        delay={5000}
        onClose={handleClose}
        animation={false}
      >
        <Toast.Header>
          <strong className="me-auto">{header[notification.type]}</strong>
        </Toast.Header>
        <Toast.Body>{notification.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}
