import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './Notification.module.css';

const Notification = ({ message = ' ' }) => {
  const memoizedKey = useMemo(() => shortid.generate(), []);

  return (
    <h2 key={memoizedKey} className={styles.notification}>
      {message}
    </h2>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default React.memo(Notification);
