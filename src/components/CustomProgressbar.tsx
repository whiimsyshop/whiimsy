import { Progress } from "@nextui-org/react";
interface CustomProgressProps {
  value: number;
  size?: "sm" | "md" | "lg";  // Optional size prop
}

const CustomProgress = ({ value, size = 'md' }: CustomProgressProps) => {
    const test =1;

  return (
    <Progress aria-label="Loading..." value={value} className={`w-full  customProgress ${value >= 9.5 ? "r-9": test >= 8 ? "r-8": test >= 5 ? "r-5": "r-1"}`} maxValue={10} minValue={0} size={size}/>

  );
};

export default CustomProgress;