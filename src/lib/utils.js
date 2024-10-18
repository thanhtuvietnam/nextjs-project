import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const convertToSlug = text => {
  if (text === 'TRANG CHỦ') {
    return '';
  } else {
    return text
      .toString()
      .toLowerCase()
      .normalize('NFD') // Normalize Unicode để xử lý ký tự tiếng Việt có dấu
      .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu ngã, huyền, hỏi,... trong Unicode
      .replace(/[đĐ]/g, 'd') // Chuyển đổi đ, Đ thành d
      .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
      .replace(/[^\w-]+/g, '') // Loại bỏ các ký tự không phải chữ cái, số, hoặc dấu gạch ngang
      .replace(/-+/g, '-'); // Loại bỏ dấu gạch ngang liên tiếp
  }
};
