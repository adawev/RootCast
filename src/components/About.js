function About(){
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
                        <img src="https://www.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_343352851.htm#fromView=keyword&page=25&position=30&uuid=5b800798-3254-48dd-96e7-a9fa92f16a34&query=Guy+avatar"
                             alt="John Smith"/>
                    </div>
                    <div className="member-name">Lutfiyev Ilyos</div>
                    <div className="member-role">Backend Developer</div>
                </div>
                <div className="team-member">
                    <div className="member-avatar">
                        <img src="https://www.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_343352851.htm#fromView=keyword&page=25&position=30&uuid=5b800798-3254-48dd-96e7-a9fa92f16a34&query=Guy+avatar"
                             alt="Sarah Johnson"/>
                    </div>
                    <div className="member-name">Tursunboyev Odiljon</div>
                    <div className="member-role">Backend Developer</div>
                </div>
                <div className="team-member">
                    <div className="member-avatar">
                        <img src="https://www.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_343352851.htm#fromView=keyword&page=25&position=30&uuid=5b800798-3254-48dd-96e7-a9fa92f16a34&query=Guy+avatar"
                             alt="Michael Chen"/>
                    </div>
                    <div className="member-name">Adashev Diyor</div>
                    <div className="member-role">Frontend Developer</div>
                </div>
                <div className="team-member">
                    <div className="member-avatar">
                        <img src="https://www.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_343352851.htm#fromView=keyword&page=25&position=30&uuid=5b800798-3254-48dd-96e7-a9fa92f16a34&query=Guy+avatar"
                             alt="Emily Davis"/>
                    </div>
                    <div className="member-name">Kamiljonov Shoxrux</div>
                    <div className="member-role">Backend Developer</div>
                </div>
                <div className="team-member">
                    <div className="member-avatar">
                        <img src="https://www.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_343352851.htm#fromView=keyword&page=25&position=30&uuid=5b800798-3254-48dd-96e7-a9fa92f16a34&query=Guy+avatar"
                             alt="Emily Davis"/>
                    </div>
                    <div className="member-name">Isayev Alibek</div>
                    <div className="member-role">UI Designer</div>
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