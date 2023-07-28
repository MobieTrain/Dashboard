export type LepaStatisticsResult = {
    id: number;
    total: number;
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
