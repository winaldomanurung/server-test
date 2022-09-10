import { Controller, Post, Body, Get, Param, Header } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Header('Content-Type', 'multipart/form-data')
  addUser(
    @Body('userId') newUserId: string,
    @Body('password') newPassword: string,
  ): any {
    const generatedId = this.usersService.insertUser(newUserId, newPassword);
    return { id: generatedId };
  }

  @Get()
  getAllUsers() {
    return this.usersService.fetchUsers();
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return this.usersService.fetchSingleUser(userId);
  }
}
