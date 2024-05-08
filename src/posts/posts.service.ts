import {
  Body,
  Injectable,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { GetPostsDto } from './dto/get-posts.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { postRepository } from './post.repository';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(private readonly postRepository: postRepository) {}

  getAllPosts(@Query() getPostsDto: GetPostsDto) {
    return this.postRepository.find();
  }

  async getPostById(@Param('id') id: string): Promise<Post[]> {
    const post = await this.postRepository.findBy({ id });

    if (!post.length) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  createPost(@Body() createPostDto: CreatePostDto): Promise<Post> {
    const newPost = this.postRepository.create(createPostDto);
    return this.postRepository.save(newPost);
  }

  async updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<Post> {
    const oldPost = await this.getPostById(id);

    if (!oldPost.length) {
      throw new NotFoundException('Post not found');
    }

    const editedPost = { ...oldPost[0], ...updatePostDto };
    return await this.postRepository.save(editedPost);
  }

  async deletePost(@Param('id') id: string): Promise<void> {
    const result = await this.postRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Post ${id} not exists`);
    }
  }
}
