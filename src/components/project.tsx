import Image from "next/image";
import SkillBubble from "./skillbubble";

interface ProjectProps {
    skills: string[];
    title: string;
    description: string;
    image: string;
  }
// border-4 border-red-500 
export default function Project(props: ProjectProps){
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <Image src={`${props.image}`} alt={`Home screen screenshot of ${props.title}`} width={230} height={230} className="object-contain"/>
            <div className='flex flex-col'>
                <h3 className='font-bold'>{props.title}</h3>
                <p>{props.description}</p>
                <div className='flex flex-row flex-wrap'>
                    {props.skills.map((skill) => (
                        <SkillBubble tool={skill} key={skill}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
