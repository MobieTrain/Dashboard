import { AccountUser } from './dev/AccountUser';
import { Countries } from './Countries';
import { Roles } from './Roles';
import { User } from './dev/User';
import { LearningPath } from './dev/LearningPath';
import { Level } from './dev/Level';
import { Skill } from './dev/Skill';
import { Module } from './dev/Module';
import { Locale } from './dev/Locale';
import { Translation } from './dev/Translation';
import { ModuleProgress } from './dev/ModuleProgress';
import { Account } from './dev/Account';

export const Entities = {
    LOCAL_DATA: [User, Countries, Roles],
    MT: [User, Account, AccountUser, LearningPath, Level, Skill, Module, Locale, Translation, ModuleProgress],
};
