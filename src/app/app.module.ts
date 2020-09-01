import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../app/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostListingComponentComponent } from './post-listing-component/post-listing-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { StoryComponentComponent } from './story-component/story-component.component';
import { OnlineRoomComponentComponent } from './online-room-component/online-room-component.component';
import { CommentComponentComponent } from './comment-component/comment-component.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, PostComponentComponent, PostListingComponentComponent, HeaderComponentComponent, NewPostComponentComponent, StoryComponentComponent, OnlineRoomComponentComponent, CommentComponentComponent],
  imports: [BrowserModule, MaterialModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
