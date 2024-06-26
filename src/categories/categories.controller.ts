import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-catagory.dto';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Post()
  createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @Get(':id')
  getCategoryById(@Param('id') id: string): Promise<Category[]> {
    return this.categoriesService.getCategoryById(id);
  }
}
