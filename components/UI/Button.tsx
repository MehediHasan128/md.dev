import { cn } from "@/lib/utils";

interface ButtonProps { 
    buttonText: string;
    className?: string;
}


const Button = ({ buttonText, className }: ButtonProps) => {
    return (
        <button className={cn("border-2 border-primary bg-primary text-white rounded-md px-5 py-2.5 cursor-target cursor-pointer active:scale-95 duration-300", className)}>
            { buttonText }
        </button>
    );
};

export default Button;