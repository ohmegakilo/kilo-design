import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 850 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 850, min: 500 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1,
    }
};

export default function Portfolio() {
    return (
        <div >


            <p className='text-center text-white text-[40px] font-sans font-[300] pt-[120px] pb-[30px]'>Personal Portfolio</p>

            <Carousel draggable={true} focusOnSelect={false} responsive={responsive} autoPlay autoPlaySpeed={1500} infinite removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                <div class="pl-2 pr-2" ><img src="https://cdn.discordapp.com/attachments/1066254964265070592/1074515638271361214/White_10.png" class="w-[60%] h-[60%] sm:h-auto sm:w-auto rounded-[15px]" style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }} /></div>
                <div class="pl-2 pr-2" ><img src="https://cdn.discordapp.com/attachments/1066254964265070592/1074515636883042314/Asset_8_2.png" class="w-[60%] h-[60%] sm:h-auto sm:w-auto rounded-[15px]" style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }} /></div>
                <div class="pl-2 pr-2" ><img src="https://cdn.discordapp.com/attachments/1066254964265070592/1074515637403140116/image_666_1.png" class="w-[60%] h-[60%] sm:h-auto sm:w-auto rounded-[15px]" style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }} /></div>
                <div class="pl-2 pr-2" ><img src="https://cdn.discordapp.com/attachments/1066254964265070592/1074515644848029716/White_12.png" class="w-[60%] h-[60%] sm:h-auto sm:w-auto rounded-[15px]" style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }} /></div>
                <div class="pl-2 pr-2" ><img src="https://cdn.discordapp.com/attachments/1066254964265070592/1074515638015512597/image_768.png" class="w-[60%] h-[60%] sm:h-auto sm:w-auto rounded-[15px]" style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }} /></div>
                <div class="pl-2 pr-2" ><img src="https://cdn.discordapp.com/attachments/1066254964265070592/1074515637793206352/image_667_1.png" class="w-[60%] h-[60%] sm:h-auto sm:w-auto rounded-[15px]" style={{ marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center" }} /></div>
            </Carousel>

            <a href="https://www.behance.net/ohmegakilo" class="absolute right-0 h-[55px] w-[150px] text-[15px] sm:h-[60px] sm:w-[180px] sm:text-[20px] mr-[30px] mt-[30px] rounded-[50px] text-center text-gray-500 font-[500] sm:font-[300] border-[1px] border-gray-600 hover:border-gray-500 hover:bg-[rgb(10,10,10)]">
                <p class="pt-[14px] sm:pt-[13px]">View Portfolio</p>
            </a>

        </div>

    );
}
