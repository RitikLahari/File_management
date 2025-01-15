import React, { useEffect } from 'react';
import './heroSection.css';
import img1 from '../../Assets/dashhome.jpg'
import h1 from '../../Assets/h1.png'
import h2 from '../../Assets/h2.png'
import h3 from '../../Assets/h3.png'
import h4 from '../../Assets/h4.png'

import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
const HeroSection = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold for when the animation triggers
    );

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const {isAuthenticated,user}=useSelector((state)=>state.auth);
  const dispatch=useDispatch();
  return (
    <div className="hero-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          {/* Text Content */}
          <div className="text-content">
            <p className="subheading">Folder and File Management website </p>
            <h1 className="hero-heading">Save your FILES and DOCUMENT freely</h1>
            <p className="hero-description">
              Grow your career fast with the right mentor.
            </p>

            {/* Join Free Button */}
            { isAuthenticated ?(
               <>
                  <a href="/thankyoupage" className="join-free-btn">
                Thankyou for joining
              <svg
                className="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"  
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>

            <p className="login-text">
              Welcome to our website 
            </p>
               </>
            ):(
              <>
               <a href="/Register" className="join-free-btn">
              Join for free
              <svg
                className="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>

            <p className="login-text">
              Already joined us? <a href="/login" className="login-link">Log in</a>
            </p>
              </>
            )}
           
          </div>

          {/* Image Content */}
          <div className="hero-image">
            <img
              src={img1}
              alt="Hero"
            />
          </div>
        </div>
      </section>
      <div>
      {/* 1st Section */}
      <div className="container hidden">
        <div className="content">
          <div className="text-portion">
            <span>Stunning and Intuitive User Interface</span>
            <p>
              My website's User Interface is simple and attractive for the users,
              enhancing the overall user experience in a positive way.
            </p>
          </div>
          <div className="image-portion">
            <img src={h1} alt="Design" />
          </div>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="container hidden">
        <div className="content ">
          <div className="image-portion">
            <img src={h2} alt="Design" />
          </div>
          <div className="text-portion">
            <span>Folder</span>
            <p>
              A folder serves as an essential organizational tool that helps users store, manage, and access their files systematically.
              It acts like a virtual container, allowing you to group related files together based on categories, projects, or purposes.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd Section */}
      <div className="container hidden">
        <div className="content">
          <div className="text-portion">
            <span>File</span>
            <p>
              A file is a digital container that stores information or data, ranging from text and images to audio and video.
              Effective file management involves naming, organizing, and backing up files to ensure they are easily accessible and secure.
            </p>
          </div>
          <div className="image-portion">
            <img src={h3} alt="Design" />
          </div>
        </div>
      </div>

      {/* 4th Section */}
      <div className="container hidden">
        <div className="content ">
          <div className="image-portion">
            <img src={h4} alt="Design" />
          </div>
          <div className="text-portion">
            <span>Upload</span>
            <p>
              Uploading refers to the process of transferring data or files from a local device,
              such as a computer or smartphone, to a remote server, platform, or cloud storage.
              It allows users to share and save content online. Uploading is essential for collaboration,
              enabling teams to share resources, submit assignments, or manage projects efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>

                {/* Footer  */}

           <Footer/>     
    </div>
  );
};

export default HeroSection;
