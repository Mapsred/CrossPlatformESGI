import { ISecondStage, IFirstStage } from "./ILaunch";


export interface IRocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: IFirstStage;
    second_stage: ISecondStage;
}