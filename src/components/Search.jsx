import { useId } from "react";
import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
    const searchRef = useRef();
    const id = useId();

    console.log(id);

    useEffect(() => {
        searchRef.current.focus();
    }, []);

    const submit = (e) => {
        e.preventDefault();
    };

    return (
        <form
            onSubmit={submit}
            className="mb-4 flex items-center rounded-md border border-black p-3"
        >
            <input
                type="text"
                className="mx-auto w-full rounded-md text-base outline-none"
                placeholder="搜寻"
                ref={searchRef}
                id={id}
            />
            <label htmlFor={id}>
                <BsSearch />
            </label>
        </form>
    );
};
export default Search;
