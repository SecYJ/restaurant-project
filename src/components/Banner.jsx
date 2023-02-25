import bannerImg from "../assets/restaurant plan.png";

const Banner = () => {
    return (
        <section className="">
            {/* <img src={bannerImg} alt="一马风味横幅" classhName="w-full " /> */}
            <img
                src="https://sgp1.digitaloceanspaces.com/tz-mag-my/wp-content/uploads/2020/07/030307072222/81427781_2944268302273805_5697201077930164224_o.jpg"
                alt="一马风味横幅"
                className="h-[calc(100vh-120px)] w-full object-cover"
            />
        </section>
    );
};
export default Banner;

// 点心多样化 - icon name = list
// 新鲜食材 - icon name = vegetable
// 手工制作 - icon name = knife kitchen
// 现煮现卖 - icon name = grill hot
// 专业的厨师 - icon name = user chef

// categories nav <- left side
// product nav card
