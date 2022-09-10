import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {
  private users: User[] = [];

  insertUser(userId: string, password: string) {
    const newUser = new User(userId, password);
    this.users.push(newUser);
    return userId;
  }

  fetchUsers() {
    return [...this.users];
  }

  fetchSingleUser(userId: string) {
    const user = this.users.find((user) => user.userId === userId);
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return { ...user };
  }
}
