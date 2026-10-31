import { MapPin, Phone, Mail, Globe, IdCard } from 'lucide-react';
import midLogo from '@/assets/icons/midlogo.webp';

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.026 1.792-4.697 4.533-4.697 1.313 0 2.686.235 2.686.235v2.971h-1.513c-1.49 0-1.956.93-1.956 1.886v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.171.054 1.807.249 2.231.414.561.218.961.479 1.381.899.42.42.681.82.899 1.381.165.424.36 1.06.414 2.231.058 1.266.07 1.646.07 4.842s-.012 3.576-.07 4.842c-.054 1.171-.249 1.807-.414 2.231a3.72 3.72 0 0 1-.899 1.381 3.72 3.72 0 0 1-1.381.899c-.424.165-1.06.36-2.231.414-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.171-.054-1.807-.249-2.231-.414a3.72 3.72 0 0 1-1.381-.899 3.72 3.72 0 0 1-.899-1.381c-.165-.424-.36-1.06-.414-2.231C2.175 15.576 2.163 15.196 2.163 12s.012-3.576.07-4.842c.054-1.171.249-1.807.414-2.231.218-.561.479-.961.899-1.381.42-.42.82-.681 1.381-.899.424-.165 1.06-.36 2.231-.414C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.332.014 7.052.072 5.775.13 4.903.333 4.14.63a5.876 5.876 0 0 0-2.126 1.384A5.876 5.876 0 0 0 .63 4.14C.333 4.903.13 5.775.072 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.058 1.277.261 2.149.558 2.912a5.876 5.876 0 0 0 1.384 2.126 5.876 5.876 0 0 0 2.126 1.384c.763.297 1.635.5 2.912.558C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.149-.261 2.912-.558a5.876 5.876 0 0 0 2.126-1.384 5.876 5.876 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.058-1.277-.261-2.149-.558-2.912a5.876 5.876 0 0 0-1.384-2.126A5.876 5.876 0 0 0 19.86.63c-.763-.297-1.635-.5-2.912-.558C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
);

const contactItems = [
    { icon: MapPin, label: 'Dirección', value: 'Jr. San Sebastián N° 353, Cajamarca\nAv. Brasil 315 A, Alto Selva Alegre, Arequipa' },
    { icon: Phone, label: 'Teléfono', value: '939 826 958' },
    { icon: Mail, label: 'Correo', value: 'gerencia@tmaingenieros.com\nproyectos@tmaingenieros.com' },
    { icon: Globe, label: 'Web', value: 'www.tmaingenieros.com' },
    { icon: IdCard, label: 'RUC', value: '20570528999' },
];

const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61595780039665',
        Icon: FacebookIcon,
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/tmaingenierosconsulting/',
        Icon: InstagramIcon,
    },
    {
        name: 'TikTok',
        href: 'https://www.tiktok.com/@tmaingenierosconsulting',
        Icon: TikTokIcon,
    },
];

const Footer = () => {
    return (
        <footer className="w-full bg-[#0b1a4a] text-white font-sans border-t border-[#162763]">
            <div className="mx-auto max-w-[1440px] px-4 md:px-6 py-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="shrink-0 text-left">
                        <div className="flex items-center gap-2.5">
                            <img src={midLogo} alt="Logo TMA" className="h-9 w-auto object-contain" />
                            <h2 className="text-3xl font-extrabold tracking-wide">TMA</h2>
                        </div>
                        <p className="mt-1 max-w-[16rem] text-[10px] leading-relaxed tracking-[0.14em] text-white/70 sm:max-w-none sm:text-xs sm:tracking-widest">
                            INGENIERÍA&nbsp;|&nbsp;CONSTRUCCIÓN&nbsp;|&nbsp;GESTIÓN&nbsp;AMBIENTAL
                        </p>
                    </div>

                    <div className="grid flex-1 grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:border-l lg:border-white/15 lg:pl-5 xl:grid-cols-[1.2fr_0.8fr_1.5fr_1fr_0.9fr]">
                        {contactItems.map((item) => (
                            <div key={item.label} className="flex items-start gap-2.5">
                                <item.icon size={18} className="mt-0.5 shrink-0 text-[#f5a623]" />
                                <div className="min-w-0">
                                    <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                                        {item.label}
                                    </p>
                                    {item.value.split('\n').map((line, i) => (
                                        <p
                                            key={i}
                                            className={`mt-0.5 text-[13px] leading-snug text-gray-300 ${
                                                item.label === 'Correo' ? 'whitespace-nowrap' : 'break-words'
                                            }`}
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-5 flex flex-col items-center gap-3 border-t border-white/15 pt-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} TMA Ingenieros S.A.C. Todos los derechos reservados.
                    </p>

                    <div className="flex items-center justify-center gap-3 sm:justify-start">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                            Síguenos
                        </span>
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.name}
                                    title={social.name}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-[#0b1a4a]"
                                >
                                    <social.Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
