import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            My name is Gaurangi Mane. After moving to Netherlands in 2018, I switched from testing to front end
            development through Codeisseur as I am really passionate about front end world. I landed my first job
            as FE developer at NEXTdriver, a startup based in Delft. I have 2.6 years of experience working with
            React and Flutter framework. I was responsible for development and maintainance of both web app and mobile app.
          </p>

          <p>
            As a developer, I have always been passionate about creating elegant and effective solutions to
            complex problems. I have a strong foundation in software development, with a focus on web
            technologies such as HTML, CSS, and JavaScript. I am always looking for ways to optimize performance, improve user
            experience, and ensure the highest level of code quality.
          </p>
          <p>
            I live in Purmerend with my husband and our one year old boy. I love travelling and watercolor painting.
            I am a very creative person by nature and Front End developement offers me the perfect opportunity to
            bring my creativity in reality. I am always eager to learn and explore new technologies, and I am constantly seeking out opportunities to improve
            my skills and knowledge.</p>
        </div>
        <div className="about-img">
          <Image src='/images/profile.jpg' className="profile-img" width={300} height={500} />
        </div>
      </div>
    </div>
  )
}

export default About;