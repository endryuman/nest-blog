import { DataSource, Repository } from 'typeorm';
import { Post } from './post.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class postRepository extends Repository<Post> {
  constructor(private dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }
}
