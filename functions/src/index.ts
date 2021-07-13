import * as functions from "firebase-functions";

import express from 'express';
import cors from 'cors';

const stripe  = require('stripe')('pk_test_oGd5T3CDk8Q8hiubWfgminzJ0003CYM2Lf');
