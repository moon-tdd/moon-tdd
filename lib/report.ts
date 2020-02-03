export type ReportState = 'pass' | 'error';

export interface Report {
    state: ReportState;
    name: string;
}