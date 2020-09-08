import React from 'react';
import photo from '../assets/images/testImage.jpeg';

class Home extends React.Component{
    render(){
        return(
            <div className="row">
            <article className="col-md-6 bio">
            <p>
                Welcome to my portfolio. I'm a Web Developer with a Master’s degree in Information Systems from the Kelley School of 
                Business at Indiana University. I'm in progress of completing the Northwestern University Full Stack Bootcamp providing experience in
                 JavaScript, Node.js, React, HTML, CSS, Bootstrap, and MongoDB. I bring over eight  years of experience in the IT 
                 Assurance field - leading teams in SOx 404, SOC1, SOC2, cybersecurity, GDPR, and US privacy legislation compliance. 
                 I've worked with developers to provide them guidance on developing for these regulations. I’m passionate about 
                 consumer privacy and cybersecurity and want to bring that unique experience and perspective to my development for 
                 a high-quality team.
            </p>
            <p>
                I currently serve as the Vice President of the Indiana University Dance Marathon Alumni Board. IUDM is a student-run 
                organization at Indiana benefiting Riley Children's Hospital in Indianapolis and raising over 4 million dollars on an 
                anual basis. I provide mentoring to current executive council as well as perspective and assistance in developing 
                fundraising strategies for the organization with a focus on alumni involvement. 
            </p>
</article>

<div class="col-md-6 pic" id="pic">
<img class="img-fluid bioPic" src={photo} alt="Picture of Alex Curtis"/>
</div>
</div>
        )
    }
}
export default Home;