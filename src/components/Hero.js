import instagram from './img/instagram.png'
import behance from './img/behance.png'
import twitter from './img/twitter.png'
import vid from './img/Comp1.mp4'
import './Hero.css'

export default function Hero() {
    return (
        
        

        <section class="relative h-[750px] flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" src={vid} type="video/mp4" autoPlay={true} muted loop></video>
    </div>
    <div class=" z-10 grid place-items-center h-[800px]  w-[100%] text-center">
            <iframe class="h-[440px] w-full mt-[50px]" src='https://my.spline.design/untitled-ec69b075a9f0ecd74c57339b8b6a315f/' frameborder='0'></iframe>
            <h1 class=" mt-[15px] font-serif font-[600] text-[35px] sm:text-[45px] md:text-[55px] text-[rgb(223,223,223)]">Designer Of Sorts</h1>
            <h1 class="mt-[15px] mb-[10px] px-[35px] font-mono text-[12px] sm:text-[14px] md:text-[16px] text-[rgb(68,68,68)] ">Graphic Designer - UI/UX Design - 3D Artist - Frontend & Javascript development - Creative Content</h1>
            <span class=" flex space-x-[20px] mb-[190px] mt-5">
                <button class="px-[15px] py-[15px] rounded-[50px] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)] br-45"><img src={instagram} class="w-[18px] sm:w-[20px]"/></button>
                <button class="px-[15px] py-[15px] rounded-[50px] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)] br-45"><img src={behance} class="w-[18px] sm:w-[20px]"/></button>
                <button class="px-[15px] py-[15px] rounded-[50px] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)] br-45"><img src={twitter} class="w-[18px] sm:w-[20px]"/></button>
            </span>
        </div>
    
</section>
        

    );
}
