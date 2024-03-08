import Image from "next/image";
import SkillBubble from "./skillbubble";

interface ProjectProps {
    skills: string[];
    title: string;
    description: string;
    image: string;
    url: string;
}

const imageStyle = {
    borderRadius: '7%',
}

export default function Project(props: ProjectProps){
    return (
        <a href={props.url} target='_blank'>
            <div className="grid md:grid-cols-3 gap-4 border-solid border-2 p-6 border-cyan-900 rounded-lg bg-[#181818] ease-in shadow-lg hover:shadow-cyan-900 hover:bg-[#202020] transition ease-in-out duration-500 cursor: pointer">
                <div className="flex justify-center">
                    <Image src={`${props.image}`} alt={`Home screen screenshot of ${props.title}`} width={200} height={150} className="object-contain rounded-lg"/>
                </div>
                <div className='flex flex-col row-span-1 md:col-span-2 text-center'>
                    <h3 className='font-bold'>{props.title}</h3>
                    <p>{props.description}</p>
                    <div className='flex flex-row flex-wrap justify-center'>
                        {props.skills.map((skill) => (
                            <SkillBubble tool={skill} key={skill}/>
                        ))}
                    </div>
                </div>
            </div>
        </a>
        
    );
}
