import { Controller, Get, Param } from '@nestjs/common'

@Controller({
  path: 'foo',
  version: '1',
})
export class FooController {
  @Get()
  getFoo(): string {
    return 'Foo controller V1 called.'
  }

  @Get(':id')
  getFooDetails(@Param('id') id: string): string {
    return `Foo controller V1 called, id: ${id}.`
  }
}
