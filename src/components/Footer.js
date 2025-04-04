import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/portfolio.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import githubIcon from '../assets/img/logo.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/%E0%B8%90%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%A1%E0%B8%B2-%E0%B9%81%E0%B8%94%E0%B8%87%E0%B8%A1%E0%B8%B5-141386342/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/thitima.dangmee.2024"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/ccccccccccream._/"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/muffinyyss"><img src={githubIcon} alt="" /></a>
            </div>
            <p>Copyright 2025. Thitima Dengmee</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
