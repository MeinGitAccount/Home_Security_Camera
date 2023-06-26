import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InitService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  // @PostMapping("/video")
  // public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("name") String name) throws IOException {
  //   videoService.saveVideo(file, name);
  //   return ResponseEntity.ok("Video saved.");
  // }
  public save(name: string) {
    return this.http.post<string>(this.url+'/video', name); // TODO: working?
  }

  // @GetMapping("/all")
  // public ResponseEntity<List<String>> getAllVideoNames() {
  //   return ResponseEntity.ok(videoService.getAllVideoNames());
  // }
  public getAllVideoNames(): Observable<string[]> {
    return this.http.get<string[]>(this.url+'/all');
  }

  public getAllVideoNamesByRoom(room: string) {
    return this.http.get<string>(this.url+'/all/' + room);
  }

  public getAllRoomNames() {
    return this.http.get<string[]>(this.url + '/allRooms');
  }

  // @GetMapping("/video/{name}")
  // public ResponseEntity<ByteArrayResource> getVideo(@PathVariable String name) {
  //   return ResponseEntity
  //     .status(HttpStatus.OK)
  //     .contentType(MediaType.APPLICATION_OCTET_STREAM)
  //     .body(new ByteArrayResource(videoService.getVideo(name).getData()));
  // }
  //TODO
}

