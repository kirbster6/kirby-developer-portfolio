import Image from "next/image";

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
      <br />
      <div>Experience</div>
      <br />
      <div>Skills</div>
      <br />
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1.5 px-3 rounded inline-flex items-center">
        <svg className="fill-current w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <p className='text-sm'>Download Resume</p>
      </button>
      <br />
      <div>Contact</div>
      <br />
    </div>
  );
}
