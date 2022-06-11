import React from 'react'

const oldsort = () => {
  return (
   {dropDownMenu && (
                <form className="absolute rounded-default shadow-md  w-64 h-48 bg-white flex flex-col  divide-Jewel-Cave divide-opacity-20 divide-y top-10 left-10 ">
                  <select name="sort" id="sort">
                    {[
                      'Most Upvotes',
                      'Least Upvotes',
                      'Most Comments',
                      'Least Comments',
                    ].map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item}
                          className="h-1/4  p-3 text-Ocean-Night hover:text-Singapore-Orchid cursor-pointer 
                  transition-colors duration-200 
                  "
                        >
                          <div
                            onClick={() => {
                              setValue(index);
                            }}
                            className="w-full flex justify-between items-center"
                          >
                            <button
                              onClick={() => {
                                setValue(index);
                              }}
                              className="text-body-1 
                  "
                            >
                              {item}
                            </button>

                            {/* conditional check icon */}
                            {value === index && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="11"
                              >
                                <path
                                  fill="none"
                                  stroke="#AD1FEA"
                                  strokeWidth="2"
                                  d="M1 5.233L4.522 9 12 1"
                                />
                              </svg>
                            )}
                          </div>
                        </option>
                      );
                    })}
                  </select>
                </form>
              )}
              {/* <button
                onClick={() => {
                  setArrowDown(!arrowDown);
                  setDropDownMenu(!dropDownMenu);
                }}
                className="text-sort-by text-heading-4 flex items-center justify-center gap-1   transition-colors duration-200 cursor-pointer"
              >
                <span className="font-light text-Cotton-Ball">Sort by :</span>
                <span className="font-bold text-Cotton-Ball">Most Upvotes</span>

                {!arrowDown ? (
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="#ffff"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 6l4-4 4 4"
                      stroke="#ffff"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                )}
              </button> */}

  )
}

export default oldsort