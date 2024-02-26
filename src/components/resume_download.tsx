export default function ResumeDownload() {
  return (
    <a href="Kirby_Ammari_Resume_Portfolio.pdf" download="kirby_ammari_resume" target='_blank'>
      <button className="bg-black dark:bg-white hover:bg-gray-400 text-white dark:text-black font-bold py-1.5 px-3 rounded inline-flex items-center mb-5">
        <svg className="fill-current w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <p className='text-sm'>Resume</p>
      </button>
    </a>  
  );
}


