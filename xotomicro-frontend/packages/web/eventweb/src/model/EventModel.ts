export interface EventModel {
    topic: string;
    partition: string;
    offset: number;
    timestamp: number;
    value: string;
}
