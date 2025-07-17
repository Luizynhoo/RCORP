import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../../components/ui/use-toast';
import emailjs from '@emailjs/browser';
import { brandsData } from '/src/data/brandsData.js';

export default function Contactos() {
    const { toast } = useToast();
     const brands = Object.values(brandsData);

    const [form, setForm] = useState({
        nome: '',
        email: '',
        agencia: '',
        telefone: '',
        duvida: '',
        companhia: '',
        mensagem: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

        const { name, value } = e.target;

        if (name === 'telefone') {
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
                    title: 'Mensagem enviada!',
                    description: 'Entraremos em contato em breve',
                    variant: 'success',
                });

                setForm({
                    nome: '',
                    email: '',
                    agencia: '',
                    telefone: '',
                    duvida: '',
                    companhia: '',
                    mensagem: '',
                });
            })
            .catch((error) => {
                console.error('Erro ao enviar o e-mail', error);
                toast({
                    title: 'Erro ao enviar',
                    description: 'Tente novamente mais tarde.',
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
                        { label: 'Nombre*', name: 'nome', required: true },
                        { label: 'Correo Electrónico*', name: 'email', type: 'email', required: true },
                        { label: 'Nombre de la Agencia', name: 'agencia' },
                        { label: 'Teléfono de contacto', name: 'telefone', type:'tel', required: true },
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
                        ¿De qué se trata la duda?
                        <select
                            name="duvida"
                            required
                            value={form.duvida}
                            onChange={handleChange}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099D8]"
                        >
                            <option value="">Selecione</option>
                            <option value="cotacao">Cotação</option>
                            <option value="ja-reservou">Já reservou</option>
                            <option value="pos-cruzeiro">Pós-cruzeiro</option>
                            <option value="financeiro">Departamento financeiro</option>
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
                            name="companhia"
                            value={form.companhia}
                            onChange={handleChange}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099D8]"
                        >
                            <option value="">Selecione</option>
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
                            name="mensagem"
                            rows="5"
                            required
                            value={form.mensagem}
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
