import { ComponentInterface } from '../../stencil-public-runtime';
export declare class InflationConverter implements ComponentInterface {
    moneyValue: number;
    startDate: string;
    inflatedValue: number;
    getInflationRate: () => Promise<void>;
    componentWillLoad(): void;
    render(): any;
}
