import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class IsAdminGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext): any {
      return super.canActivate(context);
    }
    
    handleRequest(err, user, info) {
      if (err || !user) {
        throw err || new UnauthorizedException();
      }

      const decodedUser = JSON.parse(user.data);
      if(decodedUser.is_admin) {
        return decodedUser
      }
      throw err || new UnauthorizedException('User is not admin');
    }
}