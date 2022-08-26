
export type User = {
    country: string;
    email: string;
    id: number;
    isInvited: boolean;
    isRegistered: boolean;
    jobPosition: string[];
    lastName: string;
    name: string;
}

// export type UserInput = Pick<User, "email" | "name">

export type Data = {
    name: string
    uv: number
    pv: number
    amt: number
}