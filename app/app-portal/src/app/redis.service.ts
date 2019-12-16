import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RedisService {
  apiKey: string = "&api-key=xl57z7g26vd13JiviJZ2Maq7yZ4tO7mkFXpyMDRDHyPco1gwz1K0AnjNP95SoiNACaj0j39wfVNfYCHT3Ax17QWfLWhODuUP0YdS0JPzB3c7to24Lek3VicMyCxtnyfc"

  constructor(private httpService: HttpClient) { }

  getRedis(key: any) {
    return this.httpService.get(environment.GET_REDIS + key + this.apiKey)
  }

  setRedis(req: any) {
    return this.httpService.get(environment.SET_REDIS + req.key +"&value=" + req.value + this.apiKey)
  }

  clearRedis(req: any) {
    return this.httpService.get(environment.CLEAR_REDIS + this.apiKey)
  }
}
