/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LegalBanner {
        "text": string;
        "title": string;
        "type": "big" | "small" | "embedded";
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SocialMediaWidget {
    }
    interface ToastAlert {
    }
}
declare global {
    interface HTMLLegalBannerElement extends Components.LegalBanner, HTMLStencilElement {
    }
    var HTMLLegalBannerElement: {
        prototype: HTMLLegalBannerElement;
        new (): HTMLLegalBannerElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSocialMediaWidgetElement extends Components.SocialMediaWidget, HTMLStencilElement {
    }
    var HTMLSocialMediaWidgetElement: {
        prototype: HTMLSocialMediaWidgetElement;
        new (): HTMLSocialMediaWidgetElement;
    };
    interface HTMLToastAlertElement extends Components.ToastAlert, HTMLStencilElement {
    }
    var HTMLToastAlertElement: {
        prototype: HTMLToastAlertElement;
        new (): HTMLToastAlertElement;
    };
    interface HTMLElementTagNameMap {
        "legal-banner": HTMLLegalBannerElement;
        "my-component": HTMLMyComponentElement;
        "social-media-widget": HTMLSocialMediaWidgetElement;
        "toast-alert": HTMLToastAlertElement;
    }
}
declare namespace LocalJSX {
    interface LegalBanner {
        "text"?: string;
        "title"?: string;
        "type"?: "big" | "small" | "embedded";
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SocialMediaWidget {
    }
    interface ToastAlert {
    }
    interface IntrinsicElements {
        "legal-banner": LegalBanner;
        "my-component": MyComponent;
        "social-media-widget": SocialMediaWidget;
        "toast-alert": ToastAlert;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "legal-banner": LocalJSX.LegalBanner & JSXBase.HTMLAttributes<HTMLLegalBannerElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "social-media-widget": LocalJSX.SocialMediaWidget & JSXBase.HTMLAttributes<HTMLSocialMediaWidgetElement>;
            "toast-alert": LocalJSX.ToastAlert & JSXBase.HTMLAttributes<HTMLToastAlertElement>;
        }
    }
}