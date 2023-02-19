import './Card.css'


export default function Card() {
    return (

        <div className='flex flex-col justify-center items-center mt-[200px] text-center'>
        <div className='h-[350px] w-[300px] sm:h-[500px] sm:w-[440px] border border-[rgb(31,30,30)] bg-[rgb(19,19,19)] bg-opacity-[70%] rounded-[25px] sm:rounded-[40px]'>

        <p className='text-white text-[23px] sm:text-[28px] mt-[80px] sm:mt-[110px]'>Trying to inquire me?</p>
        <p className='px-[25px] sm:px-[75px] text-[14px] sm:text-[16px] text-[rgb(105,105,105)] font-[300] mt-[15px] sm:mt-[40px]'>Send me a email anytime for project inquires, work, questions, etc. I will reply as soon as possible.</p>



        <div class="sm:mt-[30px]">
        <div className='fusebutton'>ohmegakilo@proton.me</div>
        </div>
        </div>

        

        </div>

    );
}
