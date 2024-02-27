import Image from "next/image";
import Project from "@/components/project";
import ResumeDownload from "@/components/resume_download";

export default function Home() {
  return (
    <div>
      <div>
        <h2 className="font-bold my-4">hey, I'm Kirby 👋</h2>
        <p>
          I'm a software developer finishing my final quarter of school at UC
          Irvine. I'm an ex-SDE Intern at Amazon where I worked as a full-stack
          developer. I've dedicated a large part of my college engaging with the
          student body as Co-President of ICSSC and a Logistics Organizer for
          Hack@UCI.
        </p>
      </div>
      <br />
      <h2>Images</h2>
      <br />
      <div>
        <p>
          I have delved into many areas of software development, from
          full-stack, to mobile, to game design, to embedded software, and my
          interests are always growing. I'm currently exploring CUDA, AR, and
          growing my full-stack skills.
        </p>
      </div>
      <br />
      <div className="flex flex-col gap-4">
        <h2 className="font-bold">Projects</h2>
        <Project skills={['Tomcat', 'Java', 'MySQL', 'JDBC', 'HTTPS', 'RESTful APIs', 'Javascript', 'Apache', 'Git', 'AWS', 'jMeter', 'Android', 'reCAPTCHA']} title={'Fabflix'} description={'An ecommerce website to browse movies, stars, and genres and purchase films.'} image={'/Fabflix_temp.png'}/>
        <Project skills={['React.js', 'SCSS', 'Liveblocks', 'Node.js', 'Github']} title={'TypeJam'} description={'A typing speed competition with live collaboration.'} image={'/typejam_screenshot.png'}/>
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
