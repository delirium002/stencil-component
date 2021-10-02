/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ProcomBean {
        "itemId": number;
        "name": string;
        "variation": string;
    }
    interface ProcomMultiselect {
        "name": string;
        "options": string;
        "variation": string;
    }
}
declare global {
    interface HTMLProcomBeanElement extends Components.ProcomBean, HTMLStencilElement {
    }
    var HTMLProcomBeanElement: {
        prototype: HTMLProcomBeanElement;
        new (): HTMLProcomBeanElement;
    };
    interface HTMLProcomMultiselectElement extends Components.ProcomMultiselect, HTMLStencilElement {
    }
    var HTMLProcomMultiselectElement: {
        prototype: HTMLProcomMultiselectElement;
        new (): HTMLProcomMultiselectElement;
    };
    interface HTMLElementTagNameMap {
        "procom-bean": HTMLProcomBeanElement;
        "procom-multiselect": HTMLProcomMultiselectElement;
    }
}
declare namespace LocalJSX {
    interface ProcomBean {
        "itemId"?: number;
        "name"?: string;
        "onRemoveBean"?: (event: CustomEvent<any>) => void;
        "variation"?: string;
    }
    interface ProcomMultiselect {
        "name"?: string;
        "onClickedDropdownItem"?: (event: CustomEvent<any>) => void;
        "options"?: string;
        "variation"?: string;
    }
    interface IntrinsicElements {
        "procom-bean": ProcomBean;
        "procom-multiselect": ProcomMultiselect;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "procom-bean": LocalJSX.ProcomBean & JSXBase.HTMLAttributes<HTMLProcomBeanElement>;
            "procom-multiselect": LocalJSX.ProcomMultiselect & JSXBase.HTMLAttributes<HTMLProcomMultiselectElement>;
        }
    }
}
