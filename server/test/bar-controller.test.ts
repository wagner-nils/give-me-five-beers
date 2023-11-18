// TODO Happy route: tests for expected input
import request from 'supertest'
import express from 'express'
import assert from 'assert'
import app from '../index'
// const request = require('supertest');
// const express = require('express');
// const router = require('../router')
// var request = require('supertest')
// var express = require('express')


describe ('GET /', () => {
    it('responds with message', async () => {
        return request(app)
        .get('/')
        // .set('Accept', 'application/json')
        // .expect('Content-Type', /json/)
        .expect(400)
        .then(response => {
            console.log(response.body)
            assert(response.body, 'hello from router, i love typescript')
        })



        // const res = request(app)
        // res.get('http://localhost:3000/')
        // .expect(res.body.message).toBe('hello from router, i love typescript')
        
        // // .get('http://localhost:3000/')
        // .set('Accept', 'text')
        // .expect(200)
        // .end(function(err, res) {
        //   if (err) throw err;
        // });
    })
})










// const app = express()

/* // Connects to LOCAL database called avengers
beforeAll(async () => {
    const app = express()
    request(app)
    // const url = `mongodb://127.0.0.1/avengers`
    // console.log(request(app))
    // await mongoose.connect(url, { useNewUrlParser: true })
  })


describe ('GET /', () => {
    it('responds with message', async () => {
        const res = request(app)
        res.get('http://localhost:3000/')
        console.log(res)
        // res
        // .get('http://localhost:3000/')
        // .set('Accept', 'text')
        // .expect(response.body.message).toBe('hello from router, i love typescript')
        // .expect(200)
        // .end(function(err, res) {
        //   if (err) throw err;
        // });
    })
})


// TODO Unhappy route: tests for unexpected input */