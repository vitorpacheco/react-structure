import React, {useState, useEffect, useMemo} from 'react';
import { MdNotifications } from 'react-icons/md';

import {Container, Badge, NotificationList, Scroll, Notification} from './styles';


const Notifications = () => {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(() => {
    return !!notifications.find(notification => notification.read === false)
  }, [notifications]);

  useEffect(() => {
    // TODO load notifications

    setNotifications([]);
  }, []);

  const handleToggleVisible = () =>  {
    setVisible(!visible);
  };

  const handleMarkAsRead = (id) => {
    // TODO update notification

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? {...notification, read: true} : notification
      )
    );
  };

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button type="button" onClick={() => handleMarkAsRead(notification._id)}>Marcar como lida</button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
};

export default Notifications;
