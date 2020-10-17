import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllRanking(order: string): string[] {
    return [];
  }
  
  countCasePositivesByLocation(locationId: string): number {
      return 0;
  }
  
  countCaseCureByLocation(locationId: string): number {
      return 0;
  }
}
