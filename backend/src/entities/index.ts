import { AccountsUsersId } from './dev/AccountsUsersId';
import { Countries } from './Countries';
import { Roles } from './Roles';
import { User } from './dev/User';

export const Entities = {
    LOCAL_DATA: [User, Countries, Roles],
    MT: [User, AccountsUsersId],
};