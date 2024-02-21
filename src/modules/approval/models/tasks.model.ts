export interface AppResponse {
    status: string;
    message: string;
    data: ExtendedTask[]
}

export interface Task {
    id: string;
    name: string;
    status: string;
    assignee: string;
    createdDate: Date;
    priority: number;
    processDefinitionId: string;
    processInstanceId: string,
    taskDefinitionKey: string;
    standalone: boolean
}
export interface AccessRequest {
    requestDate: Date;
    submissionUID: string;
    userId: string;
    resourceId: string;
    operationId: string;
    ipAddress: string;
    osName: string;
    osVersion: string;
    clientType: string;
    clientName: string;
    locale: string;
    userAgent: string;
    agentVersion: string;
    unit: string;
    org: string;
    priority: number;
    timeout: number;
}
export interface ExtendedTask {
    task: Task;
    request: AccessRequest;
}

