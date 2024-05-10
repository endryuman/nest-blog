import { DataSource, Repository } from 'typeorm';
import { Post } from './post.entity';
import { Injectable } from '@nestjs/common';
import { GetPostsDto } from './dto/get-posts.dto';

@Injectable()
export class postRepository extends Repository<Post> {
  constructor(private dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }
  getPosts(getPostsDTO: GetPostsDto): Promise<Post[]> {
    const { status, title } = getPostsDTO;

    const query = this.createQueryBuilder('post');

    if (status) {
      query.andWhere('post.status = :status', { status });
    }

    if (title) {
      query.andWhere('post.title = :title', { title });
    }

    return query.getMany();
  }
}
