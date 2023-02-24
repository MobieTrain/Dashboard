// export type User = {
//     id: number;
//     name: string;
//     lastName: string;
//     role: string;

// }

export interface User extends UserMT {
    country: string;
    isInvited: boolean;
    isRegistered: boolean;
}

export type UserMT = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    job_position: string;
    role_id: number;
}