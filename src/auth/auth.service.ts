import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './entities/auth.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    @Inject('User_Repository')
    private userRepository: typeof Auth,
    private jwtService: JwtService
  ) { }
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  async signIn(email, pass) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email, id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
