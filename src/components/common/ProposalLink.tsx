import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';

const MAILTO =
    'mailto:proyectos@tmaingenieros.com?subject=Solicitud%20de%20propuesta%20t%C3%A9cnica&body=Hola%2C%20quisiera%20solicitar%20una%20propuesta%20t%C3%A9cnica.%0A%0ANombre%3A%20%0AEmpresa%3A%20%0ATel%C3%A9fono%3A%20%0ADescripci%C3%B3n%20del%20proyecto%3A%20%0A%0AGracias.';

const CONTACT_PATH = '/contacto?asunto=Propuesta%20t%C3%A9cnica';

const isMobileDevice = () => {
    if (typeof navigator === 'undefined') return false;
    return /Android|iPhone|iPad|iPod|Mobile|Opera Mini|IEMobile|Windows Phone/i.test(navigator.userAgent);
};

type ProposalLinkProps = {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
};

export default function ProposalLink({ className, style, children }: ProposalLinkProps) {
    if (isMobileDevice()) {
        return (
            <a href={MAILTO} className={className} style={style}>
                {children}
            </a>
        );
    }

    return (
        <Link to={CONTACT_PATH} className={className} style={style}>
            {children}
        </Link>
    );
}
