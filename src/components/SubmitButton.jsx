import { useFormStatus } from "react-dom";

export default function SubmitButton({ title }) {

    const { } = useFormStatus();

    return (
        <button
            type="submit"
            className=" bg-[#BE5B50] text-white py-2 px-6 font-bold p-4 rounded-md mt-4 hover:scale-110">
            {title}

        </button>

    )

}