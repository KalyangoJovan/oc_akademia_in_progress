import React, { useState } from "react";
import Img1 from "../assets/Images/tab1.png";
import Img2 from "../assets/Images/tab2.png";
import Img3 from "../assets/Images/imgtab3.png";
import Logo from "../assets/Images/ak-logo.png";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";


function MeetTabs() {
  const [activeTab, setActiveTab] = useState(1); // State to manage active tab

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="container mt-10 lg:mt-2  m-auto tabs-container">
      <div className="flex justify-around lg:w-[35%] w-[70%] m-auto cursor-pointer ">
        <ScrollAnimation
          animateIn="animate__backInDown"
          animateOnce={true}
          duration={1.5} // Adjust duration for smoother transition
          // Add delay to make it smoother
        >
          <div
            className={
              activeTab === 1
                ? "tab active-tab text-[#091D4F] font-bold lg:text-[18px] text-[16px]  border-b-4 pb-3 border-[#091D4F]"
                : "tab text-[#091D4F]  lg:text-[18px] text-[16px]   font-semibold"
            }
            onClick={() => handleTabClick(1)}
          >
            OC Akademia
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__backInDown"
          animateOnce={true}
          duration={1.5} // Adjust duration for smoother transition
          // Add delay to make it smoother
        >
          <div
            className={
              activeTab === 2
                ? "tab active-tab  text-[#091D4F] font-bold lg:text-[18px] text-[16px]   border-b-4 pb-3 border-[#091D4F]"
                : "tab text-[#091D4F]  lg:text-[18px] text-[16px]  font-semibold"
            }
            onClick={() => handleTabClick(2)}
          >
            Studio
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__backInDown"
          animateOnce={true}
          duration={1.5} // Adjust duration for smoother transition
          // Add delay to make it smoother
        >
          <div
            className={
              activeTab === 3
                ? "tab active-tab text-[#091D4F] font-bold  lg:text-[18px] text-[16px]   border-b-4 pb-3 border-[#091D4F]"
                : "tab text-[#091D4F]  lg:text-[18px] text-[16px]  font-semibold"
            }
            onClick={() => handleTabClick(3)}
          >
            FutureWise
          </div>
        </ScrollAnimation>
      </div>
      <div className=" border border-b-[#D9D9D9] w-[85%] m-auto"></div>

      <div className="tab-content">
        {activeTab === 1 && (
          <div>
            <div className=" lg:flex justify-evenly items-center mt-16 m-auto lg:mx-0">
              <div className="animate__animated  animate__backInLeft">
              
                  <img src={Img1} alt="" className="m-auto lg:m-0" />
              </div>

              <div className="container lg:w-[35%] w-[95%] m-auto mt-5 lg:m-0 lg:text-left text-center animate__animated  animate__backInRight">
                <img src={Logo} alt="" className="m-auto lg:m-0" />
             
                  <h2 className="text-[29px] text-[#091D4F] font-semibold">
                    The European Teaching, Learning Software, Scholarships,
                    University Bank and more
                  </h2>
             
                  <p className="text-[16px] text-[#143D50]">
                  Find all the tools you need for teaching and learning in one place. Akademia by Jovanotti facilitates seamless 
                  connections between teachers, students, and families, no matter where learning takes place.
                  </p>

                <div className="flex justify-center lg:justify-start">
            
                    <button
                      className="mt-8 lg:px-6 px-3 w-fit rounded-full p-3 bg-[#FF6534] text-white font-semibold"
                      style={{
                        boxShadow: " 0px 20px 50px 10px rgba(20, 61, 80, 0.15)",
                      }}
                    >
                      For Higher Education{" "}
                      <svg
                        width="15"
                        height="21"
                        viewBox="0 0 15 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline ml-2"
                      >
                        <g clip-path="url(#clip0_3_2563)">
                          <path
                            d="M1.15768 9.34563C1.18503 9.34563 1.21237 9.34335 1.23971 9.33879C1.26706 9.33423 1.2944 9.33195 1.32175 9.33195H11.2065L10.9878 9.23625C10.8784 9.18156 10.7758 9.12232 10.6801 9.05852C10.5844 8.99472 10.4956 8.9218 10.4135 8.83977L7.65182 6.06438C7.46953 5.8912 7.36471 5.67929 7.33737 5.42863C7.31003 5.17798 7.36471 4.94784 7.50143 4.7382C7.6655 4.51034 7.88425 4.3759 8.15768 4.33488C8.43112 4.29387 8.68177 4.35539 8.90964 4.51945C8.92787 4.53768 8.94382 4.55363 8.95749 4.56731C8.97116 4.58098 8.98711 4.59237 9.00534 4.60149L14.0229 9.61906C14.2143 9.81047 14.31 10.0452 14.31 10.3232C14.31 10.6012 14.2143 10.8359 14.0229 11.0273L9.00534 16.0448C8.81393 16.2363 8.57923 16.332 8.30124 16.332C8.02324 16.332 7.78854 16.2363 7.59714 16.0448C7.57891 16.0266 7.56296 16.0084 7.54928 15.9902C7.53561 15.9719 7.51966 15.9537 7.50143 15.9355C7.36471 15.7258 7.31003 15.4957 7.33737 15.245C7.36471 14.9944 7.46953 14.7825 7.65182 14.6093L10.4135 11.8339C10.4865 11.761 10.5662 11.6949 10.6528 11.6357C10.7394 11.5764 10.8283 11.524 10.9194 11.4784L11.2202 11.3417H1.37643C1.12122 11.3508 0.89336 11.2756 0.692839 11.1161C0.492318 10.9566 0.369272 10.7493 0.323699 10.4941C0.278126 10.2206 0.33737 9.97225 0.501433 9.74895C0.665495 9.52564 0.884246 9.3912 1.15768 9.34563Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3_2563">
                            <rect
                              width="14"
                              height="20.3"
                              fill="white"
                              transform="matrix(1 0 0 -1 0.310059 20.48)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>{" "}
                  
              
                    <button
                      className="mt-8 lg:px-6 px-3 ml-2 w-fit rounded-full p-3 bg-[#091D4F] text-white font-semibold"
                      style={{
                        boxShadow: " 0px 20px 50px 10px rgba(20, 61, 80, 0.15)",
                      }}
                    >
                      For K-12{" "}
                      <svg
                        width="15"
                        height="21"
                        viewBox="0 0 15 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline ml-2"
                      >
                        <g clip-path="url(#clip0_3_2563)">
                          <path
                            d="M1.15768 9.34563C1.18503 9.34563 1.21237 9.34335 1.23971 9.33879C1.26706 9.33423 1.2944 9.33195 1.32175 9.33195H11.2065L10.9878 9.23625C10.8784 9.18156 10.7758 9.12232 10.6801 9.05852C10.5844 8.99472 10.4956 8.9218 10.4135 8.83977L7.65182 6.06438C7.46953 5.8912 7.36471 5.67929 7.33737 5.42863C7.31003 5.17798 7.36471 4.94784 7.50143 4.7382C7.6655 4.51034 7.88425 4.3759 8.15768 4.33488C8.43112 4.29387 8.68177 4.35539 8.90964 4.51945C8.92787 4.53768 8.94382 4.55363 8.95749 4.56731C8.97116 4.58098 8.98711 4.59237 9.00534 4.60149L14.0229 9.61906C14.2143 9.81047 14.31 10.0452 14.31 10.3232C14.31 10.6012 14.2143 10.8359 14.0229 11.0273L9.00534 16.0448C8.81393 16.2363 8.57923 16.332 8.30124 16.332C8.02324 16.332 7.78854 16.2363 7.59714 16.0448C7.57891 16.0266 7.56296 16.0084 7.54928 15.9902C7.53561 15.9719 7.51966 15.9537 7.50143 15.9355C7.36471 15.7258 7.31003 15.4957 7.33737 15.245C7.36471 14.9944 7.46953 14.7825 7.65182 14.6093L10.4135 11.8339C10.4865 11.761 10.5662 11.6949 10.6528 11.6357C10.7394 11.5764 10.8283 11.524 10.9194 11.4784L11.2202 11.3417H1.37643C1.12122 11.3508 0.89336 11.2756 0.692839 11.1161C0.492318 10.9566 0.369272 10.7493 0.323699 10.4941C0.278126 10.2206 0.33737 9.97225 0.501433 9.74895C0.665495 9.52564 0.884246 9.3912 1.15768 9.34563Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3_2563">
                            <rect
                              width="14"
                              height="20.3"
                              fill="white"
                              transform="matrix(1 0 0 -1 0.310059 20.48)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <div className=" lg:flex justify-evenly items-center mt-16 m-auto lg:mx-0">
              <div className="animate__animated  animate__backInLeft">
                <img src={Img2} alt="" className="m-auto lg:m-0" />
              </div>

              <div className="container lg:w-[35%] w-[95%] m-auto mt-5 lg:m-0 lg:text-left text-center animate__animated  animate__backInRight">
                <img src={Logo} alt="" className="m-auto lg:m-0" />

                <h2 className="lg:text-[29px] text-[22px] text-[#091D4F] font-semibold">
                  Introdution, Assessment, Development, Learning and Production.
                </h2>
                <p className="text-[16px] text-[#143D50]">
                Akademia Studio is the central hub where both new and experienced users can introduce themselves, edit content, record sessions,
                follow courses, learn, and teach. Developed by Jovanotti, this platform is designed to foster a comprehensive and interactive learning environment. 
                With Akademia Studio, users can seamlessly engage in a wide range of educational activities, making it an essential tool for enhancing teaching and learning experiences.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <button
                    className="mt-8 lg:px-6 px-3 ml-2 w-fit rounded-full p-3 bg-[#091D4F] text-white font-semibold"
                    style={{
                      boxShadow: " 0px 20px 50px 10px rgba(20, 61, 80, 0.15)",
                    }}
                  >
                    For K-12{" "}
                    <svg
                      width="15"
                      height="21"
                      viewBox="0 0 15 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline ml-2"
                    >
                      <g clip-path="url(#clip0_3_2563)">
                        <path
                          d="M1.15768 9.34563C1.18503 9.34563 1.21237 9.34335 1.23971 9.33879C1.26706 9.33423 1.2944 9.33195 1.32175 9.33195H11.2065L10.9878 9.23625C10.8784 9.18156 10.7758 9.12232 10.6801 9.05852C10.5844 8.99472 10.4956 8.9218 10.4135 8.83977L7.65182 6.06438C7.46953 5.8912 7.36471 5.67929 7.33737 5.42863C7.31003 5.17798 7.36471 4.94784 7.50143 4.7382C7.6655 4.51034 7.88425 4.3759 8.15768 4.33488C8.43112 4.29387 8.68177 4.35539 8.90964 4.51945C8.92787 4.53768 8.94382 4.55363 8.95749 4.56731C8.97116 4.58098 8.98711 4.59237 9.00534 4.60149L14.0229 9.61906C14.2143 9.81047 14.31 10.0452 14.31 10.3232C14.31 10.6012 14.2143 10.8359 14.0229 11.0273L9.00534 16.0448C8.81393 16.2363 8.57923 16.332 8.30124 16.332C8.02324 16.332 7.78854 16.2363 7.59714 16.0448C7.57891 16.0266 7.56296 16.0084 7.54928 15.9902C7.53561 15.9719 7.51966 15.9537 7.50143 15.9355C7.36471 15.7258 7.31003 15.4957 7.33737 15.245C7.36471 14.9944 7.46953 14.7825 7.65182 14.6093L10.4135 11.8339C10.4865 11.761 10.5662 11.6949 10.6528 11.6357C10.7394 11.5764 10.8283 11.524 10.9194 11.4784L11.2202 11.3417H1.37643C1.12122 11.3508 0.89336 11.2756 0.692839 11.1161C0.492318 10.9566 0.369272 10.7493 0.323699 10.4941C0.278126 10.2206 0.33737 9.97225 0.501433 9.74895C0.665495 9.52564 0.884246 9.3912 1.15768 9.34563Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_2563">
                          <rect
                            width="14"
                            height="20.3"
                            fill="white"
                            transform="matrix(1 0 0 -1 0.310059 20.48)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <div className=" lg:flex justify-evenly items-center mt-16 m-auto lg:mx-0">
              <div className="animate__animated  animate__backInLeft">
                <img src={Img3} alt="" className="m-auto lg:m-0" />
              </div>

              <div className="container lg:w-[35%] w-[95%] m-auto mt-5 lg:m-0 lg:text-left text-center animate__animated  animate__backInRight">
                <img src={Logo} alt="" className="m-auto lg:m-0" />

                <h2 className="text-[29px] text-[#091D4F] font-semibold">
                  Streamlined edtech adoption. Higher impact.
                </h2>
                <p className="text-[16px] text-[#143D50]">
                  FutureWise is a powerful tool designed to streamline the adoption of educational technology and maximize its impact. 
                  FutureWise enhances technology integration, enabling faculty and students 
                  to seamlessly navigate new platforms. It also provides robust evaluation tools to assess the effectiveness of 
                  educational technologies, ensuring higher impact and improved outcomes for all users. 
                  FutureWise is your comprehensive solution for advancing edtech adoption and optimizing learning experiences.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <button
                    className="mt-8 lg:px-6 px-3w-fit rounded-full p-3 bg-[#FF6534] text-white font-semibold"
                    style={{
                      boxShadow: " 0px 20px 50px 10px rgba(20, 61, 80, 0.15)",
                    }}
                  >
                    For Higher Education{" "}
                    <svg
                      width="15"
                      height="21"
                      viewBox="0 0 15 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline ml-2"
                    >
                      <g clip-path="url(#clip0_3_2563)">
                        <path
                          d="M1.15768 9.34563C1.18503 9.34563 1.21237 9.34335 1.23971 9.33879C1.26706 9.33423 1.2944 9.33195 1.32175 9.33195H11.2065L10.9878 9.23625C10.8784 9.18156 10.7758 9.12232 10.6801 9.05852C10.5844 8.99472 10.4956 8.9218 10.4135 8.83977L7.65182 6.06438C7.46953 5.8912 7.36471 5.67929 7.33737 5.42863C7.31003 5.17798 7.36471 4.94784 7.50143 4.7382C7.6655 4.51034 7.88425 4.3759 8.15768 4.33488C8.43112 4.29387 8.68177 4.35539 8.90964 4.51945C8.92787 4.53768 8.94382 4.55363 8.95749 4.56731C8.97116 4.58098 8.98711 4.59237 9.00534 4.60149L14.0229 9.61906C14.2143 9.81047 14.31 10.0452 14.31 10.3232C14.31 10.6012 14.2143 10.8359 14.0229 11.0273L9.00534 16.0448C8.81393 16.2363 8.57923 16.332 8.30124 16.332C8.02324 16.332 7.78854 16.2363 7.59714 16.0448C7.57891 16.0266 7.56296 16.0084 7.54928 15.9902C7.53561 15.9719 7.51966 15.9537 7.50143 15.9355C7.36471 15.7258 7.31003 15.4957 7.33737 15.245C7.36471 14.9944 7.46953 14.7825 7.65182 14.6093L10.4135 11.8339C10.4865 11.761 10.5662 11.6949 10.6528 11.6357C10.7394 11.5764 10.8283 11.524 10.9194 11.4784L11.2202 11.3417H1.37643C1.12122 11.3508 0.89336 11.2756 0.692839 11.1161C0.492318 10.9566 0.369272 10.7493 0.323699 10.4941C0.278126 10.2206 0.33737 9.97225 0.501433 9.74895C0.665495 9.52564 0.884246 9.3912 1.15768 9.34563Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_2563">
                          <rect
                            width="14"
                            height="20.3"
                            fill="white"
                            transform="matrix(1 0 0 -1 0.310059 20.48)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>{" "}
                  <button
                    className="mt-8 lg:px-6 px-3 ml-2 w-fit rounded-full p-3 bg-[#091D4F] text-white font-semibold"
                    style={{
                      boxShadow: " 0px 20px 50px 10px rgba(20, 61, 80, 0.15)",
                    }}
                  >
                    For K-12{" "}
                    <svg
                      width="15"
                      height="21"
                      viewBox="0 0 15 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline ml-2"
                    >
                      <g clip-path="url(#clip0_3_2563)">
                        <path
                          d="M1.15768 9.34563C1.18503 9.34563 1.21237 9.34335 1.23971 9.33879C1.26706 9.33423 1.2944 9.33195 1.32175 9.33195H11.2065L10.9878 9.23625C10.8784 9.18156 10.7758 9.12232 10.6801 9.05852C10.5844 8.99472 10.4956 8.9218 10.4135 8.83977L7.65182 6.06438C7.46953 5.8912 7.36471 5.67929 7.33737 5.42863C7.31003 5.17798 7.36471 4.94784 7.50143 4.7382C7.6655 4.51034 7.88425 4.3759 8.15768 4.33488C8.43112 4.29387 8.68177 4.35539 8.90964 4.51945C8.92787 4.53768 8.94382 4.55363 8.95749 4.56731C8.97116 4.58098 8.98711 4.59237 9.00534 4.60149L14.0229 9.61906C14.2143 9.81047 14.31 10.0452 14.31 10.3232C14.31 10.6012 14.2143 10.8359 14.0229 11.0273L9.00534 16.0448C8.81393 16.2363 8.57923 16.332 8.30124 16.332C8.02324 16.332 7.78854 16.2363 7.59714 16.0448C7.57891 16.0266 7.56296 16.0084 7.54928 15.9902C7.53561 15.9719 7.51966 15.9537 7.50143 15.9355C7.36471 15.7258 7.31003 15.4957 7.33737 15.245C7.36471 14.9944 7.46953 14.7825 7.65182 14.6093L10.4135 11.8339C10.4865 11.761 10.5662 11.6949 10.6528 11.6357C10.7394 11.5764 10.8283 11.524 10.9194 11.4784L11.2202 11.3417H1.37643C1.12122 11.3508 0.89336 11.2756 0.692839 11.1161C0.492318 10.9566 0.369272 10.7493 0.323699 10.4941C0.278126 10.2206 0.33737 9.97225 0.501433 9.74895C0.665495 9.52564 0.884246 9.3912 1.15768 9.34563Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_2563">
                          <rect
                            width="14"
                            height="20.3"
                            fill="white"
                            transform="matrix(1 0 0 -1 0.310059 20.48)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MeetTabs;
