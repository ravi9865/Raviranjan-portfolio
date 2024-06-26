import React, { useState } from "react";
import Swal from "sweetalert2";
import Img1 from "../Assets/Img/Project-img/1.gif";
import Img2 from "../Assets/Img/Project-img/2.gif";
import Img3 from "../Assets/Img/Project-img/3.gif";
import Img4 from "../Assets/Img/Project-img/4.gif";
import Img5 from "../Assets/Img/Project-img/5.gif";
import Img6 from "../Assets/Img/Project-img/6.gif";
import Img7 from "../Assets/Img/link_page/Github_logo.png";
import Img8 from "../Assets/Img/link_page/linkedin_logo.png";
import Img9 from "../Assets/Img/link_page/HackerRank_logo.png";
import Img10 from "../Assets/Img/link_page/Devsnest_logo.png";
import Img14 from "../Assets/Img/contactus-icon.png";
import Img15 from "../Assets/Img/1.png";
import Img16 from "../Assets/Img/2.png";
import Img17 from "../Assets/Img/3.png";
export default function Content(props) {
  const baseUrl = "https://protfolio-backend-hlx6.onrender.com";
  const [name, setName] = useState();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    // console.log(name, phone, email, subject, description);
    try {
      const response = await fetch(`${baseUrl}/submitData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, subject, description }),
      });
      if (response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Message Sent successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setDescription("");
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Your Message not Sent successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      alert("Internal Server Error!");
      console.error("Internal Server Error!", error);
    }
  };
  const handleRestInputF = (e) => {
    e.preventDefault();
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setDescription("");
  };
  return (
    <article
      className="content"
      style={{
        backgroundColor: props.active ? "black" : "white",
        color: props.active ? "white" : "black",
      }}
    >
      <div className="same-content-text about-text">
        <h1 className="main-text"># About me</h1>
        <p>
          Hey, I am Raviranjan. Basically i'm from Bihar But Currently living in
          New Delhi. I'm pursuing Bca from MDU, Rothak. I have a special
          Interest in coding and to making websites with using differents
          Programming languages. Currently, i am gaining Industrial Knowledge
          with JSpiders for Java Full Stack Developers where, we can learn Core
          Java, HTML5, CSS3, ORACEL SQL, JavaScript with Real Time Project(API,
          AJAX). I make some website using these Web Technologies likes
          Sharmaji-Portfolio, Sadhi.com clone, Images Slider, Form Validations,
          Auto Text. I got a chance to work with Subhidha Foundations for 1.5
          months as a Frontend Developer. We worked as a group to develop a
          charity website and I had got the role to develop the footer section
          of webites. The main thing that i learn in this internship was
          collaberating in a group and working together as a team to complete a
          given task. I also learnt to how to use 'position' property and CSS
          'flexbox'.
        </p>
      </div>
      <div className="same-content-text">
        <h1 className="main-text"># Skills</h1>
        <div className="cards">
          <div className="card">
            <div className="header">Frontend Technology</div>
            <div
              className="body"
              style={{ color: props.active ? "black" : "black" }}
            >
              <div className="skill">
                <div className="skill-name">HTML5</div>
                <div className="skill-level">
                  <div className="skill-percent" style={{ width: "90%" }}></div>
                </div>
                <div className="skill-percent-number">90%</div>
              </div>
              <div className="skill">
                <div className="skill-name">CSS3</div>
                <div className="skill-level">
                  <div className="skill-percent" style={{ width: "80%" }}></div>
                </div>
                <div className="skill-percent-number">80%</div>
              </div>
              <div className="skill">
                <div className="skill-name">JavaScript</div>
                <div className="skill-level">
                  <div className="skill-percent" style={{ width: "75%" }}></div>
                </div>
                <div className="skill-percent-number">75%</div>
              </div>
              <div className="skill">
                <div className="skill-name">React js</div>
                <div className="skill-level">
                  <div className="skill-percent" style={{ width: "50%" }}></div>
                </div>
                <div className="skill-percent-number">50%</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="header">Backend Technology</div>
            <div
              className="body"
              style={{ color: props.active ? "black" : "black" }}
            >
              <div className="skill">
                <div className="skill-name">Java</div>
                <div className="skill-level">
                  <div className="skill-percent" style={{ width: "95%" }}></div>
                </div>
                <div className="skill-percent-number">95%</div>
              </div>
              <div className="skill">
                <div className="skill-name">JavaScript</div>
                <div className="skill-level">
                  <div className="skill-percent" style={{ width: "80%" }}></div>
                </div>
                <div className="skill-percent-number">50%</div>
              </div>
              <div className="skill">
                <div className="skill-name">C++</div>
                <div className="skill-level">
                  <div className="skill-percent" style={{ width: "55%" }}></div>
                </div>
                <div className="skill-percent-number">55%</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="header">Database Technology</div>
            <div
              className="body"
              style={{ color: props.active ? "black" : "black" }}
            >
              <div className="skill">
                <div className="skill-name">MongoDB</div>
                <div className="skill-level">
                  <div className="skill-percent" style={{ width: "65%" }}></div>
                </div>
                <div className="skill-percent-number">65%</div>
              </div>
              <div className="skill">
                <div className="skill-name">Oracle SQL</div>
                <div className="skill-level">
                  <div className="skill-percent" style={{ width: "80%" }}></div>
                </div>
                <div className="skill-percent-number">80%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="same-content-text display-none">
        <h1 className="main-text"># Academics Qualfication</h1>
        <div
          className="table-acadmics"
          style={{ backgroundColor: props.active ? "white" : "white" }}
        >
          <table border={"1px"}>
            {/* <!-- <caption># Academics Qualfication</caption> --> */}
            <tr className="head">
              <td>Qualfication</td>
              <td className="hide-content">College/School Name</td>
              <td>Bord/University</td>
              <td>Percentage</td>
              <td>Year of Passing</td>
            </tr>
            <tr>
              <td>Bca</td>
              <td className="hide-content">
                St.Andrews Institute of Technolgy and Management, Gurgaon
              </td>
              <td>MDU, Rothak</td>
              <td>80.1%</td>
              <td>2023</td>
            </tr>
            <tr>
              <td>
                12<sup>th</sup>
              </td>
              <td className="hide-content">
                Sarvodya Boys SSS No 1 Subhash Nagar New Delhi
              </td>
              <td>CBSE</td>
              <td>63.2%</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>
                10<sup>th</sup>
              </td>
              <td className="hide-content">
                Sarvodya Boys SSS No 1 Subhash Nagar New Delhi
              </td>
              <td>CBSE</td>
              <td>73.3%</td>
              <td>2018</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="same-content-text">
        <h1 className="main-text"># Projects</h1>
        <div className="projects">
          <div className="project-card">
            <div className="child-card card-1">
              <div className="img-child">
                <img src={Img15} alt="github-ajax" />
              </div>
              <div className="anchor-child">
                <a
                  href="https://sharmaji-ecommerce.netlify.app/"
                  className="view-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <a
                  href="https://github.com/ravi9865/Ecommerce-Clients.git"
                  className="code-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="child-card card-1">
              <div className="img-child">
                <img src={Img1} alt="github-ajax" />
              </div>
              <div className="anchor-child">
                <a
                  href="https://github-user-search-api-2023.netlify.app/"
                  className="view-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <a
                  href="https://github.com/ravi9865/Github-User-Search-API.git"
                  className="code-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="child-card card-2">
              <div className="img-child">
                <img src={Img16} alt="firefox-search-browser" />
              </div>
              <div className="anchor-child">
                <a
                  href="https://news-27-7.netlify.app/"
                  className="view-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <a
                  href="https://github.com/ravi9865/news-24-7-clients.git"
                  className="code-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project-card">
            <div className="child-card card-3">
              <div className="img-child">
                <img src={Img17} alt="Spotify" />
              </div>
              <div className="anchor-child">
                <a
                  href="https://tax-calculator-2024.netlify.app/"
                  className="view-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <a
                  href="https://github.com/ravi9865/Tax-Calculator.git"
                  target="_blank"
                  className="code-child"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="child-card card-2">
              <div className="img-child">
                <img src={Img2} alt="firefox-search-browser" />
              </div>
              <div className="anchor-child">
                <a
                  href="https://firefox-search-browser-2023.netlify.app/"
                  className="view-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <a
                  href="https://github.com/ravi9865/Firefox-Browser-Clone-with-search-Functionality.git"
                  className="code-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="child-card card-3">
              <div className="img-child">
                <img src={Img3} alt="Spotify" />
              </div>
              <div className="anchor-child">
                <a
                  href="https://spotify-web-2023.netlify.app/"
                  className="view-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <a
                  href="https://spotify-web-2023.netlify.app/"
                  target="_blank"
                  className="code-child"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project-card">
            <div className="child-card card-4">
              <div className="img-child">
                <img src={Img4} alt="Dashboard" />
              </div>
              <div className="anchor-child">
                <a
                  href="https://ravi-sharma-dashboard-2023.netlify.app/"
                  className="view-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <a
                  href="https://github.com/ravi9865/Responsive-Dashboard.git"
                  className="code-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="child-card card-5">
              <div className="img-child">
                <img src={Img5} alt="Shaadi" />
              </div>
              <div className="anchor-child">
                <a
                  href="https://shaadi-home-page-clone-2023.netlify.app/"
                  className="view-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <a
                  href="https://github.com/ravi9865/shaadi.com-clone-home-page.git"
                  className="code-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="child-card card-6">
              <div className="img-child">
                <img src={Img6} alt="wheather-forecast" />
              </div>
              <div className="anchor-child">
                <a
                  href="https://wheather-forecast-app-2022.netlify.app/"
                  className="view-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <a
                  href="https://github.com/ravi9865/wheather-forecast-app.git"
                  className="code-child"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="same-content-text about-text">
        <h1 className="main-text"># Important Links</h1>
        <p>
          Here we have some Important Links of the Repositiory and coding
          challenges. So, I preferred github and Netlify to host our websites
          because it is the best for freeshers and without any charges for the
          domain and hosting. I used LinkedIn because it's Manage your
          professional identity. Build and engage with your professional
          network. Access knowledge, insights and opportunities. i show our
          Resent work and big Acheviements on that. Coming to next, 'HackerRank'
          is provide topic related many question and challenges to improved your
          coding logic. Sometimes i attend the coding context on coding ninja
          for practice and industrial level programming problems have to solve.
        </p>
        <div className="imp-links">
          <div className="link-card lcards-1">
            <img id="github-logo" src={Img7} alt="Github-logo" />
            <h1>GitHub</h1>
            <a
              href="https://github.com/ravi9865"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
          </div>
          <div className="link-card lcards-2">
            <img id="linkedin-logo" src={Img8} alt="LinkedIn" />
            <h1>LinkedIn</h1>
            <a
              href="https://www.linkedin.com/in/imraviranjansharma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
          </div>
          <div className="link-card lcards-3">
            <img src={Img9} alt="HackerRank" />
            <h1>HackerRank</h1>
            <a
              href="https://www.hackerrank.com/RAVIRA_209098?hr_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
          </div>
          <div className="link-card lcards-4">
            <img src={Img10} alt="Devsnest" />
            <h1>Devsnest</h1>
            <a
              href="https://devsnest.in/u/ravira209098"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
          </div>
          {/* <div className="link-card lcards-5">
                        <img alt="Coding" />
                        <h1>GitHub</h1>
                        <a href="https://github.com/ravi9865" target="_blank">link</a>
                    </div> */}
        </div>
      </div>
      <div className="same-content-text">
        <h2 className="main-text"># Interest</h2>
        <div className="about-Interest">
          <ul type="circle">
            <li>Making Websites</li>
            <li>Analysis and information gain about Shares</li>
            <li>Playing Caromn and Badminton</li>
          </ul>
        </div>
      </div>
      <div className="same-content-text">
        <h1 className="main-text"># Contact Us</h1>
        <div className="contact-form">
          <form
            name="contact"
            style={{ color: props.active ? "black" : "black" }}
            id="form"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="input-fields">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-fields">
              <label htmlFor="phone1">Phone:</label>
              <input
                type="phone"
                name="phone"
                id="phone1"
                minLength={10}
                maxLength={12}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="input-fields">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-fields">
              <label htmlFor="subject">Subjects:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="decs">
              <label htmlFor="decs">Description: </label>
              <textarea
                name="description"
                id="decs"
                placeholder="Writte Your Query"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="contract-btn">
              <button id="submit" type="submit">
                Submit
              </button>
              <button id="reset" type="button" onClick={handleRestInputF}>
                Reset
              </button>
            </div>
          </form>
          <div className="contact-img display-none">
            <img src={Img14} alt="contract-img" />
          </div>
        </div>
        <div
          id="contract-response"
          style={{ display: props.Display ? "block" : "none" }}
        >
          <div className="ani-circle"></div>
          <h1>Your Respose will be Submitted...</h1>
        </div>
      </div>
    </article>
  );
}
