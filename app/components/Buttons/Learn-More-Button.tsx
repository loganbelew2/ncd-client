"use client"
import { useRouter } from "next/navigation";

interface PropsObject {
  service?: string;
}
export default function LearnMoreButton({ service }: PropsObject) {
  const router = useRouter();
  const handleButtonClick = () => {
    service ? router.push(`/services/${service}`) : router.push(`/services`);
  };
  
  return (
    <button className="btn--tertiary" onClick={handleButtonClick}>
      Learn More
    </button>
  );
}
