import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GetPostsDto } from './dto/get-posts.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  @Get()
  getAllPosts(@Query() getPostsDto: GetPostsDto) {
    return 'This action returns all posts';
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return `This action returns a post dy id ${id}`;
  }
  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return 'This action creates a post';
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return 'This action updates a post';
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return 'This action deletes a post';
  }
}
