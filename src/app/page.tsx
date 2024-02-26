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
      <div>Images</div>
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
      <div>Top 3 Projects</div>
        <Project />
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
