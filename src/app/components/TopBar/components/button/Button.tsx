"use client";
import Link from "next/link";
type Props = {
    name: string;
    adress?: string;
}

export default function Button({ name, adress }: Props) {
    return (
       <Link href={adress ||  '#'} passHref legacyBehavior>
            <button>
                <span className="font-fonteLogo text-black">{name}</span>
            </button>
       </Link>
    )
}