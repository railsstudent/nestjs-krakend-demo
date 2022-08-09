import { Controller, Get, Param } from '@nestjs/common'

@Controller({
  path: 'foo',
  version: '2',
})
export class FooV2Controller {
  @Get()
  getFoo(): string {
    return 'Foo controller V2 called.'
  }

  @Get(':id')
  getFooDetails(@Param('id') id: string): string {
    return `Foo controller V2 called, id: ${id.toUpperCase()}.`
  }
}
