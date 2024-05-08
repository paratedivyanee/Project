import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAge',
})

export class CalculateAgePipe implements PipeTransform {
  transform(value: any): number | null {
    if (!value) return null; // Check if value is null and return null
    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }
}
