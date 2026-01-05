interface Price {
    primary: number;
    secondary: number;
}

export interface Props {
    image: string;
    title: string;
    price: Price;
    currency: string;
    description: string;
    whatsapp: string;
    phone: string;
}