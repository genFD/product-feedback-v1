import React, { useEffect } from 'react';

const Alert = ({ type, message, handleAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleAlert(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <article className="w-full flex justify-center">
      <p className={`alert alert-${type} text-body-3 font-bold flex px-8`}>
        <span className="mr-2">
          {type === 'success' ? <span>🎉 🫱🏼‍🫲🏿</span> : <span>🚫</span>}
        </span>
        {message}
        <span className="ml-2">
          {type === 'success' ? <span>🎉 🫱🏼‍🫲🏿</span> : <span>🚫</span>}
        </span>
      </p>
    </article>
  );
};

export default Alert;
