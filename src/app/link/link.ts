import { Logo } from '../logo/logo';

export interface Link{
    text: string;
    href: string;
    target: string;
    logo?: Logo;
}
