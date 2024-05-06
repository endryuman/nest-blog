import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PostStatus } from '../post-status.enam';

export class GetPostsDto {
  @IsString()
  @IsOptional()
  readonly title?: string;
  @IsEnum(PostStatus)
  @IsOptional()
  readonly status?: string;
}
