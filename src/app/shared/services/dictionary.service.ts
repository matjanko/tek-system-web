import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  constructor(private httpClient: HttpClient) {}

  getCustomers() {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/customers'
    );
  }

  getProjects() {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/projects'
    );
  }

  getProjectStages() {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/project-stages'
    );
  }

  getCustomerNames() {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/customers/names'
    );
  }

  getProjectIndexes() {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/projects/indexes'
    );
  }

  getEmployeeNames() {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/employees'
    );
  }

  getActivityCategories() {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/activity/categories'
    );
  }

  getActivitySubcategories(categoryId: number) {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/activity/subcategories/category/' +
        categoryId
    );
  }

  getActivityElements(subcategoryId: number) {
    return this.httpClient.get(
      'http://192.168.137.148:9090/api/dictionaries/activity/elements/subcategory/' +
        subcategoryId
    );
  }
}
