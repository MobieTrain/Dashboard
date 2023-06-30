export type LepaStatisticsResult = {
    id: number;
    total: number;
}

export type UserStatisticsResult = {
    registeredUsers: number;
    totalUsers: number;
}

export type StatisticsResult = {
    users: UserStatisticsResult;
    lepas: LepaStatisticsResult[];
}
