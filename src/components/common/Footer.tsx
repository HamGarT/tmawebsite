import React from 'react';
import { MapPin, Phone, Mail, Globe, IdCard } from 'lucide-react';

const Footer: React.FC = () => {
    const contactItems = [
        { icon: MapPin, label: 'Dirección', value: 'Jr. San Sebastián N° 353, Cajamarca' },
        { icon: Phone, label: 'Teléfono', value: '945 741 482' },
        { icon: Mail, label: 'Correo', value: 'gerencia@tmaingenieros.com\nproyectos@tmaingenieros.com' },
        { icon: Globe, label: 'Web', value: 'www.tma-ingenieros.com' },
        { icon: IdCard, label: 'RUC', value: '20570528999' },
    ];

    return (
        <footer className="w-full bg-[#0b1a4a] text-white py-10 font-sans border-t border-[#162763] overflow-x-auto">
            <div className="min-w-max mx-auto px-8 flex flex-row items-center gap-10 justify-center">
                
                {/* Logo Section */}
                <div className="flex-shrink-0 text-left">
                    <h2 className="text-3xl font-extrabold tracking-wide">TMA</h2>
                    <p className="text-[10px] tracking-widest text-white/70 mt-1 whitespace-nowrap">
                        INGENIERÍA&nbsp;|&nbsp;CONSTRUCCIÓN&nbsp;|&nbsp;GESTIÓN&nbsp;AMBIENTAL
                    </p>
                </div>

                <div className="hidden md:block w-px h-14 bg-white/20" />

                {/* Contact Info (Changed to items-start) */}
                <div className="flex flex-row items-start gap-8">
                    {contactItems.map((item, index) => (
                        <div key={item.label} className="flex items-start">
                            
                            {/* Vertical Divider (adjusted height and margin for top alignment) */}
                            {index > 0 && (
                                <div className="hidden md:block w-px h-10 bg-white/20 mr-8 mt-1" />
                            )}
                            
                            <div className="flex flex-col text-left">
                                {/* Icon and Title */}
                                <div className="flex items-center gap-2 mb-0.5">
                                    <item.icon size={16} className="flex-shrink-0 text-[#f5a623]" />
                                    <p className="font-semibold text-xs whitespace-nowrap">{item.label}</p>
                                </div>
                                
                                {/* Values */}
                                <div className="pl-[24px]">
                                    {item.value.split('\n').map((line, i) => (
                                        <p key={i} className="text-xs text-gray-300 mt-0.5 whitespace-nowrap">{line}</p>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;