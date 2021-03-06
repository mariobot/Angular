import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { WebApiService } from '../services/web-api.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceWebApi: WebApiService
  ) {}

  posts: Post[];
  ngOnInit(): void {
    this.serviceWebApi.obtenerPosts().subscribe((postsApi: Post[]) => {
      this.posts = postsApi;
    }, error => console.log(error));
  }

  navegarHaciaUsuarios() {
    this.router.navigate(['/usuarios']);
  }
}
