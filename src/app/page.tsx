import Image from "next/image";
import {BIO_1, BIO_2, TYPEJAM_DESCRIPTION, FABFLIX_DESCRIPTION} from "@/constants"
import Project from "@/components/project";
import ResumeDownload from "@/components/resume_download";

export default function Home() {
  return (
    <div>
      <div>
        <h2 className="font-bold my-4">Hey, I'm Kirby 🐻‍❄️</h2>
        <p>
          {BIO_1}
        </p>
      </div>
      <br />
      <h2>Images</h2>
      <br />
      <div>
        <p>
          {BIO_2}
        </p>
      </div>
      <br />
      <div className="flex flex-col gap-10">
        <h2 className="font-bold">Projects</h2>
        <Project skills={['React.js', 'SCSS', 'Liveblocks API', 'Node.js', 'Github']} title={'TypeJam'} description={TYPEJAM_DESCRIPTION} image={'/typejam_portfolio_screenshot_resized.png'} url='https://github.com/kirbster6/typejam'/>
        <Project skills={['Tomcat', 'Java', 'MySQL', 'JDBC', 'HTTPS', 'RESTful APIs', 'Javascript', 'Apache', 'Git', 'AWS', 'jMeter', 'Android', 'reCAPTCHA']} title={'Fabflix'} description={FABFLIX_DESCRIPTION} image={'/Fabflix_temp.png'} url='https://github.com/kirbster6/FabflixMovieDBApp'/>
      </div>
      <br />
      <div>Experience</div>
      <br />
      <div>Skills</div>
      <br />
      <ResumeDownload />
      <br />
      <div>Contact</div>
      <br />
    </div>
    
  );
}
