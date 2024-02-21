import Image from "next/image";
import SkillBubble from "./skillbubble";

// border-4 border-red-500
export default function Project() {
    return (
        <div className="flex flex-row gap-4">
            <Image src='/Fabflix_temp.png' alt='Home screen screenshot of Fabflix' width={150} height={150}></Image>
            <div className='flex flex-col'>
                <h3 className='font-bold'>Fabflix</h3>
                <p>full-stack ecommerce website to view and purchase movies.</p>
                <div className='flex flex-row flex-wrap'>
                    <SkillBubble tool='Java' />
                    <SkillBubble tool='Javascript' />
                    <SkillBubble tool='HTML' />
                    <SkillBubble tool='CSS' />
                    <SkillBubble tool='AWS' />
                    <SkillBubble tool='Apache' />
                    <SkillBubble tool='Android' />
                    <SkillBubble tool='JDBC' />
                    <SkillBubble tool='MySQL' />
                </div>
            </div>
        </div>
    );
}
