import React from 'react';

const Error = ({ title, description, errorTitle, errorDescription }) => {
  return (
    <small
      className={`mt-1 text-heading-4 text-Blood-Moon font-normal ${
        (!title && errorTitle) ||
        (!description && errorDescription ? 'block' : 'hidden')
      }`}
    >
      Can’t be empty
    </small>
  );
};

export default Error;
