import { Inject,Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'

import { User } from './user.entity'

@Injectable()
export class UserService {
    constructor(@Inject('USER_REPOSITORY') private userRepository: Repository<User>) {

    }

    public save(options: any): Promise<User> {
        return this.userRepository.save(options)
    }

    public findOne(options: any): Promise<User> {
        return this.userRepository.findOne(options)
    }
}
