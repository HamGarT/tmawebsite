import { useState, type FormEvent, type ChangeEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';

import ImageHero from '@/assets/images/inicio1.webp';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Dirección',
        lines: ['Jr. San Sebastián N° 353,', 'Cajamarca, Perú'],
    },
    {
        icon: Phone,
        title: 'Teléfono',
        lines: ['945 741 482 / 948 104 850', '076-268599'],
    },
    {
        icon: Mail,
        title: 'Correo',
        lines: ['gerencia@tmaingenieros.com', 'proyectos@tmaingenieros.com'],
    },
    {
        icon: Clock,
        title: 'Horario de atención',
        lines: ['Lun – Vie: 8:00 am – 6:00 pm', 'Sáb: 8:00 am – 1:00 pm'],
    },
];

const inputBase =
    'w-full bg-white border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#f5a623] focus:ring-2 focus:ring-[#f5a623]/30 transition';

export default function Contacto() {
    const [form, setForm] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className="w-full bg-gray-50 font-sans text-gray-800 relative">
            {/* HERO SECTION */}
            <section className="relative h-[38vh] min-h-[280px] bg-[#031b40] flex items-center overflow-hidden">
                <div className="absolute inset-y-0 right-0 w-[60%] z-0">
                    <img src={ImageHero} alt="Contacto TMA" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#031b40] via-[#031b40]/90 to-transparent/10"></div>
                </div>
                <div className="relative z-10 w-full px-6 md:px-12 flex flex-col gap-3 text-left">
                    
                    <h1 className="text-[30px] md:text-[44px] font-extrabold leading-[1.1] text-white tracking-tight">
                        Contacto
                    </h1>
                    <div className="w-12 h-1 bg-[#f5a623] mb-1"></div>
                    <p className="text-[14px] md:text-[16px] text-gray-200 leading-snug max-w-[90%]">
                        Estamos listos para atender tus consultas sobre ingeniería, construcción
                        y <br className="hidden md:block" /> gestión ambiental para minería e industria.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">

                {/* CONTACT INFO CARDS */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {contactInfo.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white rounded-xl p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
                        >
                            <div className="w-11 h-11 rounded-lg bg-[#0a1c3f] flex items-center justify-center mb-3">
                                <item.icon size={22} className="text-[#f5a623]" />
                            </div>
                            <h3 className="text-[#0a1c3f] font-bold text-[14px] mb-1.5">{item.title}</h3>
                            {item.lines.map((line, i) => (
                                <p key={i} className="text-[12.5px] text-gray-500 leading-snug">
                                    {line}
                                </p>
                            ))}
                        </div>
                    ))}
                </section>

                {/* FORM + MAP */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-stretch">

                    {/* FORM */}
                    <div className="bg-white rounded-xl p-6 md:p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1c3f] mb-1 tracking-tight">
                            Envíanos un <span className="text-[#f5a623]">mensaje</span>
                        </h2>
                        <p className="text-[13px] text-gray-500 mb-6">
                            Completa el formulario y nuestro equipo te responderá a la brevedad.
                        </p>

                        {sent ? (
                            <div className="flex flex-col items-center justify-center text-center py-16">
                                <CheckCircle2 size={56} className="text-[#f5a623] mb-4" />
                                <h3 className="text-xl font-bold text-[#0a1c3f] mb-1">¡Mensaje enviado!</h3>
                                <p className="text-sm text-gray-500 max-w-sm">
                                    Gracias por contactarte con TMA Ingenieros. Te responderemos muy pronto.
                                </p>
                                <button
                                    onClick={() => { setSent(false); setForm({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' }); }}
                                    className="mt-6 bg-[#f5a623] hover:bg-[#e0961b] text-white text-sm font-semibold py-2.5 px-6 rounded transition-colors"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col text-left">
                                        <label className="text-[13px] font-semibold text-[#0a1c3f] mb-1.5">Nombre y apellido *</label>
                                        <input name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Tu nombre" className={inputBase} />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <label className="text-[13px] font-semibold text-[#0a1c3f] mb-1.5">Correo electrónico *</label>
                                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="tucorreo@ejemplo.com" className={inputBase} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col text-left">
                                        <label className="text-[13px] font-semibold text-[#0a1c3f] mb-1.5">Teléfono</label>
                                        <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="999 999 999" className={inputBase} />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <label className="text-[13px] font-semibold text-[#0a1c3f] mb-1.5">Asunto *</label>
                                        <input name="asunto" value={form.asunto} onChange={handleChange} required placeholder="¿En qué podemos ayudarte?" className={inputBase} />
                                    </div>
                                </div>
                                <div className="flex flex-col text-left">
                                    <label className="text-[13px] font-semibold text-[#0a1c3f] mb-1.5">Mensaje *</label>
                                    <textarea name="mensaje" value={form.mensaje} onChange={handleChange} required rows={5} placeholder="Cuéntanos sobre tu proyecto o consulta..." className={`${inputBase} resize-none`} />
                                </div>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 bg-[#f5a623] hover:bg-[#e0961b] text-white text-sm font-semibold py-3 px-6 rounded-md transition-colors shadow-sm"
                                >
                                    <Send size={16} /> Enviar mensaje
                                </button>
                            </form>
                        )}
                    </div>

                    {/* MAP */}
                    <div className="flex flex-col">
                        <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100 min-h-[320px] relative">
                            <iframe
                                title="Ubicación TMA Ingenieros - Cajamarca"
                                src="https://www.google.com/maps?q=Jr.%20San%20Sebasti%C3%A1n%20N%C2%B0%20353%2C%20Cajamarca%2C%20Per%C3%BA&output=embed"
                                className="w-full h-full min-h-[320px]"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="mt-4 bg-[#0a1c3f] rounded-xl p-4 flex items-center gap-3">
                            <Navigation size={20} className="text-[#f5a623] shrink-0" />
                            <p className="text-white text-sm">
                                <span className="font-semibold">Sede principal:</span> Jr. San Sebastián N° 353,
                                Urb. San Sebastián, Cajamarca, Perú.
                            </p>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Jr.+San+Sebasti%C3%A1n+N%C2%B0+353+Cajamarca+Per%C3%BA"
                                target="_blank"
                                rel="noreferrer"
                                className="ml-auto shrink-0 flex items-center gap-1 bg-[#f5a623] hover:bg-[#e0961b] text-white text-xs font-semibold px-3 py-2 rounded transition-colors whitespace-nowrap"
                            >
                                Cómo llegar
                            </a>
                        </div>
                    </div>

                </section>

                {/* CTA BANNER */}
                <section className="bg-[#0a1c3f] rounded-xl mt-12 p-4 md:px-8 md:py-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm md:text-base text-center md:text-left">
                        <span className="text-[#f5a623] font-semibold">¿Tienes un proyecto en marcha? </span>
                        <span className="text-white">Hablemos de cómo podemos ayudarte a hacerlo realidad.</span>
                    </p>
                    <a
                        href="tel:+51945741482"
                        className="flex items-center gap-2 bg-[#f5a623] hover:bg-[#e0961b] text-white text-sm md:text-base font-semibold py-2.5 px-8 rounded transition-colors whitespace-nowrap"
                    >
                        <Phone size={16} /> 945 741 482
                    </a>
                </section>

            </div>
        </div>
    );
}
