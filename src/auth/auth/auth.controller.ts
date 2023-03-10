import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    return this.authService.login(body.username, body.password);
  }

  // login(@Body() body) {
  //   return { token: this.authService.login(body.username, body.password) };
  // }

  // @Role('admin')
  // @UseGuards(JwtGuard, RoleGuard)
  @UseGuards(JwtGuard)
  @Get('test-auth')
  test(@Req() req) {
    console.log(req.user);
    return {
      name: 'Paulo Roberto',
    };
  }
}
