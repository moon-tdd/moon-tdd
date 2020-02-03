export type ReportState = 'pass';

export interface Report {
    state: ReportState;
    name: string;
}