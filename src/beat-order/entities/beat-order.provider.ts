import { BeatPlan } from "./beat-order.entity";



export const beatPlanProviders = [
    {
        provide: 'beat_plan_repository',
        useValue: BeatPlan,
    },
];