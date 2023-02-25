import { useEffect, useState } from "react";

const useDebounce = (value, delay = 1000) => {
    const [input, setInput] = useState(value);

    useEffect(() => {
        let timer;

        timer = setTimeout(() => {
            setInput(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    // const updateFn = () => {
    //     return (e) => {
    //         setInput(e.target.value);
    //     }
    // };

    return [value];
};

export default useDebounce;
