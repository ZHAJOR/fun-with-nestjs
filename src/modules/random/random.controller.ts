import {Controller, Get, HttpException, HttpStatus} from '@nestjs/common';

@Controller('random')
export class RandomController {
    @Get()
    getNumber() {
        return (Math.random() * 100) | 0;
    }

    @Get('infinity')
    async getInfinity() {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
}
