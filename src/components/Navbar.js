import open from './img/open.png'
import kilo from './img/kilo.png'
import home from './img/home.png'
import portfolio from './img/portfolio.png'
import message from './img/message.png'


export default function Navbar() {
    return (
        <nav class="z-20 sticky top-0 flex justify-between items-center px-6 py-5 bg-black bg-opacity-[80%] filter backdrop-filter backdrop-blur-md">
            <div>
                <a href='#'><img src={kilo}
                        class="w-[55px] sm:w-[65px]"/></a>
            </div>
            <div class="space-x-1 hidden sm:block ml-5">
                <a href="#" class="text-sm text-gray-400 font-[200] hover:font-[400] hover:text-white  hover:border border-gray-600  px-5 py-4 rounded-[20px] hover:shadow">Home</a>
                <a href="https://www.behance.net/ohmegakilo" class="text-sm text-gray-400 font-[200] hover:font-[400] hover:text-white  hover:border border-gray-600 px-5 py-4 rounded-[20px] hover:shadow">Portfolio</a>
                <a href="mailto:ohmegakilo@proton.me" class="text-sm text-gray-400 font-[200] hover:font-[400] hover:text-white  hover:border border-gray-600  px-5 py-4 rounded-[20px] hover:shadow">Contact</a>
            </div>

            <div class="sm:hidden space-x-[13px] ml-3">
                <a  href="#"  class="py-3 px-3 rounded-[30px] text-sm text-center font-[600] border-[1px] inline-flex items-center border-[rgb(34,34,34)] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)]">
                    <img src={home}
                        class=' w-[15px]'/>
                </a>
                <a  href="https://www.behance.net/ohmegakilo" class="py-3 px-3 rounded-[30px] text-sm text-center font-[600] border-[1px] inline-flex items-center border-[rgb(34,34,34)] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)]">
                    <img src={portfolio}
                        class=' w-[15px]'/>
                </a>
                <a  href="mailto:ohmegakilo@proton.me" class="py-3 px-3 rounded-[30px]  text-center font-[600] border-[1px] inline-flex items-center border-[rgb(34,34,34)] bg-gradient-to-t from-[rgb(16,14,25)] to-[rgb(34,32,47)] ">
                    <img href="mailto:ohmegakilo@proton.me" src={message}
                        class=' w-[15px]'/>
                </a>
            </div>

            <button class="py-3 px-4 sm:px-5 rounded-[30px] hover:bg-[rgb(14,46,9)] text-[13px]  text-center text-gray-100 hover:text-white font-[600] border-[1px] border-gray-600 hover:border-green-300 hover:shadow-md transform active:scale-75 transition-transform focus:border-1.4 focus:border-green-300 duration-700 focus:outline-none inline-flex items-center ">
                <span class=''>Join</span><img src={open}
                    class=' w-[12px] sm:w-[15px] ml-1'/>
            </button>
        </nav>
    );
}
