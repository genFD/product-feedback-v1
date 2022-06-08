import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GobackButton } from '../components';
import { useGlobalContext } from '../context/context';

function EditFeedback() {
  // const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState(null);
  const [editId, setEditId] = useState(null);
  const { id } = useParams();

  // useEffect(() => {
  //   setLoading(true);
  //   const getSuggestion = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/feedbacks/${id}`);
  //       if (data) {
  //         setLoading(false);
  //         setSuggestion(data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   };
  //   getSuggestion();
  // }, [id]);

  // if (loading) {
  //   return <Loading />;
  // }
  if (!suggestion) {
    return <h2>No suggestion found, please refresh the page</h2>;
  }

  return (
    <div className="flex flex-col gap-y-9 justify-center items-center pt-10 pb-16 px-6 tablet:pt-14 tablet:pb-56 tablet:px-28 laptop:pt-20 laptop:px-72 laptop:pb-24 desktop:pt-24 desktop:pb-44 desktop:px-450">
      <div className="flex justify-start w-full pl-6">
        <header>
          <GobackButton />
        </header>
      </div>
      <form className="bg-white w-full rounded-default h-893 pt-11 pb-6 px-6 relative tablet:pt-12 tablet:pb-10 tablet:px-11 tablet:h-822 laptop:h-860 desktop:h-822 ">
        <div className="absolute w-10 h-10 -top-5 flex items-center justify-center rounded-full add_feed_cont_icon tablet:w-14 tablet:h-14 tablet:-top-7">
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
                <stop stop-color="#E84D70" offset="0%" />
                <stop stop-color="#A337F6" offset="53.089%" />
                <stop stop-color="#28A7ED" offset="100%" />
              </radialGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <circle fill="url(#a)" cx="20" cy="20" r="20" />
              <path
                d="M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </g>
          </svg>
        </div>

        <h2 className="text-heading-3 text-Jewel-Cave font-bold mb-6 tablet:text-heading-1 tablet:mb-10">
          {/* {title} */}
        </h2>
        <div className="flex flex-col gap-y-6 mb-10">
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
              className="h-12 bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish border"
            />
          </section>

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
              <select className="h-12 w-full bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish border ">
                {['All', 'UX', 'UI', 'Enhancement', 'Bug', 'Feature'].map(
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
              <span className="absolute top-0 right-0 h-full rounded-default flex items-center justify-center  bg-Ghost-White block w-16 pointer-events-none">
                {/* {!dropDown ? (
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="#4661E6"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 6l4-4 4 4"
                      stroke="#4661E6"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                )} */}
              </span>
            </div>
          </section>

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
              <select className="h-12 w-full bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish border ">
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
              <span className="absolute top-0 right-0 h-full rounded-default flex items-center justify-center  bg-Ghost-White block w-16 pointer-events-none">
                {/* {!dropDown ? (
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="#4661E6"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 6l4-4 4 4"
                      stroke="#4661E6"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                )} */}
              </span>
            </div>
          </section>

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
              className="h-30 bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish tablet:h-24"
            />
          </section>
        </div>
        <div className="flex flex-col gap-y-4 justify-center items-center w-full tablet:flex-row tablet:gap-y-0 tablet:gap-x-4">
          <button
            type="button"
            className=" bg-Singapore-Orchid rounded-default w-full h-11 hover:bg-After-Party-Pink transition-colors duration-500 text-heading-4 text-Cotton-Ball text-center tablet:w-36 tablet:order-3"
          >
            Save Changes
          </button>
          <button
            type="button"
            className=" bg-Jewel-Cave rounded-default w-full h-11  hover:bg-Kimberlite transition-colors duration-500 text-heading-4 text-Cotton-Ball text-center tablet:w-93 tablet:order-2"
          >
            Cancel
          </button>
          <button
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
