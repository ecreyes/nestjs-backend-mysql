import { Controller, Get, Param } from '@nestjs/common'

import { LinkService } from './link.service'

@Controller()
export class LinkController {
    constructor(private linkService: LinkService) { }

    @Get('admin/users/:id/links')
    async all(@Param('id') id:number) {
        try {
            return await this.linkService.find({
                user: id,
                relations: ['orders'],
            })
        }catch(error) {
            console.log(error)

            throw error
        }
    }
}