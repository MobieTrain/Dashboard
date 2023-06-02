import { AccountUser } from './dev/AccountUser';
import { Countries } from './Countries';
import { Roles } from './Roles';
import { User } from './dev/User';
import { LearningPath } from './dev/LearningPath';
import { Level } from './dev/Level';

export const Entities = {
    LOCAL_DATA: [User, Countries, Roles],
    MT: [User, AccountUser, LearningPath, Level],
};
