import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { customStyles } from './EditFeedback';
import axios from 'axios';
import { GobackButton, Alert, Error } from '../components';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

Modal.setAppElement('#root');

function NewFeedback() {
  const [title, updateTitle] = useState('');
  const [category, updateCategory] = useState('UX');
  const [description, updateDescription] = useState('');
  const [alert, updateAlert] = useState({
    show: false,
    message: '',
    type: '',
  });
  const [errorTitle, updateErrorTitle] = useState(false);
  const [errorDescription, updateErrorDescription] = useState(false);
  const { showConfirmationModal, confirmationModal, closeConfirmationMofal } =
    useGlobalContext();

  const { fetchRequests } = useGlobalContext();

  const handleAlert = (show = false, type = '', message = '') => {
    updateAlert({ show, type, message });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      updateErrorTitle(true);
      handleAlert(true, 'error', 'There was an error‼️');
    }
    if (!description) {
      updateErrorDescription(true);
      handleAlert(true, 'error', 'There was an error!');
    }

    if (title && description) {
      updateErrorTitle(false);
      updateErrorDescription(false);

      const data = {
        title,
        description,
        category,
      };
      await axios.post('/api/feedbacks', data);
      fetchRequests();

      handleAlert(true, 'success', 'Thanks for your feedback!');
      updateTitle('');
      updateDescription('');
    }
  };

  return (
    <div className="flex flex-col gap-y-9 justify-center items-center pt-10 pb-16 px-6 tablet:pt-14 tablet:pb-56 tablet:px-28 laptop:pt-20 laptop:px-72 laptop:pb-24 desktop:pt-24 desktop:pb-44 desktop:px-450">
      <div className="flex justify-start w-full pl-6">
        <header>
          <GobackButton />
        </header>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full rounded-default pt-11 pb-6 px-6 relative tablet:pt-12 tablet:pb-10 tablet:px-11"
        action=""
      >
        {alert.show && (
          <div className="flex justify-center">
            <Alert {...alert} handleAlert={handleAlert} />
          </div>
        )}

        <div className="absolute w-10 h-10 -top-5 flex items-center justify-center rounded-full add_feed_cont_icon tablet:w-14 tablet:h-14 tablet:-top-7">
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient
                cx="103.9%"
                cy="-10.387%"
                fx="103.9%"
                fy="-10.387%"
                r="166.816%"
                id="a"
              >
                <stop stopColor="#E84D70" offset="0%" />
                <stop stopColor="#A337F6" offset="53.089%" />
                <stop stopColor="#28A7ED" offset="100%" />
              </radialGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <circle fill="url(#a)" cx="28" cy="28" r="28" />
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"
              />
            </g>
          </svg>
        </div>

        <h2 className="text-heading-3 text-Jewel-Cave font-bold my-6 tablet:text-heading-1 tablet:mb-10">
          Create New Feedback
        </h2>

        <div className="flex flex-col gap-y-6 mb-10">
          {/* --------- Title ----------- */}

          <section className="flex flex-col">
            <h3 className="font-bold tablet:text-heading-4 text-body-3 mb-1 text-Raven-Night">
              Feedback Title
            </h3>
            <label
              className=" font-normal mb-4 text-Ocean-Night text-body-3 tablet:text-heading-4"
              htmlFor="title"
            >
              Add a short, descriptive headline
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => updateTitle(e.target.value)}
              className={`h-12 p-2 bg-Ghost-White rounded-md text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish 
                ${errorTitle && !title && 'error'}`}
            />
            {errorTitle && <Error title={title} errorTitle={errorTitle} />}
          </section>

          {/* --------- Category ----------- */}
          <section className="flex flex-col">
            <h3 className="font-bold tablet:text-heading-4 text-body-3 mb-1 text-Raven-Night">
              Category
            </h3>
            <label
              className=" font-normal mb-4 text-Ocean-Night text-body-3 tablet:text-heading-4"
              htmlFor="title"
            >
              Choose a category for your feedback
            </label>
            <div className="custom_select relative">
              <select
                value={category}
                onChange={(e) => {
                  updateCategory(e.target.value);
                }}
                className="h-12 p-2 w-full bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish border "
              >
                {['UX', 'UI', 'Enhancement', 'Bug', 'Feature'].map(
                  (item, index) => {
                    return (
                      <option
                        key={index}
                        className="text-body-3 text-Jewel-Cave capitalize"
                      >
                        {item}
                      </option>
                    );
                  }
                )}
              </select>
              <span className="absolute top-2 right-1 h-4/5 rounded-default flex items-center justify-center bg-Ghost-White border-none block w-16 pointer-events-none">
                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="#4661E6"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </section>

          {/* --------- Description ----------- */}
          <section className="flex flex-col">
            <h3 className="font-bold text-body-3 mb-1 text-Raven-Night">
              Feedback Detail
            </h3>
            <label
              className=" font-normal mb-4 text-Ocean-Night text-body-3"
              htmlFor="title"
            >
              Include any specific comments on what should be improved, added,
              etc.
            </label>
            <textarea
              type="text"
              id="title"
              className={`h-30 p-2 bg-Ghost-White rounded-md text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish tablet:h-24
              ${errorDescription && !description && 'error'}
              `}
              value={description}
              onChange={(e) => updateDescription(e.target.value)}
            />
            {errorDescription && (
              <Error
                description={description}
                errorDescription={errorDescription}
              />
            )}
          </section>
        </div>

        <div className="flex flex-col gap-y-4 justify-center items-center w-full tablet:flex-row tablet:gap-y-0 tablet:justify-end tablet:gap-x-4">
          {/* --------- add feedback button ----------- */}
          <button
            type="submit"
            className=" bg-Singapore-Orchid rounded-default w-full h-11 hover:bg-After-Party-Pink transition-all duration-500 text-heading-4 text-Cotton-Ball text-center tablet:w-36 tablet:order-2"
          >
            Add Feedback
          </button>
          {/* --------- cancel feedback button ----------- */}
          <Link to="/">
            <button
              type="button"
              className="  bg-Raven-Night rounded-default w-full h-11  hover:bg-Kimberlite transition-all duration-500 text-heading-4 text-Cotton-Ball text-center tablet:w-24 tablet:order-1"
            >
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default NewFeedback;
