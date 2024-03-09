import Link from "next/link";
import { SVGProps } from "react";

export default function AddExpense(){
    //when i click the button i want to open a modal that ask for the amount of the expense
    
    return(
        <Link
        className="absolute flex items-center justify-center rounded-full w-10 h-10 bg-lime-500 top-[-40px] dark:bg-gray-50/50"
        href="#"
      >
        <PlusIcon className="h-6 w-6 default-invert" />
        <span className="sr-only">Create</span>
      </Link>
    )
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
  }