import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {LoggerMiddleware} from '@middleware/logger.middleware';
import {RandomController} from './random.controller';

@Module({
    imports: [],
    controllers: [RandomController],
    providers: [],
})
export class RandomModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes(RandomController);
    }
}
