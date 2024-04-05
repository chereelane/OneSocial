import { Rowdies, Noto_Sans } from "next/font/google"
import {NextFont} from "next/dist/compiled/@next/font";

export const rowdies = Rowdies({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const noto_sans: NextFont =Noto_Sans({
    weight: ['400', '600'],
    subsets: ['latin'],
    display: 'swap',
})