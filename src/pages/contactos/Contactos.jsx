import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../../components/ui/use-toast';
import emailjs from '@emailjs/browser';
import { brandsData } from '/src/data/brandsData.js';

export default function Contactos() {
    const { toast } = useToast();
    const brands = Object.values(brandsData);

    const [form, setForm] = useState({
        nombre: '',
        correo: '',
        agencia: '',
        telefono: '',
        duda: '',
        compania: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

        const { name, value } = e.target;

        if (name === 'telefono') {
            const onlyNums = value.replace(/\D/g, '');
            setForm({ ...form, [name]: onlyNums });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_nnmi3fn',
                'template_4c63l58',
                form,
                'YHIeqCykoTz5ANg9R'
            )
            .then(() => {
                toast({
                    title: '¡Mensaje enviado!',
                    description: 'Nos pondremos en contacto pronto',
                    variant: 'success',
                });

                setForm({
                    nombre: '',
                    correo: '',
                    agencia: '',
                    telefono: '',
                    duda: '',
                    compania: '',
                    mensaje: '',
                });
            })
            .catch((error) => {
                console.error('Error al enviar el correo', error);
                toast({
                    title: 'Error al enviar',
                    description: 'Inténtelo de nuevo más tarde.',
                    variant: 'destructive',
                });
            })
    };

    return (
        <div className="min-h-screen bg-white pt-36 pb-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-12 text-[#002D5F] text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Contactos
                </motion.h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { label: 'Nombre*', name: 'nombre', required: true },
                        { label: 'Correo Electrónico*', name: 'correo', type: 'email', required: true },
                        { label: 'Nombre de la Agencia', name: 'agencia' },
                        { label: 'Teléfono de contacto', name: 'telefono', type:'tel', required: true },
                    ].map(({ label, name, type = 'text', required }) => (
                        <motion.label
                            key={name}
                            className="flex flex-col gap-2 text-sm text-[#002D5F]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {label}
                            <input
                                type={type}
                                name={name}
                                value={form[name]}
                                onChange={handleChange}
                                required={required}
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099D8]"
                            />
                        </motion.label>
                    ))}

                    <motion.label
                        className="flex flex-col gap-2 text-sm text-[#002D5F]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        ¿Cuál es su duda?
                        <select
                            name="duda"
                            required
                            value={form.duda}
                            onChange={handleChange}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099D8]"
                        >
                            <option value="">Seleccione</option>
                            <option value="cotizacion">Cotización</option>
                            <option value="ya-reservo">Ya reservó</option>
                            <option value="post-crucero">Post-crucero</option>
                            <option value="finanzas">Departamento de finanzas</option>
                            <option value="comercial">Departamento comercial</option>
                        </select>
                    </motion.label>

                    <motion.label
                        className="flex flex-col gap-2 text-sm text-[#002D5F]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Compañía de interés
                        <select
                            required
                            name="compania"
                            value={form.compania}
                            onChange={handleChange}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099D8]"
                        >
                            <option value="">Seleccione</option>
                            {brands.map((brand) => (
                                <option key={brand.name} value={brand.name}>
                                    {brand.name}
                                </option>
                            ))}
                        </select>
                    </motion.label>

                    <motion.label
                        className="md:col-span-2 flex flex-col gap-2 text-sm text-[#002D5F]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Escriba su solicitud
                        <textarea
                            name="mensaje"
                            rows="5"
                            required
                            value={form.mensaje}
                            onChange={handleChange}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 resize-none focus:ring-[#0099D8]"
                        />
                    </motion.label>

                    <motion.div
                        className="md:col-span-2 text-center mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <button
                            type="submit"
                            size="lg"
                            className="bg-[#002D5F] hover:bg-[#033972] text-white px-14 py-4 text-lg rounded-full shadow-glow"
                        >
                            Enviar
                        </button>
                    </motion.div>
                </form>
            </div>
        </div>
    );
};
