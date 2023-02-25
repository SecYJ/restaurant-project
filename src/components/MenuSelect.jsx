const data = ["全部", "点心", "饭", "面", "粿条", "米粉", "烧烤", "饮料"];

const MenuSelect = () => {
    return (
        <select className="w-full p-2">
            {data.map((item) => {
                return (
                    <option value={item} key={item}>
                        {item}
                    </option>
                );
            })}
        </select>
    );
};
export default MenuSelect;
