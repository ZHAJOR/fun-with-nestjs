import {Controller, Get, Param, Post, HttpCode, Body, Res, ValidationPipe, UsePipes} from '@nestjs/common';
import {UserDto} from './user.dto';
import {UsersService} from './users.service';
import {ApiCreatedResponse, ApiOkResponse, ApiUseTags} from '@nestjs/swagger';

// @ApiBearerAuth()
@ApiUseTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    @ApiOkResponse({type: UserDto})
    find(@Param('id') id: number, @Res() res) {
        this.usersService.find(id, res);
    }

    @Get()
    @ApiOkResponse({type: UserDto, isArray: true})
    findAll(): UserDto[] {
        return this.usersService.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiCreatedResponse({type: UserDto})
    create(@Body() createUser: UserDto) {
        return this.usersService.create(createUser);
    }
}
