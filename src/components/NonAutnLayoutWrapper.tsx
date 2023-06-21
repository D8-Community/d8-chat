import React from "react";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

// images
import authImage from "../assets/images/auth-img.png";

interface NonAuthLayoutWrapperProps {
  children: any;
}

const NonAuthLayoutWrapper = (props: NonAuthLayoutWrapperProps) => {
  return (
    <>
      <div className="auth-bg">
        <Container fluid className="p-0">
          <Row className=" g-0">
            <Col xl={3} lg={4}>
              <div className="p-4 pb-0 p-lg-5 pb-lg-0 auth-logo-section">
                <div className="text-white-50">
                  <h3>
                    <Link to="/" className="text-white">
                      {" "}
                        Introducing D8 Chat
                    </Link>
                  </h3>
                  <p className="font-size-14">A modern chat application that combines the power of video calling and messaging, revolutionizing your communication experience.</p>
                  <p className="font-size-18"><i>With D8 Chat, stay connected with friends, family, and colleagues through high-quality video calls, bringing you closer no matter the distance.</i></p>
                  <p className="font-size-16">
                  Engage in seamless messaging with our intuitive interface, allowing you to send instant messages, share media, and express 
                  yourself with a wide range of emojis and stickers. D8 Chat's messaging feature keeps your conversations organized with features 
                  like group chats, labeling, and efficient search options, making it easy to find important information.
                  </p>
                </div>
                <div className="mt-auto">
                  <img src={authImage} alt="auth" className="auth-img" />
                </div>
              </div>
            </Col>

            <Col xl={9} lg={8}>
              <div className="authentication-page-content">
                <div className="d-flex flex-column h-100 px-4 pt-4">
                  {props.children}

                  <Row className="">
                    <Col xl={12}>
                      <div className="text-center text-muted p-4">
                        <p className="mb-0">
                          &copy; {new Date().getFullYear()} Connect, Chat, and Spark Romance: D8 Chat's Video Calls and Messaging Redefined
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NonAuthLayoutWrapper;
