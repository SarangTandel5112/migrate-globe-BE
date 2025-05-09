import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Valid email address',
  })
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  readonly email: string;

  @ApiPropertyOptional({
    example: '+1234567890',
    description: 'Optional phone number in E.164 format',
    required: false,
  })
  @IsOptional()
  @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid phone number format' })
  readonly phoneNumber?: string;

  @ApiProperty({
    example: 'SecurePassword123!',
    description: 'Password must be 6-100 characters',
    minLength: 6,
    maxLength: 100,
  })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(100, { message: 'Password cannot exceed 100 characters' })
  readonly password: string;
}
