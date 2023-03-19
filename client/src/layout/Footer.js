import React from "react";
import {FaGithubAlt} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">What is Microservice ?</h5>

                        <p>
                            A microservice architecture – a variant of the service-oriented architecture structural style –
                            is an architectural pattern that arranges an application as
                            a collection of loosely coupled, fine-grained services, communicating through lightweight protocols.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Documentations</h5>

                        <ul className="list-unstyled text-bg-light  mb-0">
                            <li>
                                <a href="https://en.wikipedia.org/wiki/Microservices" className="text-dark">Microservice</a>
                            </li>
                            <li>
                                <a href="https://www.sumologic.com/glossary/crud/#:~:text=CRUD%20is%20an%20acronym%20that,%2C%20read%2C%20update%20and%20delete." className="text-dark">Crud Operation</a>
                            </li>
                            <li>
                                <a href="https://devcenter.heroku.com/categories/reference" className="text-dark">Heroku</a>
                            </li>
                            <li>
                                <a href="https://docs.docker.com/reference/" className="text-dark">Docker</a>
                            </li>
                            <li>
                                <a href="https://minikube.sigs.k8s.io/docs/start/" className="text-dark">Minikube</a>
                            </li>
                            <li>
                                <a href="https://kubernetes.io/docs/home/" className="text-dark">Kubernetes</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://spring.io/guides/tutorials/rest/" className="text-dark">Springboot</a>
                            </li>
                            <li>
                                <a href="https://docs.djangoproject.com/en/4.1/" className="text-dark">Django</a>
                            </li>
                            <li>
                                <a href="https://learn.microsoft.com/en-us/dotnet/" className="text-dark">Dotnet</a>
                            </li>
                            <li>
                                <a href="https://docs.github.com/en" className="text-dark">Github</a>
                            </li>
                            <li>
                                <a href="https://www.postgresql.org/docs/" className="text-dark">PostgreSQL</a>
                            </li>
                            <li>
                                <a href="https://legacy.reactjs.org/docs/getting-started.html" className="text-dark">React</a>
                            </li>
                            <li>
                                <a href="https://www.jetbrains.com/help/" className="text-dark">Jetbrains</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2022 Your Website Name
                <a className={"ms-3"} href="https://github.com/e1800930/MicroService_Webservices">
                    <FaGithubAlt/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
