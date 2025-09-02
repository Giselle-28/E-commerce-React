import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { Lock, User, Mail, Calendar } from "lucide-react";

function Register() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        contrasenia: "",
        confirmarContrasenia: "",
        fechaNacimiento: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const fields = [
        { id: "nombre", label: "Nombre", type: "text", icon: <User size={18} /> },
        { id: "apellido", label: "Apellido", type: "text", icon: <User size={18} /> },
        { id: "email", label: "Email", type: "email", icon: <Mail size={18} /> },
        { id: "contrasenia", label: "Contraseña", type: "password", icon: <Lock size={18} /> },
        { id: "confirmarContrasenia", label: "Confirmar Contraseña", type: "password", icon: <Lock size={18} /> },
        { id: "fechaNacimiento", label: "Fecha de Nacimiento", type: "date", icon: <Calendar size={18} /> },
    ];

    function validateForm() {
        const newErrors = {};

        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
        if (!formData.apellido.trim()) newErrors.apellido = "El apellido es obligatorio";

        if (!formData.email.includes("@")) newErrors.email = "Email inválido";

        if (formData.contrasenia.length < 6) newErrors.contrasenia = "Mínimo 6 caracteres";
        if (formData.contrasenia !== formData.confirmarContrasenia)
            newErrors.confirmarContrasenia = "Las contraseñas no coinciden";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function registerUser(e) {
        e.preventDefault();

        if (!validateForm()) return;

        console.log("Datos enviados:", formData);

        // Aquí harías el fetch al backend
        // fetch("/api/register", { method: "POST", body: JSON.stringify(formData) })

        alert("Usuario registrado con éxito 🎉");
        navigate("/");
    }

    return (
        <div className="flex justify-center bg-gray-700 min-h-screen items-center">
            <div className="bg-gray-900 rounded-2xl max-w-lg w-full p-8 shadow-lg">
                <h1 className="text-2xl font-bold text-emerald-400 text-center mb-6">Registrarse</h1>

                <form onSubmit={registerUser} className="space-y-4">
                    {fields.map((f) => (
                        <FormInput
                            key={f.id}
                            id={f.id}
                            icon={f.icon}
                            labelText={f.label}
                            inputType={f.type}
                            placeholder={f.label}
                            value={formData[f.id]}
                            onChangeFn={(e) => setFormData({ ...formData, [f.id]: e.target.value })}
                            error={errors[f.id]}
                        />
                    ))}

                    <div className="flex justify-between pt-4">
                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md w-1/3"
                        >
                            Volver
                        </button>
                        <button
                            type="submit"
                            className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 rounded-md w-1/3"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
