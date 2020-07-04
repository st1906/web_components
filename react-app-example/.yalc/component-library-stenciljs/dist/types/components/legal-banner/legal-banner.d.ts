import { ComponentInterface } from "../../stencil-public-runtime";
export declare class LegalBanner implements ComponentInterface {
    bannerTitle: string;
    text: string;
    type: 'big' | 'small' | 'embedded';
    dismissed: boolean;
    handleDismiss: () => void;
    handleLearnMore: () => void;
    render(): any;
}
