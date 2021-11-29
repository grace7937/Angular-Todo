import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable() 
export class ServiceComponent {
  constructor(

    routingCount = 0;
    private router : Router

  ) {}

  goPage(target) {
    this.routingCount ++;
    this.router.navigateByUrl('/stopwatch');
  }
}

