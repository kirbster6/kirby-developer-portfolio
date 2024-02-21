import Image from "next/image";
import Project from "@/components/project";

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
      <a href="Kirby_Ammari_Resume_Portfolio.pdf" download="kirby_ammari_resume" target='_blank'>
        <button className="bg-black dark:bg-white hover:bg-gray-400 text-white dark:text-black font-bold py-1.5 px-3 rounded inline-flex items-center mb-5">
          <svg className="fill-current w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <p className='text-sm'>Resume</p>
        </button>
      </a>
      <br />
      <div>Contact</div>
      <br />
    </div>
    
  );
}
