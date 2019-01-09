import {Controller, Get, Param, Post, HttpCode, Body, Res, ValidationPipe, UsePipes} from '@nestjs/common';
import {UserDto} from './user.dto';
import {UsersService} from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    find(@Param('id') id, @Res() res) {
        this.usersService.find(id, res);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Post()
    @HttpCode(200)
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createUser: UserDto) {
        return this.usersService.create(createUser);
    }
}
