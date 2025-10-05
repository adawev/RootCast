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
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
                             alt="John Smith"/>
                    </div>
                    <div className="member-name">John Smith</div>
                    <div className="member-role">Founder & CEO</div>
                </div>
                <div className="team-member">
                    <div className="member-avatar">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
                             alt="Sarah Johnson"/>
                    </div>
                    <div className="member-name">Sarah Johnson</div>
                    <div className="member-role">Lead Developer</div>
                </div>
                <div className="team-member">
                    <div className="member-avatar">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                             alt="Michael Chen"/>
                    </div>
                    <div className="member-name">Dr. Michael Chen</div>
                    <div className="member-role">Chief Meteorologist</div>
                </div>
                <div className="team-member">
                    <div className="member-avatar">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop"
                             alt="Emily Davis"/>
                    </div>
                    <div className="member-name">Emily Davis</div>
                    <div className="member-role">Head of Design</div>
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