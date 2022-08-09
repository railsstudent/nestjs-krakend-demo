import {
  Controller,
  ForbiddenException,
  Get,
  Post,
  Query,
} from '@nestjs/common'

@Controller('bar')
export class BarController {
  @Get()
  getFoo(): string {
    return 'Bar controller called.'
  }

  @Get('error')
  getFooError(): string {
    throw new ForbiddenException(
      'Throw forbidden exception and not proxy by KrakenD',
    )
  }

  @Post()
  createFoo(
    @Query('name') name: string,
    @Query('age') age: number,
  ): { name: string; age: number } {
    return {
      name,
      age,
    }
  }
}
