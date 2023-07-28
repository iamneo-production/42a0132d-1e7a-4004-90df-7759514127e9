import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-page-title">Welcome to Glammart Application</h1>
      <p className="about-page-description">
        Where Beauty Meets Technology!
      </p>
      <div className="about-page-content">
        <div className="about-page-section">
          <h2 className="about-page-section-title">About Glammart</h2>
          <p className="about-page-section-description">
            Glammart is a revolutionary beauty application that brings the best
            of beauty and technology together. Our mission is to empower
            individuals to express their unique beauty and enhance their
            self-confidence through our innovative features and curated beauty
            content.
          </p>
        </div>
        <div className="about-page-section">
          <h2 className="about-page-section-title">Our Vision</h2>
          <p className="about-page-section-description">
            At Glammart, we believe that beauty is not just about external
            appearances but also about self-expression, creativity, and
            embracing individuality. We envision a world where everyone feels
            confident and empowered to embrace their unique beauty, and we
            strive to make that vision a reality through our application.
          </p>
        </div>
        <div className="about-page-section">
          <h2 className="about-page-section-title">Our Features</h2>
          <ul className="about-page-features-list">
            <li>Virtual Makeup Studio</li>
            <li>Beauty Tips and Tutorials</li>
            <li>Personalized Recommendations</li>
            <li>Community and Collaboration</li>
            <li>Beauty Trends and Inspiration</li>
          </ul>
        </div>
        <div className="about-page-section">
          <h2 className="about-page-section-title">Our Team</h2>
          <p className="about-page-section-description">
            Glammart was founded by a team of beauty enthusiasts, technologists,
            and industry experts with a shared vision of revolutionizing the
            beauty landscape. Our diverse team brings together a wealth of
            knowledge and expertise to ensure that Glammart delivers the
            best-in-class beauty experience to our users.
          </p>
        </div>
        <div className="about-page-section">
          <h2 className="about-page-section-title">Contact Us</h2>
          <p className="about-page-section-description">
            We would love to hear from you! If you have any questions, feedback,
            or partnership inquiries, please don't hesitate to reach out to us.
            You can contact our customer support team at
            <a href="mailto:support@glammart.com"> support@glammart.com</a> or
            connect with us on social media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
