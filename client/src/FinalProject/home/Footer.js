import React from "react";
import {Link}from "react-router-dom"

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
    return (
        <footer id="footer">
            <ul className="icons">
                <li><a href="https://twitter.com/" className="icon fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/" className="icon fa-facebook"><span class="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/" className="icon fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/feed/" className="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
                <li><a href="https://mail.google.com/" className="icon fa-envelope"><span class="label">Email</span></a></li>
            </ul>
            <p class="copyright">&copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a href="https://unsplash.com">Unsplash</a>.</p>
        </footer>
    );
  }
}

export default Footer;
