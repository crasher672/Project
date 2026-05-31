import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkinsModule } from './skins/skins.module';

@Module({
  imports: [SkinsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
