function About() {
    return <div className={'aboutSectionWrapper'}>

        <section className="heros">
            <h1>About RootCast</h1>
            <p>We're on a mission to make weather forecasting simple, accurate, and accessible to everyone around the
                world.</p>
        </section>
        <section className="team-section">
            <h2 className="team-title">Meet Our Team</h2>
            <div className="team-grid">
                <div className="team-member">
                    <div className="member-avatar">
                        <img src="https://avatars.githubusercontent.com/u/71268887?v=4" alt="Adashev Diyor"/>
                    </div>
                    <div className="member-name">Adashev Diyor</div>
                    <div className="member-role">PM & Lead Frontend Developer</div>

                    <div className="member-socials">
                        <a href="https://github.com/adawev" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/adawev" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://t.me/adawev" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-telegram"></i>
                        </a>
                    </div>
                </div>
                <div className="team-member">
                    <div className="member-avatar">
                        <img
                            src="data:image/png;base64,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"
                            alt="Tursunboyev Odiljon"/>
                    </div>
                    <div className="member-name">Tursunboyev Odiljon</div>
                    <div className="member-role">Backend Developer</div>

                    <div className="member-socials">
                        <a href="https://github.com/odiljontursunboyev86" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://t.me/Odiljon_Olimovic" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-telegram"></i>
                        </a>
                    </div>
                </div>
                <div className="team-member">
                    <div className="member-avatar">
                        <img src="https://avatars.githubusercontent.com/u/189086035?v=4" alt="Adashev Diyor"/>
                    </div>
                    <div className="member-name">Lutfiyev Ilyos</div>
                    <div className="member-role">Backend Developer</div>

                    <div className="member-socials">
                        <a href="https://github.com/Ilyos056" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ilyos-lutfiyev-394741350?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6hLfFbUVQ7a%2F3fkM%2FEPIQw%3D%3D"
                           target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://t.me/Ilhomjonovich_723" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-telegram"></i>
                        </a>
                    </div>
                </div>

                <div className="team-member">
                    <div className="member-avatar">
                        <img
                            src="data:image/png;base64,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"
                            alt="Tursunboyev Odiljon"/>
                    </div>
                    <div className="member-name">Kamiljonov Shoxrux</div>
                    <div className="member-role">Backend Developer</div>

                    <div className="member-socials">
                        <a href="https://github.com/KomiljonovShoxrux" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://t.me/Shoxrux_komiljonov" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-telegram"></i>
                        </a>
                    </div>
                </div>
                <div className="team-member">
                    <div className="member-avatar">
                        <img
                            src="https://avatars.githubusercontent.com/u/170262141?v=4" alt="Isayev Alibek"/>
                    </div>
                    <div className="member-name">Isayev Alibek/div>
                        <div className="member-role">UI/UX Designer</div>

                        <div className="member-socials">
                            <a href="https://github.com/0-ATOM-0" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://t.me/Al_Alibek" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-telegram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mission-section">
            <div>
                <div className="mission-card">
                    <h3>Our Mission</h3>
                    <p>
                        To provide accurate, real-time weather information in the most accessible and user-friendly way
                        possible. We strive to help people make informed decisions about their daily activities and stay
                        safe in all weather conditions.
                    </p>
                </div>

                <div className="mission-card">
                    <h3>Our Values</h3>
                    <p>
                        <strong>Accuracy:</strong> We prioritize precision in every forecast we deliver.<br/><br/>
                        <strong>Simplicity:</strong> Complex data made simple and beautiful.<br/><br/>
                        <strong>Accessibility:</strong> Weather information for everyone, everywhere.<br/><br/>
                        <strong>Innovation:</strong> Constantly improving our technology and user experience.
                    </p>
                </div>
            </div>
        </section>
    </div>
}

export default About;