import features1 from "../assets/features-1.jpg";
import features2 from "../assets//features-2.avif";
import { FcTodoList } from "react-icons/fc";
import { FaCarrot, FaHandsWash } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { SiCodechef } from "react-icons/si";
import Line from "./Line";
import { heading } from "../helpers/ui";
// import img from "../assets/nbs.jpg";

// const features = [
//     {
//         img: features1,
//         title: "多元文化风味",
//         text: "我们的餐厅以马来西亚各群族的美食菜肴为主，多种国民美食让您选择, 保证让您回味无穷.",
//     },
//     {
//         img: features2,
//         title: "新鲜食材",
//         text: "在 “店名“ 我们重视食材的品质和新鲜度，每项食材都经过严格挑选和筛选的，保证最高品质. 我们相信，一道好吃的美食都是从新鲜食材开始。",
//     },
// ];

const features = [
    {
        title: "多样化",
        text: "多种点心以及包括各种蒸、煮、炸、烤等烹饪方法的小食以满足顾客的不同口味需求。",
        icon: <BsCardChecklist size="3rem" />,
    },
    {
        title: "新鲜食材",
        text: "每项食材都经过严格挑选和筛选的，保证最高品质. 我们相信，一道好吃的点心都是从新鲜的食材开始。",
        icon: <FaCarrot size="3rem" />,
    },
    {
        title: "手工制作",
        text: "与市面上看到的点心不同，我们所有的点心和包点都是属于纯手工制作。",
        icon: <FaHandsWash size="3rem" />,
    },
    {
        title: "现煮现卖",
        text: "为了让顾客可以品尝到最好的鲜度和口感, 本店所有产品都是现煮现卖。",
        icon: <MdOutlineOutdoorGrill size="3rem" />,
    },
    {
        title: "专业的厨师",
        icon: <SiCodechef size="3rem" />,
        text: "我们的点心厨师都是有经过严格考核的多年的经验以确保为您提供最好的点心。",
    },
    {
        // title: "创"
    },
];

const Features = () => {
    return (
        <section className="container py-20">
            <h2 className={heading}>我们的特点</h2>
            <Line />
            <ul className="mx-auto mt-16 grid grid-cols-3 gap-8">
                {features.map((feature, index) => {
                    return (
                        <li
                            className="border border-gray-300 py-6 px-10"
                            key={index}
                        >
                            <div className="mb-8 flex items-center justify-end">
                                <span className="mr-auto text-accent">
                                    {feature.icon}
                                </span>
                                <p className="mr-auto">{feature.title}</p>
                            </div>
                            <p>{feature.text}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );

    // return (
    //     <section>
    //         {features.map((feature, index) => {
    //             const { title, text, img } = feature;
    //             const even = index % 2 === 1 ? "col-start-2" : "";

    //             return (
    //                 <figure
    //                     className="grid grid-flow-col-dense grid-cols-2"
    //                     key={title}
    //                 >
    //                     <img
    //                         src={img}
    //                         alt={title}
    //                         className={`${even} h-full max-h-[500px] w-full object-cover `}
    //                     />
    //                     <div className="grid place-content-center p-6">
    //                         <h2 className="mb-6 text-center text-[3rem] text-primary-dark">
    //                             {title}
    //                         </h2>
    //                         <p>{text}</p>
    //                     </div>
    //                 </figure>
    //             );
    //         })}
    //     </section>
    // );
};
export default Features;
