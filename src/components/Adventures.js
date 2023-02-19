import orbit from './img/orbit.png'
import bruh from './img/bruh.png'
import mm from './img/mm.png'


export default function Adventures() {
    return (
        <div className="text-white flex flex-col items-center justify-center text-center">
            <p className="pt-[110px] text-[40px] font-sans font-[300]">Current Adventures</p>
            <p className="pr-[20px] pl-[20px] font-[200] text-[rgb(86,86,86)] text-[16px] sm:text-[22px]">I am currently building a couple of projects with friends for fun</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-7 sm:gap-9 pr-2 pl-2 sm:pl-5 sm:pr-5 mt-[30px]">
                <a>
                    <div class="flex justify-center border-[1px] border-[rgb(34,34,34)] bg-[rgb(12,11,11)]  rounded-[30px] sm:rounded-[50px] p-6 w-[110px] h-[110px] sm:w-[150px] sm:h-[150px]"><img src={bruh} class="sm:py-3"/></div>
                    <p class="text-center mt-[8px] text-[14px] font-[200] sm:text-[16px] ]">Bruh Capital</p>
                </a>
                <a>
                    <div class="flex justify-center  border-[1px] border-[rgb(34,34,34)] bg-[rgb(12,11,11)] rounded-[30px] sm:rounded-[50px] p-6 w-[110px] h-[110px] sm:w-[150px] sm:h-[150px]"><img src={orbit} class="sm:py-3 mr-2"/></div>
                    <p class="text-center mt-[8px] text-[14px] font-[200] sm:text-[16px] ]">Orbit</p>
                </a>
                <a>
                    <div class="flex justify-center  border-[1px] border-[rgb(34,34,34)] bg-[rgb(12,11,11)]  rounded-[30px] sm:rounded-[50px] p-6 w-[110px] h-[110px] sm:w-[150px] sm:h-[150px]"><img src={mm} class="py-1 sm:py-3"/></div>
                    <p class="text-center mt-[8px] text-[14px] font-[200] sm:text-[16px] ]">Soon™</p>
                </a>
                <a>
                    <div class="flex justify-center  border-[1px] border-[rgb(34,34,34)] bg-[rgb(12,11,11)]  rounded-[30px] sm:rounded-[50px] p-6 w-[110px] h-[110px] sm:w-[150px] sm:h-[150px]"><img src={mm} class="py-1 sm:py-3"/></div>
                    <p class="text-center mt-[8px] text-[14px] font-[200] sm:text-[16px] ]">Soon™</p>
                </a>

            </div>

        </div>


    );
}
