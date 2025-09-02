import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function FormInput({ id, labelText, inputType, placeholder, value, onChangeFn, isRequired = true, icon, error }) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = inputType === "password";
    const type = isPassword && showPassword ? "text" : inputType;

    return (
        <div className="flex flex-col w-full text-gray-300">
            <label htmlFor={id} className="flex items-center gap-2 mb-1 text-sm">
                {icon}
                {labelText}
            </label>
            <div className="relative">
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChangeFn}
                    required={isRequired}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-md 
                               focus:ring-2 focus:ring-emerald-400 focus:outline-none pr-10"
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}

export default FormInput;
