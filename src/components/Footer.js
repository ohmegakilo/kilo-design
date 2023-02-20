import instagram from './img/instagram.png'
import kilo from './img/kilo.png'
import twitter from './img/twitter.png'
import behance from './img/behance.png'
import yt from './img/yt.png'
import git from './img/git.png'


export default function Footer() {
    return (
        <nav class="mt-[100px] flex justify-between items-center px-6 py-5 ">
            <div>
                <a href='#'><img src={kilo}
                        class="w-[55px] sm:w-[65px]"/></a>
            </div>

            <div class=" space-x-[10px] ml-3">
                <a href="https://twitter.com/ohmegakilo" class="py-2 px-2 sm:py-3 sm:px-3 rounded-[30px] text-sm text-center font-[600] border-[1px] inline-flex items-center border-[rgb(34,34,34)] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)]">
                    <img src={twitter}
                        class=' w-[13px]'/>
                </a>
                <a href="https://www.behance.net/ohmegakilo" class="py-2 px-2 sm:py-3 sm:px-3 rounded-[30px]  text-center font-[600] border-[1px] inline-flex items-center border-[rgb(34,34,34)] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)] ">
                    <img src={behance}
                        class=' w-[15px]'/>
                </a>
                <a href="https://www.youtube.com/@ohmegakilo" class="py-2 px-2 sm:py-3 sm:px-3 rounded-[30px]  text-center font-[600] border-[1px] inline-flex items-center border-[rgb(34,34,34)] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)] ">
                    <img src={yt}
                        class=' w-[15px]'/>
                </a>
                <a href="https://github.com/ohmegakilo" class="py-2 px-2 sm:py-3 sm:px-3 rounded-[30px]  text-center font-[600] border-[1px] inline-flex items-center border-[rgb(34,34,34)] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)] ">
                    <img src={git}
                        class=' w-[15px]'/>
                </a>
            </div>

        </nav>
    );
}

