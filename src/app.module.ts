import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FooController } from './foo.controller'
import { FooV2Controller } from './foo-v2.controller'
import { BarController } from './bar.controller'

@Module({
  imports: [],
  controllers: [AppController, FooController, FooV2Controller, BarController],
  providers: [AppService],
})
export class AppModule {}
