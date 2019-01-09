import { Module } from '@nestjs/common';
import {UsersModule} from '@modules/users/users.module';
import {RandomModule} from '@modules/random/random.module';

@Module({
  imports: [UsersModule, RandomModule],
})
export class AppModule {}
