interface SkillBubbleProps {
  tool: string;
}

export default function SkillBubble({tool} : {tool:string}) {
  return (
    <div className="">
      <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{tool}</span>
    </div>
  );
}