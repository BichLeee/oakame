import { ImageWrapper } from "@/components/elements";
import benches from "assets/images/Zola-Footer.webp";

export const Footer = () => {
    return (
        <div>
            <ImageWrapper src={benches.src} alt="benches" height="110vh" width="100%s" />
        </div>
    );
};
