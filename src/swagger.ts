import { NestFactory } from '@nestjs/core';
import { AppModule } from '@modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const options = new DocumentBuilder()
        .setTitle('API example')
        .setDescription('The API description')
        .setVersion('1.0')
        .addTag('api')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    fs.writeFile('swagger.json', JSON.stringify(document), (err) => {
        if (err) {
            throw err;
        }
        console.log('swagger.json created');
    });
}
bootstrap();
