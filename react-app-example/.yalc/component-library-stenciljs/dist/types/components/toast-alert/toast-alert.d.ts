import { ComponentInterface } from "../../stencil-public-runtime";
export declare class ToastAlert implements ComponentInterface {
    alertTitle: string;
    alertDescription: string;
    isActive: boolean;
    handleClose: () => boolean;
    render(): any;
}
