import { AccountsUsersId } from './dev/AccountsUsersId';
import { Countries } from './Countries';
import { Roles } from './Roles';
import { Users } from './dev/Users';

export const Entities = {
    LOCAL_DATA: [Users, Countries, Roles],
    MT: [Users, AccountsUsersId],
};