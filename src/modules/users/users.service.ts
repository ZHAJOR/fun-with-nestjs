import { Injectable, HttpStatus } from '@nestjs/common';
import {UserDto} from './user.dto';

@Injectable()
export class UsersService {
    private readonly users: UserDto[] = [];

    find(id: number, res) {
        res.status(HttpStatus.OK).json('Found!');
    }

    create(user: UserDto) {
        this.users.push(user);
        return 'Created';
    }

    findAll(): UserDto[] {
        return this.users;
    }
}
