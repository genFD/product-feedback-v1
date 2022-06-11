import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useParams, useNavigate } from 'react-router-dom';
import { Alert, Error, GobackButton, GoHome, Loading } from '../components';
import { useGlobalContext } from '../context/context';
import { customStyles } from '../utils/ModalStyles';

Modal.setAppElement('#root');

function EditFeedback() {
  const [formdata, updateFormData] = useState({
    title: '',
    category: '',
    status: '',
    description: '',
  });
  const [alert, updateAlert] = useState({
    show: false,
    message: '',
    type: '',
  });
  const [errorTitle, updateErrorTitle] = useState(false);
  const [errorDescription, updateErrorDescription] = useState(false);
  const [suggestion, setSuggestion] = useState(null);
  const { fetchRequests } = useGlobalContext();

  const {
    confirmationModal,
    modal,
    closeModal,
    showConfirmationModal,
    showModal,
    closeConfirmationModal,
    loading,
    setLoading,
  } = useGlobalContext();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getSuggestion = async () => {
      try {
        const { data } = await axios.get(`/api/feedbacks/${id}`);
        if (data) {
          setSuggestion(data);
          updateFormData({ ...data });
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getSuggestion();
  }, [id]);

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
        category,
        status,
        description,
      };
      await axios.put(`/api/feedbacks/${id}`, data);
      fetchRequests();
      handleAlert(true, 'success', 'feedback updated! Thank you!');
      updateFormData({
        title: '',
        category: '',
        status: '',
        description: '',
      });
    }
  };
  const deleteFeedback = async () => {
    try {
      await axios.delete(`/api/feedbacks/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (!suggestion) {
    return <h2>No suggestion found, please refresh the page</h2>;
  }
  const { title, category, status, description } = formdata;

  return (
    <div className="flex flex-col gap-y-9 justify-center items-center pt-10 pb-16 px-6 tablet:pt-14 tablet:pb-56 tablet:px-28 laptop:pt-20 laptop:px-72 laptop:pb-24 desktop:pt-24 desktop:pb-44 desktop:px-450  bg-ove">
      {
        <Modal
          isOpen={modal}
          onRequestClose={closeModal}
          style={customStyles}
          className="w-1/3 p-4 flex flex-col justify-center items-center rounded-default shadow-md"
          contentLabel="Delete feedback"
        >
          <p className="mb-2 text-body-2 font-bold text-Raven-Night">
            Are you sure?
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                deleteFeedback();
                closeModal();
                showConfirmationModal();
              }}
              className="bg-Singapore-Orchid rounded-default p-2 shadow-md text-body-3 hover:bg-After-Party-Pink transition-colors duration-500 text-heading-4 text-Cotton-Ball"
            >
              Yes
            </button>
            <button
              onClick={closeModal}
              className="bg-Blood-Moon rounded-default p-2 shadow-md text-body-3 hover:bg-Steamed-Salmon transition-colors duration-500 text-heading-4 text-Cotton-Ball"
            >
              No
            </button>
          </div>
        </Modal>
      }
      {
        <Modal
          isOpen={confirmationModal}
          onRequestClose={closeConfirmationModal}
          style={customStyles}
          className="w-1/3 p-4 flex flex-col justify-center items-center rounded-default shadow-md"
          contentLabel="Delete feedback"
        >
          <p className="text-body-2 font-bold text-Raven-Night">
            ✅ feedback deleted ✅
          </p>
          <GoHome
            closeModal={closeModal}
            closeConfirmationModal={closeConfirmationModal}
          />
        </Modal>
      }
      <div className="flex justify-start w-full pl-6">
        <header>
          <GobackButton />
        </header>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" bg-white w-full rounded-default  pt-11 pb-6 px-6 relative tablet:pt-12 tablet:pb-10 tablet:px-11"
      >
        <div className="absolute -top-5 flex items-center justify-center rounded-full add_feed_cont_icon tablet:w-14 tablet:h-14 tablet:-top-7">
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
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
              <circle fill="url(#a)" cx="20" cy="20" r="20" />
              <path
                d="M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </div>
        {alert.show && (
          <div className="flex justify-center mb-4">
            <Alert {...alert} handleAlert={handleAlert} />
          </div>
        )}
        <h2 className="text-heading-3 text-Jewel-Cave font-bold mb-6 tablet:text-heading-1 tablet:mb-10">
          Editing '{suggestion.title}'
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
              value={title}
              onChange={(e) =>
                updateFormData((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
              type="text"
              id="title"
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
                onChange={(e) =>
                  updateFormData((prevState) => ({
                    ...prevState,
                    category: e.target.value,
                  }))
                }
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

          {/* --------- Status ----------- */}
          <section className="flex flex-col">
            <h3 className="font-bold tablet:text-heading-4 text-body-3 mb-1 text-Raven-Night">
              Update Status
            </h3>
            <label
              className=" font-normal mb-4 text-Ocean-Night text-body-3 tablet:text-heading-4"
              htmlFor="title"
            >
              Change feature state
            </label>
            <div className="custom_select relative">
              <select
                value={status}
                onChange={(e) =>
                  updateFormData((prevState) => ({
                    ...prevState,
                    status: e.target.value,
                  }))
                }
                className="h-12 w-full bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish border "
              >
                {['Suggestion', 'Planned', 'In-Progress', 'Live'].map(
                  (item, index) => {
                    return (
                      <option
                        key={index}
                        className="text-body-3 text-Jewel-Cave"
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
              value={description}
              onChange={(e) =>
                updateFormData((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
              type="text"
              id="title"
              className={`h-30 p-2 bg-Ghost-White rounded-md text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish tablet:h-24
              ${errorDescription && !description && 'error'}
              `}
            />
            {errorDescription && (
              <Error
                description={description}
                errorDescription={errorDescription}
              />
            )}
          </section>
        </div>

        {/* --------- Buttons ----------- */}

        <div className="flex flex-col gap-y-4 justify-center items-center w-full tablet:flex-row tablet:gap-y-0 tablet:gap-x-4">
          <button
            type="submit"
            className=" bg-Singapore-Orchid rounded-default w-full h-11 hover:bg-After-Party-Pink transition-colors duration-500 text-heading-4 text-Cotton-Ball text-center tablet:w-36 tablet:order-3"
          >
            Save Changes
          </button>

          <button
            onClick={() => navigate(-1)}
            type="button"
            className=" bg-Jewel-Cave rounded-default w-full h-11  hover:bg-Kimberlite transition-colors duration-500 text-heading-4 text-Cotton-Ball text-center tablet:w-93 tablet:order-2"
          >
            Cancel
          </button>

          <button
            onClick={showModal}
            type="button"
            className=" bg-Blood-Moon rounded-default w-full h-11 hover:bg-Steamed-Salmon transition-colors duration-500 text-heading-4 text-Cotton-Ball text-center tablet:w-93 order-1 tablet:mr-auto"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditFeedback;
