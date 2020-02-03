export type ReportState = 'pass' | 'error';

export interface ReportError {
    type: 'error';
    error: Error;
}

export type ReportIssue = ReportError;

export interface Report {
    state: ReportState;
    name: string;
    issues: ReportIssue[];
}