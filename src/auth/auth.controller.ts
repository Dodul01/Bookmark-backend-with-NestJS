import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Sign Up
  @Post('signup')
  signup() {
    return 'Sign up api hit succesfully.';
  }

  // Sign In
  @Post('signin')
  signin() {
    return { msg: 'Hello World!' };
  }
}
