import chief1 from "../assets/chef-1.jpg";
import chief2 from "../assets/chef-2.jpg";
import chief3 from "../assets/chef-3.jpg";

const chefs = [
    {
        img: chief1,
        name: "中华建",
        intro: "健哥本身也是一个美食爱好者，拥有超过 10 年经验的他经常都说 “每一道菜都有它的灵魂存在, 厨师的态度决定了一道菜的好与坏”.",
    },
    {
        img: chief2,
        name: "Andrew Walker",
        intro: "Andrew 出生于英国, 在小时候跟着父母到一家位于伦敦的马来西亚餐厅之后就忘不了马来西亚的美食，从那之后他便每天上网搜寻关于马来西亚美食以及制作方法. 甚至来到马来西亚学艺.",
    },
    {
        img: chief3,
        name: "Stephanie 陈雪玲",
        intro: "雪玲姐为我们餐厅的招牌菜椰浆饭和炒果条的主厨，凭借着多年的经验以及如火纯青的厨艺令每个吃过她烹饪菜肴的人都赞不绝口，回头客更是多不胜数",
    },
];

const OurTeam = () => {
    return (
        <section className="mt-20">
            <h2 className="mb-12 text-center text-[3rem]">我们的厨师团队</h2>
            <ul className="grid grid-cols-3 gap-8">
                {chefs.map((chief) => (
                    <li key={chief.name}>
                        <img
                            src={chief.img}
                            alt={chief.name}
                            className="mx-auto h-[250px] w-[250px] rounded-full object-cover"
                        />
                        <h3 className="my-5 text-center">{chief.name}</h3>
                        <p>{chief.intro}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
export default OurTeam;
