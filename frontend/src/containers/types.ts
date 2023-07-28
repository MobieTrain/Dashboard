export type LepaStatisticsResult = {
    id: number;
    total: number;
}

export type Lepa = {
    account_id: number;
    id: string;
    published: boolean;
    slug: string;
}

export type UserStatisticsResult = {
    activeUsers: number;
    registeredUsers: number;
    totalUsers: number;
}
export type PublishedLepas = {
    total: number,
    published: number
}

export type StatisticsResult = {
    users: UserStatisticsResult;
    lepas: LepaStatisticsResult[];
    publishedPerClient: PublishedLepas;
}
