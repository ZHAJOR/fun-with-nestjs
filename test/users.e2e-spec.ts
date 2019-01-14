import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { UsersModule } from '@modules/users/users.module';
import { UsersService } from '@modules/users/users.service';
import { INestApplication } from '@nestjs/common';

describe('Users', () => {
    let app: INestApplication;
    // const usersService = { findAll: () => ['test'] };
    const userExample = {
        email: 'test@ninja.com',
        name: 'Mike',
        age: 42,
    };

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [UsersModule],
        })
            // .overrideProvider(UsersService)
            // .useValue(usersService)
            .compile();

        app = module.createNestApplication();
        await app.init();
    });

    it(`/POST users without body`, () => {
        return request(app.getHttpServer())
            .post('/users')

            .expect(400);
    });

    it(`/POST users`, () => {
        return request(app.getHttpServer())
            .post('/users')
            .send(userExample)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(200);
    });

    it(`/GET users`, () => {
        return request(app.getHttpServer())
            .get('/users')
            .expect(200)
            .expect([userExample]);
            // .expect({
            //     data: usersService.findAll(),
            // });
    });

    afterAll(async () => {
        await app.close();
    });
});
