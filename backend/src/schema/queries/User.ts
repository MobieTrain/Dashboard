import { GraphQLList } from 'graphql';
import { Users } from '../../entities/Users';
import { Countries } from '../../entities/Countries';
import { getUsersByCountrySuccessPayload, getTUsersByRoleSuccessPayload, UserRegistrationStatistics, UsersByCountry, UsersByRole, User } from '../types/User';
import { Roles } from '../../entities/Roles';


export const GET_USERS = {
    type: new GraphQLList(User),
    resolve: async () => {
        const result = await Users.find();
        return result;
    }
};

export const GET_USER_REGISTRATION_STATISTICS = {
    type: UserRegistrationStatistics,
    resolve: async () => {
        const users = await Users.find();
        const totalInvitations = users.filter(user => user.isInvited).length;
        const totalRegisteredUsers = users.filter(user => user.isRegistered).length;
        const average = parseFloat((totalRegisteredUsers * 100 / totalInvitations).toFixed(2)) || 0;
        return {
            average,
            totalInvitations,
            totalRegisteredUsers
        };
    }
};

export const GET_USERS_BY_COUNTRY = {
    type: new GraphQLList(UsersByCountry),
    resolve: async () => {
        const result: getUsersByCountrySuccessPayload[] = [];
        const countries = await Countries.find();
        const users = await Users.find();
        countries.map(country => {
            const totalCount = users.filter(user => user.country === country.code).length;
            const percentage = parseFloat((totalCount * 100 / users.length).toFixed(2)) || 0;
            result.push({
                country: country.name,
                percentage,
                totalCount,
            });
        });
        return result;
    }
};

export const GET_USERS_BY_ROLE = {
    type: new GraphQLList(UsersByRole),
    resolve: async () => {
        const result: getTUsersByRoleSuccessPayload[] = [];
        const roles = await Roles.find();
        const users = await Users.find();
        roles.map(role => {
            const totalCount = users.filter(user => user.role.includes(role.name)).length;
            const percentage = parseFloat((totalCount * 100 / users.length).toFixed(2));
            result.push({
                role: role.name,
                percentage,
                totalCount,
            });
        });
        return result;
    }
};