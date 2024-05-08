import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { postRepository } from './post.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [PostsService, postRepository],
})
export class PostsModule {}
