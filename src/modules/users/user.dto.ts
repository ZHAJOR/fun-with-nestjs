import { IsString, IsInt } from 'class-validator';

export class UserDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly email: string;
    @IsInt()
    readonly age: number;
}
