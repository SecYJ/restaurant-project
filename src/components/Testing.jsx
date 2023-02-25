import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const Testing = () => {
    // const [value, setValue] = useDebounce(3000);
    const [value, setValue] = useState("");
    const debouncingValue = useDebounce(value, 3000);

    // useEffect(() => {
    //     if (debouncingValue)
    // }, [value])

    return (
        <>
            <input
                type="text"
                placeholder="Enter some text"
                className="my-8 w-full border border-black p-8 text-3xl outline-none"
                value={debouncingValue}
                onChange={(e) => setValue(e.target.value)}
            />
            <h1>Output value: {value}</h1>
        </>
    );
};
export default Testing;
