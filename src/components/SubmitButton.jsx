import { useFormStatus } from "react-dom";

export default function SubmitButton({ title }) {

    const { } = useFormStatus();

    return (
        <button
            type="submit"
            className="  bg-amber-600 py-2 px-6 font-bold p-4 rounded-md mt-4">
            {title}

        </button>

    )

}