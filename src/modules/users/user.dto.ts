import { IsString, IsInt } from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class UserDto {
    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsString()
    readonly email: string;

    @ApiModelProperty()
    @IsInt()
    readonly age: number;
}
