import instagram from './img/instagram.png'
import behance from './img/behance.png'
import twitter from './img/twitter.png'
import yt from './img/yt.png'
import git from './img/git.png'
import vid from './img/Comp1.mp4'
import './Hero.css'

export default function Hero() {
    return (
        
        

        <section class="relative h-[550px] sm:h-[750px] flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" src={vid} type="video/mp4" loop="true" autoplay="autoplay" controls muted></video>
    </div>
    <div class=" z-10 grid place-items-center h-[800px]  w-[100%] text-center">
            <iframe  class=" hidden sm:block h-[440px] w-full mt-[50px] " src='https://my.spline.design/untitled-ec69b075a9f0ecd74c57339b8b6a315f/' ></iframe>
            <iframe  class="sm:hidden h-[440px] w-full mt-[50px] " src='https://my.spline.design/mobile-ff17b726a5e0b0f2d277817ce9b9de8f/' ></iframe>
            <h1 class=" mt-[5px] font-serif font-[600] text-[35px] sm:text-[45px] md:text-[55px] text-[rgb(223,223,223)]">Designer Of Sorts</h1>
            <h1 class="mt-[12px] mb-[10px] px-[35px] font-mono text-[12px] sm:text-[14px] md:text-[16px] text-[rgb(68,68,68)] ">Graphic Designer - UI/UX Design - 3D Artist - Frontend & Javascript development - Creative Content</h1>
            <span class=" flex space-x-[17px] mb-[190px] mt-3">
                <a href="https://twitter.com/ohmegakilo" class="px-[13px] py-[13px] rounded-[50px] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)] br-45"><img src={twitter} class="w-[18px] sm:w-[20px]"/></a>
                <a href="https://www.behance.net/ohmegakilo" class="px-[13px] py-[13px] rounded-[50px] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)] br-45"><img src={behance} class="w-[18px] sm:w-[20px]"/></a>
                <a href="https://www.youtube.com/@ohmegakilo" class="px-[13px] py-[13px] rounded-[50px] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)] br-45"><img src={yt} class="w-[18px] sm:w-[20px]"/></a>
                <a href="https://github.com/ohmegakilo" class="px-[13px] py-[13px] rounded-[50px] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)] br-45"><img src={git} class="w-[18px] sm:w-[20px]"/></a>
            </span>
        </div>
    
</section>
        

    );
}
