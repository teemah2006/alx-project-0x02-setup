'use client';
import { CardProps } from "@/interfaces";

export const Card: React.FC<CardProps> = ({ title, content }) => {
    return(
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}       